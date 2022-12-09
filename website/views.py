# File for everything what is visible for everyone 
from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route("/")
@views.route("/home")
def home():
    return render_template('home.html', names = ["Kunda", "pica", 'curak', 'mrzak'])
