# file for everything what is for logged users
from flask import Blueprint,render_template, redirect, url_for, request, flash
from . import db 
from .models import User
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email= request.form.get("email")
        password = request.form.get("password")
        
        user = User.query.filter_by(email=email)
        if user:
            if check_password_hash(user.password, password):
                flash('Úspěšně jsi se přihlásil', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else:
                flash('Zadal jsi nesprávné heslo', category='error')
        else:
            flash('Zadal jsi nesprávné přihlašovací údaje.', category='error')
            
    return render_template('login.html')

@auth.route('/sign_up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        username= request.form.get("username")
        email= request.form.get("email")
        password1 = request.form.get("password1")
        password2 = request.form.get("passsword2")
        
        email_exist = User.query.filter_by(email=email).first()
        user_exist = User.query.filter_by(username=username).first()
        if email_exist:
            flash('Tento email je již zaregistrovaný', category='error')
        elif user_exist:
            flash('Toto přihlašovací jméno je již použito.', category='error')
        elif password1 != password2:
            flash('Heslo a potvrzen9 hesla se musí shodovat.', category='error')
        elif len(username) < 6:
            flash('Přihlašovací jméno musí být delší než 5 znaků.', category='error')
        elif len(password1) < 8:
            flash('Heslo musí být dlouhé alespoň 8 znaků.', category='error')
        elif len(email) < 10:
            flash('Tento email nelze použít', category='error')
        else:
            new_user = User(email=email, username=username, password=generate_password_hash(password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            flash('Profil byl úspěšně vytvořen.')
            return redirect(url_for('views.home'))
        
    return render_template('signup.html')


@login_required
@auth.route('/logout')
def logout():
    logout_user(current_user)
    return redirect(url_for('views.home.html'))