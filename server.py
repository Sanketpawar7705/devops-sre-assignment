from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route("/")
def home():
    file = open("scraped_data.json")
    data = json.load(file)
    return jsonify(data)

app.run(host="0.0.0.0", port=5000)
