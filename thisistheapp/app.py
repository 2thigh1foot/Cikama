import config
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_wtf import FlaskForm
from flask_login import LoginManager, UserMixin, current_user, login_user, logout_user, login_required
from flask_pymongo import PyMongo

from werkzeug.security import generate_password_hash, check_password_hash

from wtforms import StringField, PasswordField, DateField, SelectField, IntegerField
from wtforms.validators import InputRequired, Length, Email, EqualTo, Optional, AnyOf, ValidationError

import pickle
import json
import hashlib

app = Flask(__name__)
app.secret_key = config.secret_key
salt = config.salt

app.config["MONGO_URI"] = f"mongodb+srv://cjjones:{config.mongo_password}@cikama-89hti.mongodb.net/Cikama?retryWrites=true&w=majority"
mongo = PyMongo(app)
users = mongo.db.users
allplants = mongo.db.plants

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

class RegisterForm(FlaskForm):
    email      = StringField("Email",            validators=[Email()])
    username   = StringField("User",             validators=[Length(min=5)])
    zipcode    = IntegerField("Zipcode",         )
    password   = PasswordField("Password",       validators=[InputRequired(),EqualTo('confirm',message='Passwords must match')])
    confirm    = PasswordField("Confirm Password")

class LoginForm(FlaskForm):
    username   = StringField("User")
    password   = PasswordField("Password")

class Users:
    def __init__(self, obj):
        self.id       = obj["_id"]
        self.username = obj["username"]
        self.email    = obj["email"]
        self.zipcode  = obj.get("zipcode", 91711)
        self.password = obj["password"]
        self.plants   = obj.get("plants", [])

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.username

    def check_password(self, attempt):
        return check_password_hash(self.password, attempt+salt)

@login_manager.user_loader
def load_user(user_id):
    user = users.find_one({'username': user_id})

    if not user:
        return None

    return Users(user)

@app.route("/profile")
def profile():
    if not current_user.is_authenticated:
        return redirect("/login")

    user = users.find_one({'username': current_user.username})
    plants = user.get("plants", [])
    user_plants = allplants.find({"id": {"$in": plants}})
    return render_template("profile.html", current_user=current_user, user_plants=user_plants)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/register",methods=["GET","POST"])
def register():
    if current_user.is_authenticated:
        return redirect("/profile")

    form = RegisterForm()

    if form.validate_on_submit():
        username = form.username.data
        user  = users.find_one({'username': username})

        if user != None:
            return render_template("register.html", form=form, message="Username already exists")

        user_id = users.insert({'email': form.email.data, 
                             'username': form.username.data,
                             'zipcode': form.zipcode.data, 
                             'plants': [],
                             'password': generate_password_hash(form.password.data+salt)})
        user_obj = Users(users.find_one({"_id":user_id}))
        login_user(user_obj,remember=True)
        return redirect("/profile")

    return render_template("register.html", form=form)

@app.route("/login", methods=["GET","POST"])
def login():
    if current_user.is_authenticated:
        return redirect("/profile")

    form = LoginForm()
    if form.validate_on_submit():
        user = users.find_one({'username': form.username.data})

        if user is None:
            return render_template("login.html",form=form,message="Invalid username")

        user_obj = Users(user)
        if not user_obj.check_password(form.password.data):
            return render_template("login.html",form=form,message="Invalid password")
        
        login_user(user_obj, remember=True)
        return redirect("/profile")
    return render_template("login.html", form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect("/")

@app.route('/plants')
def plants():
    return render_template("plantadd.html")

plantList = []
@app.route("/query",methods=["POST"])
def query():
    def is_int(s):
        try:
            int(s)
            return True
        except:
            return False

    value = request.args.get("value")

    if not value:
        return jsonify({"message":"error", "error": True}), 401

    entries = [x.strip().lower() for x in value.split("%20")[:10]]
    valid = []
    print("Len", len(plantList))
    for plant_id in plantList:
        plant = plantList[plant_id]
        if len(valid) == 20:
            break

        for entry in entries:
            if is_int(entry):
                if entry in str(plant.get("id", "")):
                    valid.append(plant)
                    break
            else:
                to_find = [
                    plant.get("common_name", ""), 
                    plant.get("scientific_name", ""),
                    plant.get("scientific_name", "")
                ]
                to_find = [x.lower() for x in to_find if x != None]
                to_find = [entry in x for x in to_find]
                if sum(to_find):
                    valid.append(plant)
                    break
    return jsonify(valid), 200

@app.route("/addplant/<plant_id>", methods=["POST"])
def addplant(plant_id):
    if not current_user.is_authenticated:
        return jsonify({"message": "Not logged in.", "error": True})
    
    try:
        int(plant_id)
    except:
        return jsonify({"message": "Invalid plant id", "error": True})

    q = {"username": current_user.username }
    users.update_one(q, { "$push": {"plants": int(plant_id)}})

    return jsonify({"message":"success", "error": False})
    
@app.route("/delplant/<plant_id>", methods=["POST"])
def delplant(plant_id):
    if not current_user.is_authenticated:
        return jsonify({"message": "Not logged in.", "error": True})
    
    try:
        int(plant_id)
    except:
        return jsonify({"message": "Invalid plant id", "error": True})

    q = {"username": current_user.username }
    users.update_one(q, { "$pull": {"plants": int(plant_id)}})

    return jsonify({"message":"successfully removed plant", "error": False})
    
def setup():
    global plantList
    # Use the pickled file to make plantData js file if it hasn't
    plantList = pickle.load( open("trefle/all_plants.p","rb"))
    # Remove species for now
    plantList = [x for x in plantList if not "family_common_name" in x]
    plantObj = {}

    for plant in plantList:
        plantObj[plant["id"]] = plant
    
    plantList = plantObj

if __name__ == "__main__":
    setup()
    app.run(debug=True)