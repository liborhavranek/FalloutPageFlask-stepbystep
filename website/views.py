# File for everything what is visible for everyone 
from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify
from .models import User, Post, Comment, Like
from flask_login import login_user, logout_user, login_required, current_user
from . import db

views = Blueprint('views', __name__)

@views.route("/")
@views.route("/home")
@login_required
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
@login_required
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


@views.route(("/like_post/<post_id>"), methods=['POST'])
@login_required
def like(post_id):
    post = Post.query.filter_by(id=post_id).first()
    like = Like.query.filter_by(author=current_user.id, post_id=post_id).first()
    if not post:
        return jsonify({'error': 'Nmůžeš likovat příspěvek, který neexistuje'}, 400)
    elif like:
        print('stop like')
        db.session.delete(like)
        db.session.commit()
    else:
        like = Like(author=current_user.id, post_id=post_id)
        print('add like')
        db.session.add(like)
        db.session.commit()
    return jsonify({"likes": len(post.likes), "liked": current_user.id in map(lambda x: x.author, post.likes)})
        