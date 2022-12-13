# File for everything what is visible for everyone 
from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify
from .models import User, Post, Comment, Like, Dislike
from flask_login import login_user, logout_user, login_required, current_user
from . import db

views = Blueprint('views', __name__)

@views.route("/")
@views.route("/home")
def home():
    return render_template('home.html', user=current_user)


@views.route("/create_post", methods=['GET', 'POST'])
@login_required
def create_post():
    if request.method == 'POST':
        text = request.form.get("text")
        title = request.form.get("title")
        if not title:
            flash('Titulek musí mít alespoň 5 znaků', category='error')
        elif len(title) < 5:
            flash('Titulek musí mít alespoň 5 znaků', category='error')
        else:
            if not text:
                flash('Příspěvek musí mít alespoň 5O znaků', category='error')
            elif len(text) < 50:
                flash('Příspěvek musí mít alespoň 5O znaků', category='error')
            else:
                post = Post(text=text, title=title, author=current_user.id)
                db.session.add(post)
                db.session.commit()
                flash('Příspěvek byl přidán', category='success')
                return redirect(url_for('views.post_board'))
    return render_template('create_post.html', user=current_user)

@views.route("/edit_post/<int:id>", methods=['GET', 'POST'])
@login_required
def edit_post(id):
    post = Post.query.filter_by(id=id).first()
    if request.method == 'POST':
        text = request.form.get("text")
        title = request.form.get("title")
        if not title:
            flash('Titulek musí mít alespoň 5 znaků', category='error')
        elif len(title) < 5:
            flash('Titulek musí mít alespoň 5 znaků', category='error')
        else:
            if not text:
                flash('Příspěvek musí mít alespoň 5O znaků', category='error')
            elif len(text) < 50:
                flash('Příspěvek musí mít alespoň 5O znaků', category='error')
            else:
                post.text = text
                post.title = title
                db.session.add(post)
                db.session.commit()
                flash('Příspěvek byl aktualizovan', category='success')
                return redirect(url_for('views.post_board'))
    return render_template('edit_post.html', user=current_user, id=post.id, post=post )
    




@views.route("/post_board")
def post_board():
    posts = Post.query.all()
    return render_template('post_board.html', user=current_user, posts=posts)

@views.route('/delete_post/<int:id>')
@login_required
def delete_post(id):
    post = Post.query.filter_by(id=id).first()
    if not post:
        flash('Příspěvek neexistuje', category='error')
    else:
        db.session.delete(post)
        db.session.commit()
        flash('Příspěvek byl smazán', category='success')
        return render_template('post_board.html', user=current_user, post=post )


@views.route('/posts/<username>')
@login_required
def posts(username):
    user = User.query.filter_by(username=username).first()
    if not user:
        flash('Tento profil neexistuje', category='error')
        return redirect(url_for('views.home'))
    # posts = Post.query.filter_by(author=user.id).all()
    # Protože mám v databázi User posts můžu místo koukání do databáze řádkem na hoře 
    # použít jen posts = user.posts
    posts = user.posts
    return render_template('posts.html', user=current_user, posts=posts, username=username)


@views.route('/post/<int:id>')
@login_required
def post(id):
    post = Post.query.filter_by(id=id).first()
    if not post:
        flash('Příspěvek neexistuje', category='error')
    else:
        return render_template('post.html', post=post, id=id, user=current_user)
    
    
@views.route('/create_comment/<post_id>', methods=['POST'])
@login_required
def create_comment(post_id):
    text = request.form.get("text")
    if not text:
        flash('Nemůžete odeslat prázdný komentář', category='error')
    else:
        post = Post.query.filter_by(id=post_id)
        if post:
            comment = Comment(text=text, author=current_user.id, post_id=post_id)
            db.session.add(comment)
            db.session.commit()
        else:
            flash('Příspěvek neexistuje', category='error')
    return redirect(url_for('views.post_board'))

@views.route("/edit_comment/<comment_id>", methods=['GET', 'POST'])
def edit_comment(comment_id):
    comment = Comment.query.filter_by(id=comment_id).first()
    if request.method == 'POST':
        text = request.form.get("comentary_text")
        print(text)
        if not text:
            flash('Nemůžete upravit prázdný komentář', category='error')
            return redirect(url_for('views.post_board'))
        else:
            comment.text = text
            db.session.add(comment)
            db.session.commit()
            return redirect(url_for('views.post_board'))


@views.route("/delete_comment/<comment_id>")
@login_required
def delete_comment(comment_id):
    comment = Comment.query.filter_by(id=comment_id).first()

    if not comment:
        flash('Comentář neexistuje.', category='error')
    elif current_user.id != comment.author and current_user.id != comment.post.author:
        flash('Nemůžeš smazat tento příspěvek.', category='error')
    else:
        db.session.delete(comment)
        db.session.commit()

    return redirect(url_for('views.post_board'))


@views.route("/like_post/<post_id>", methods=['POST'])
@login_required
def like(post_id):
    post = Post.query.filter_by(id=post_id).first()
    like = Like.query.filter_by(author=current_user.id, post_id=post_id).first()
    if not post:
        return jsonify({'error': 'Nmůžeš likovat příspěvek, který neexistuje'}, 400)
    elif like:
        # print('stop like')
        db.session.delete(like)
        db.session.commit()
    else:
        like = Like(author=current_user.id, post_id=post_id)
        # print('add like')
        db.session.add(like)
        db.session.commit()
    return jsonify({"likes": len(post.likes), "liked": current_user.id in map(lambda x: x.author, post.likes)})

@views.route("/dislike_post/<post_id>", methods=['POST'])
@login_required
def dislike(post_id):
    post = Post.query.filter_by(id=post_id).first()
    dislike = Dislike.query.filter_by(author=current_user.id, post_id=post_id).first()
    if not post:
        return jsonify({'error': 'Nmůžeš dislikovat příspěvek, který neexistuje'}, 400)
    elif dislike:
        print('stop dislike')
        db.session.delete(dislike)
        db.session.commit()
    else:
        dislike = Dislike(author=current_user.id, post_id=post_id)
        print('add dislike')
        db.session.add(dislike)
        db.session.commit()
    return jsonify({"dislikes": len(post.dislikes), "disliked": current_user.id in map(lambda y: y.author, post.dislikes)})




























































@views.route('/admin')
@login_required
def admin():
    users = User.query.order_by(User.date_created)
    posts = Post.query.order_by(Post.date_created)
    comments= Comment.query.order_by(Comment.date_created)
    return render_template('admin.html', user=current_user, users=users, posts=posts, comments=comments)












@views.route('/bobbleheads')
def bobbleheads():
    return render_template('bobbleheads.html', user=current_user)


@views.route('/perception-bobblehead')
def perception_bobblehead():
    return render_template('bobbleheads/perception-bobblehead.html', user=current_user)


@views.route('/explosive-bobblehead')
def explosive_bobblehead():
    return render_template('bobbleheads/explosive-bobblehead.html', user=current_user)

@views.route('/repair-bobblehead')
def repair_bobblehead():
    return render_template('bobbleheads/repair-bobblehead.html', user=current_user)

@views.route('/luck-bobblehead')
def luck_bobblehead():
    return render_template('bobbleheads/luck-bobblehead.html', user=current_user)

@views.route('/agility-bobblehead')
def agility_bobblehead():
    return render_template('bobbleheads/agility-bobblehead.html', user=current_user)

@views.route('/endurance-bobblehead')
def endurance_bobblehead():
    return render_template('bobbleheads/endurance-bobblehead.html', user=current_user)

@views.route('/unarmed-bobblehead')
def unarmed_bobblehead():
    return render_template('bobbleheads/unarmed-bobblehead.html', user=current_user)

@views.route('/smallguns-bobblehead')
def smallguns_bobblehead():
    return render_template('bobbleheads/smallguns-bobblehead.html', user=current_user)

@views.route('/bigguns-bobblehead')
def bigguns_bobblehead():
    return render_template('bobbleheads/bigguns-bobblehead.html', user=current_user)

@views.route('/medicine-bobblehead')
def medicine_bobblehead():
    return render_template('bobbleheads/medicine-bobblehead.html', user=current_user)

@views.route('/intelligence-bobblehead')
def intelligence_bobblehead():
    return render_template('bobbleheads/intelligence-bobblehead.html', user=current_user)

@views.route('/meele-bobblehead')
def meele_bobblehead():
    return render_template('bobbleheads/meele-bobblehead.html', user=current_user)

@views.route('/lockpick-bobblehead')
def lockpick_bobblehead():
    return render_template('bobbleheads/lockpick-bobblehead.html', user=current_user)

@views.route('/barter-bobblehead')
def barter_bobblehead():
    return render_template('bobbleheads/barter-bobblehead.html', user=current_user)

@views.route('/sneak-bobblehead')
def sneak_bobblehead():
    return render_template('bobbleheads/sneak-bobblehead.html', user=current_user)

@views.route('/science-bobblehead')
def science_bobblehead():
    return render_template('bobbleheads/science-bobblehead.html', user=current_user)

@views.route('/speech-bobblehead')
def speech_bobblehead():
    return render_template('bobbleheads/speech-bobblehead.html', user=current_user)

@views.route('/strength-bobblehead')
def strength_bobblehead():
    return render_template('bobbleheads/strength-bobblehead.html', user=current_user)

@views.route('/charisma-bobblehead')
def charisma_bobblehead():
    return render_template('bobbleheads/charisma-bobblehead.html', user=current_user)

@views.route('/energyweapon-bobblehead')
def eneryweapon_bobblehead():
    return render_template('bobbleheads/energyweapon-bobblehead.html', user=current_user)

@views.route('/trophy')
def trophy():
    return render_template('trophy.html', user=current_user)

@views.route('/bobbleheads-map')
def bobbleheads_map():
    return render_template('bobbleheads-map.html', user=current_user)

@views.route('/testmap')
def testmap():
    return render_template('testmap.html', user=current_user)

@views.route('/maps')
def maps():
    return render_template('maps.html', user=current_user)