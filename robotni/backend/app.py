from flask import Flask, request
from flask_pymongo import PyMongo

app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
app.config["MONGO_URI"] = "mongodb+srv://kemery:sunnypool@robotni-free-jvqvi.mongodb.net/test?retryWrites=true&w=majority"
mongo = PyMongo(app)

# help(mongo.db.create_collection)
# mongo.db.create_collection('Users')
for a in dir(mongo.db):
    print (a)

help 
@app.route("/")
def home_page():
    print (dir(mongo.db))

# @app.route("/user/<username>")
# def user_profile(username):
#     user = mongo.db.users.find_one_or_404({"_id": username})
#     return str(user)

# @app.route('/hello')
# def hello():
#   return 'Hello, greetings from different endpoint'

# #adding variables
# @app.route('/user/<username>')
# def show_user(username):
#   #returns the username
#   return 'Username: %s' % username

# # non integer post_id throws 404
# @app.route('/post/<int:post_id>')
# def show_post(post_id):
#   #returns the post, the post_id should be an int
#   return str(post_id)


# @app.route('/login', methods=['GET','POST'])
# def login():
#   if request.method == 'POST':
#     data = request.form
#     return 'POST'
#   elif request.method == 'GET':
#     #serve login page
#     return "GET"
#     # serve_login_page()
