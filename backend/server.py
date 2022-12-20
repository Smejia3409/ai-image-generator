from flask import Flask, request, jsonify
from controller import create_image

app = Flask(__name__)

@app.route("/getImage")
def get_image():
    prompt = request.args.get('prompt')
    data = jsonify({"url" : create_image(prompt)})
    return data

if __name__ == "__main__":
    app.run(debug=True)