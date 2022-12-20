from flask import Flask, request, jsonify
from controller import create_image
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route("/getImage", methods = ["get"])
def get_image():
    prompt = request.args.get('prompt')
    data = jsonify({"url" : create_image(prompt)})
    return data

if __name__ == "__main__":
    app.run(debug=True)