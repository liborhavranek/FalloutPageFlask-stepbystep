# File for everything what is visible for everyone 
from flask import Blueprint, render_template, request, flash, redirect
from .models import User, Post
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
        if not text:
            flash('Příspěvek musí mít alespoň 5O znaků', category='error')
        elif len(text) < 50:
            flash('Příspěvek musí mít alespoň 5O znaků', category='error')
        else:
            post = Post(text=text, author=current_user.id)
            db.session.add(post)
            db.session.commit()
            flash('Příspěvek byl přidán', category='success')
            return redirect('views.home')
    return render_template('create_post.html', user=current_user)


@views.route("/post_board")
@login_required
def post_board():
    posts = Post.query.all()
    return render_template('post_board.html', user=current_user, posts=posts)