from flask import Flask, request
import gpt4all
import os

app = Flask(__name__)

@app.route("/")
def index():
    prompt = request.args.get("prompt", "hello")
    gptj = gpt4all.GPT4All("ggml-gpt4all-j-v1.3-groovy", "./app/models")
    generate_text = gptj.generate(prompt)
    return {"prompt": "prompt", "answer": generate_text}
    