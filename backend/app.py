from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "SilentVoice Flask backend is running!"

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    app.run(debug=True)

