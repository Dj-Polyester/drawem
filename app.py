from flask import Flask, request, render_template
from flask.cli import AppGroup
from flask_sqlalchemy import SQLAlchemy
from pathlib import Path
from credentials import *

staticDir = "static"
templatesDir = Path(staticDir, "templates")

app = Flask(__name__, static_folder=staticDir, template_folder=templatesDir)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql+psycopg2://{DBUSER}:{DBPASSWD}@{DBHOST}:{DBPORT}/{DBNAME}"
db = SQLAlchemy(app)
# MODELS


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40))
    email = db.Column(db.String(40), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return f"<User {self.id}, {self.username}, {self.email}>"


class Key(db.Model):
    __tablename__ = 'keys'
    id = db.Column(db.Integer, primary_key=True)
    key = db.Column(db.String(40))

    def __init__(self, id, key):
        self.id = id
        self.key = key

    def __repr__(self):
        return f"<Key {self.id}, {self.key}>"

# ROUTES


@app.route("/signin", methods=["GET", "POST"])
def signinRoute():
    if request.method == "GET":
        return render_template("signin.html")
    elif request.method == "POST":
        content_type = request.headers.get('Content-Type')
        return f'{content_type}: {request.form}!'


@app.route("/signup", methods=["GET", "POST"])
def signupRoute():
    if request.method == "GET":
        return render_template("signup.html")
    elif request.method == "POST":
        content_type = request.headers.get('Content-Type')
        data = request.form

        # username = data["username"]
        # email = data["email"]
        # passwd = data["password"]

        # _user = User(username, email)
        # _key = Key(passwd)

        # db.session.add(_user)
        # db.session.add(_key)

        return f'{content_type}: {data}!'


@app.route("/canvas")
def canvasRoute():
    return render_template("canvas.html")
# COMMANDS


db_cli = AppGroup('db')


@db_cli.command('create')
def createdb():
    """Creates the database + tables."""
    db.create_all()


@db_cli.command('drop')
def dropdb():
    """drops the database + tables."""
    db.drop_all()


app.cli.add_command(db_cli)


@app.shell_context_processor
def make_shell_context():
    return {"db": db, "User": User, "Key": Key}


# MAIN
if __name__ == "__main__":
    app.run(debug=True)
