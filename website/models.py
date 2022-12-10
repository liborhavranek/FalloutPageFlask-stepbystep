from . import db 
from flask_login import UserMixin
from sqlalchemy.sql import func


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    username = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())
    # pridani do databazevsech postu a komentaru ktere uzivatel napise
    posts = db.relationship('Post', backref='user', passive_deletes=True)
    # commments = db.relationship('Comment', backref='user', passive_deletes=True)


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    title = db.Column(db.String(150), nullable=False)
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())
    author = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    # commments = db.relationship('Comment', backref='user', passive_deletes=True)

    
# class Comment(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     text = db.Column(db.Text, nullable=False)
#     date_created = db.Column(db.DateTime(timezone=True), default=func.now())
#     author = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
#     post_id = db.Column(db.Integer, db.ForeignKey('post.id', ondelete="CASCADE"), nullable=False)
