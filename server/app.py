from flask import Flask, request, jsonify
from tensorflow import keras
import numpy as np
from PIL import Image
import io
import cv2


app = Flask(__name__)

CATARACT_MODEL_PATH = 'models/cataract.h5'

# Load the pre-trained CNN model
model = keras.models.load_model(CATARACT_MODEL_PATH)

# Define the expected input dimensions for the model
input_width, input_height = 224, 224

@app.route('/')
def index():
    return 'CNN Model Prediction App'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the image file from the request
        image = request.files['image']

        # Read the image using OpenCV and preprocess it
        image = cv2.imdecode(np.fromstring(image.read(), np.uint8), cv2.IMREAD_COLOR)
        image = cv2.resize(image, (input_width, input_height))
        img_array = np.array(image) / 255.0  # Normalize the pixel values

        # Make predictions using the loaded model
        predictions = model.predict(np.expand_dims(img_array, axis=0))

        return jsonify({'predictions': predictions.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
