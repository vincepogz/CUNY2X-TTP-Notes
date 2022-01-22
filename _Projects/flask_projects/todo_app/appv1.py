from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import sqlalchemy

app = Flask(__name__)

@app.route("/")
def home1():
    return 'hi there'

if __name__ == "__main__":
    app.run(debug=True)