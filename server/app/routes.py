# app/routes.py
from flask import request, jsonify
from app import app
from app.controllers import cataract_controller  

@app.route('/')
def index():
    return 'CNN Model Prediction App'


@app.route('/predict/cataract', methods=['POST'])
def predict_cataract():
    return cataract_controller.predict_cataract(request)
