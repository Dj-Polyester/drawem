from PIL import Image
from flask import Flask, render_template, send_file

app = Flask(__name__)


@app.route("/")
def rootRouter():
    return render_template("canvas.html")


@app.route("/sunset")
def sunsetRouter():
    return send_file("static/images/sunset.jpg", mimetype="image/jpeg")


if __name__ == "__main__":
    app.run(debug=True)
