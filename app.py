from flask import Flask, request, jsonify, abort
from flask_cors import CORS, cross_origin
import datetime as dt

import buDClass as bdc

# Whitenoise enables Flask to serve static files efficiently.
from whitenoise import WhiteNoise

app = Flask(__name__)
app.wsgi_app = WhiteNoise(
    app.wsgi_app, root="static/", autorefresh=True
)

CORS(app)

@app.route("/api/time")

def time():
    dictSearchParams = {'startDate' : request.args.get('argSDate'),
                        'startTime' : request.args.get('argSTime'),
                        'endDate' : request.args.get('argEDate'),
                        'endTime' : request.args.get('argETime')
                        }
    return jsonify(dictSearchParams)

if __name__=="__main__":
    app.run()





