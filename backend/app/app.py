from flask import Flask, request, abort, make_response, jsonify
import gpt4all
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.after_request
def after_request(response):
  # response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route("/", methods=['GET'])
def index():
    prompt = request.args.get("prompt", "hello")
    gptj = gpt4all.GPT4All("ggml-gpt4all-j-v1.3-groovy", "./app/models")
    generate_text = gptj.generate(prompt)
    result = {"prompt": prompt, "answer": generate_text}
    return make_response(jsonify(result))
    