import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os
import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

class StockPatternCNN:
    def __init__(self, input_shape=(224, 224, 3)):
        self.input_shape = input_shape
        self.model = None
        
    def create_model(self, num_classes=2):
        """Create CNN model for stock pattern classification"""
        
        self.model = models.Sequential([
            # First Convolutional Block
            layers.Conv2D(32, (3, 3), activation='relu', input_shape=self.input_shape),
            layers.MaxPooling2D((2, 2)),
            layers.BatchNormalization(),
            
            # Second Convolutional Block
            layers.Conv2D(64, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.BatchNormalization(),
            
            # Third Convolutional Block
            layers.Conv2D(128, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.BatchNormalization(),
            
            # Fourth Convolutional Block
            layers.Conv2D(256, (3, 3), activation='relu'),
            layers.MaxPooling2D((2, 2)),
            layers.BatchNormalization(),
            
            # Global Average Pooling instead of Flatten
            layers.GlobalAveragePooling2D(),
            
            # Dense layers with dropout
            layers.Dense(512, activation='relu'),
            layers.Dropout(0.5),
            layers.Dense(256, activation='relu'),
            layers.Dropout(0.3),
            
            # Output layer
            layers.Dense(num_classes, activation='softmax')
        ])
        
        # Compile model
        self.model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
        
        return self.model
    
    def prepare_data(self, data_dir, batch_size=32, validation_split=0.2):
        """Prepare data generators for training"""
        
        # Data augmentation for training
        train_datagen = ImageDataGenerator(
            rescale=1./255,
            rotation_range=10,
            width_shift_range=0.1,
            height_shift_range=0.1,
            horizontal_flip=False,  # Don't flip financial charts
            zoom_range=0.1,
            validation_split=validation_split
        )
        
        # Only rescaling for validation
        val_datagen = ImageDataGenerator(
            rescale=1./255,
            validation_split=validation_split
        )
        
        # Create generators
        train_generator = train_datagen.flow_from_directory(
            data_dir,
            target_size=self.input_shape[:2],
            batch_size=batch_size,
            class_mode='categorical',
            subset='training'
        )
        
        validation_generator = val_datagen.flow_from_directory(
            data_dir,
            target_size=self.input_shape[:2],
            batch_size=batch_size,
            class_mode='categorical',
            subset='validation'
        )
        
        return train_generator, validation_generator
    
    def train(self, train_generator, validation_generator, epochs=50):
        """Train the CNN model"""
        
        # Callbacks
        callbacks = [
            tf.keras.callbacks.EarlyStopping(
                monitor='val_accuracy',
                patience=10,
                restore_best_weights=True
            ),
            tf.keras.callbacks.ReduceLROnPlateau(
                monitor='val_loss',
                factor=0.2,
                patience=5,
                min_lr=0.0001
            ),
            tf.keras.callbacks.ModelCheckpoint(
                'best_pattern_model.h5',
                monitor='val_accuracy',
                save_best_only=True
            )
        ]
        
        # Train model
        history = self.model.fit(
            train_generator,
            steps_per_epoch=train_generator.samples // train_generator.batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=validation_generator.samples // validation_generator.batch_size,
            callbacks=callbacks
        )
        
        return history
    
    def plot_training_history(self, history):
        """Plot training and validation metrics"""
        
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
        
        # Plot accuracy
        ax1.plot(history.history['accuracy'], label='Training Accuracy')
        ax1.plot(history.history['val_accuracy'], label='Validation Accuracy')
        ax1.set_title('Model Accuracy')
        ax1.set_xlabel('Epoch')
        ax1.set_ylabel('Accuracy')
        ax1.legend()
        
        # Plot loss
        ax2.plot(history.history['loss'], label='Training Loss')
        ax2.plot(history.history['val_loss'], label='Validation Loss')
        ax2.set_title('Model Loss')
        ax2.set_xlabel('Epoch')
        ax2.set_ylabel('Loss')
        ax2.legend()
        
        plt.tight_layout()
        plt.savefig('training_history.png')
        plt.show()
    
    def predict_pattern(self, image_path):
        """Predict pattern from a single image"""
        
        if self.model is None:
            raise ValueError("Model not created. Call create_model() first.")
        
        # Load and preprocess image
        img = tf.keras.preprocessing.image.load_img(
            image_path, 
            target_size=self.input_shape[:2]
        )
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)  # Create batch
        img_array /= 255.0  # Rescale
        
        # Make prediction
        predictions = self.model.predict(img_array)
        
        return predictions

# Example usage script
def main():
    """Main training script"""
    
    # Initialize model
    cnn = StockPatternCNN()
    model = cnn.create_model(num_classes=2)  # bullish vs bearish
    
    print("Model Summary:")
    model.summary()
    
    # Check if enhanced data exists
    if os.path.exists('enhanced_data'):
        print("\\nPreparing data generators...")
        train_gen, val_gen = cnn.prepare_data('enhanced_data')
        
        print(f"Training samples: {train_gen.samples}")
        print(f"Validation samples: {val_gen.samples}")
        print(f"Classes: {train_gen.class_indices}")
        
        print("\\nStarting training...")
        history = cnn.train(train_gen, val_gen, epochs=30)
        
        print("\\nPlotting training history...")
        cnn.plot_training_history(history)
        
        print("\\nTraining complete! Model saved as 'best_pattern_model.h5'")
        
    else:
        print("Enhanced data not found. Please run enhanced_pattern.py first.")

if __name__ == "__main__":
    main()
