from flask import Flask
import os


app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/getImage")
def get_image():
    return "api"


print(os.getenv())


if __name__ == "__main__":
    app.run(debug=True)
