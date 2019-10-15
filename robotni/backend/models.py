from flask_login import UserMixin
import app

db = app.app.config.get('MONGODB_SETTINGS')['db']

class User(UserMixin, db.Document):
    meta = {'collection': '<---YOUR_COLLECTION_NAME--->'}
    email = db.StringField(max_length=30)
    password = db.StringField()

@login_manager.user_loader
def load_user(user_id):
    return User.objects(pk=user_id).first()

class RegForm(FlaskForm):
    email = StringField('email',  validators=[InputRequired(), Email(message='Invalid email'), Length(max=30)])
    password = PasswordField('password', validators=[InputRequired(), Length(min=8, max=20)])