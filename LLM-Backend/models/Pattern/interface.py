import tensorflow as tf
import numpy as np
import os
from PIL import Image
import matplotlib.pyplot as plt

def load_trained_model(model_path="best_pattern_model.h5"):
    """Load the trained CNN model"""
    try:
        model = tf.keras.models.load_model(model_path)
        print(f"✅ Model loaded successfully from {model_path}")
        return model
    except Exception as e:
        print(f"❌ Error loading model: {e}")
        return None

def preprocess_image(image_path, target_size=(224, 224)):
    """Preprocess image for model prediction"""
    try:
        # Load image
        img = Image.open(image_path)
        print(f"📷 Original image size: {img.size}")
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to model input size
        img = img.resize(target_size)
        
        # Convert to numpy array
        img_array = np.array(img)
        
        # Normalize pixel values to [0, 1]
        img_array = img_array.astype(np.float32) / 255.0
        
        # Add batch dimension
        img_array = np.expand_dims(img_array, axis=0)
        
        print(f"🔄 Preprocessed image shape: {img_array.shape}")
        return img_array
        
    except Exception as e:
        print(f"❌ Error preprocessing image: {e}")
        return None

def predict_pattern(model, image_array):
    """Make prediction using the trained model"""
    try:
        # Make prediction
        predictions = model.predict(image_array, verbose=0)
        
        # Get class probabilities
        bearish_prob = predictions[0][0]
        bullish_prob = predictions[0][1]
        
        # Determine predicted class
        predicted_class = "Bullish" if bullish_prob > bearish_prob else "Bearish"
        confidence = max(bearish_prob, bullish_prob)
        
        return {
            "predicted_class": predicted_class,
            "confidence": confidence,
            "bearish_probability": bearish_prob,
            "bullish_probability": bullish_prob
        }
        
    except Exception as e:
        print(f"❌ Error making prediction: {e}")
        return None

def test_pattern_detection(model_path="best_pattern_model.h5", image_path="chart.png"):
    """Main function to test pattern detection"""
    print("🚀 Starting Pattern Detection Test")
    print("=" * 50)
    
    # Check if files exist
    if not os.path.exists(model_path):
        print(f"❌ Model file not found: {model_path}")
        return
    
    if not os.path.exists(image_path):
        print(f"❌ Image file not found: {image_path}")
        return
    
    # Load model
    model = load_trained_model(model_path)
    if model is None:
        return
    
    # Preprocess image
    image_array = preprocess_image(image_path)
    if image_array is None:
        return
    
    # Make prediction
    prediction_result = predict_pattern(model, image_array)
    if prediction_result is None:
        return
    
    # Display results
    print("\n📊 PREDICTION RESULTS:")
    print("=" * 30)
    print(f"Predicted Pattern: {prediction_result['predicted_class']}")
    print(f"Confidence: {prediction_result['confidence']:.2%}")
    print(f"\nDetailed Probabilities:")
    print(f"• Bearish: {prediction_result['bearish_probability']:.2%}")
    print(f"• Bullish: {prediction_result['bullish_probability']:.2%}")
    
    return prediction_result

if __name__ == "__main__":
    result = test_pattern_detection("best_pattern_model.h5", "chart.png")
    if result:
        print(f"\n🎯 SUMMARY: {result['predicted_class']} pattern with {result['confidence']:.1%} confidence!")
    else:
        print("❌ Pattern detection failed.")
