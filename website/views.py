# File for everything what is visible for everyone 
from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return "home"
