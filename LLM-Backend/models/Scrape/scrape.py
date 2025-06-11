import requests
from PIL import Image, ImageOps
import pytesseract
import json
import re

# --- Step 1: Load and Preprocess Image ---
image_path = "chart.png"
img = Image.open(image_path)

# Crop top 1/3 region of the image to focus on OHLC and Buy/Sell
width, height = img.size
top_region = img.crop((0, 0, width, height // 3))

# Convert to grayscale
gray = ImageOps.grayscale(top_region)

# Invert the image (dark -> light)
inverted = ImageOps.invert(gray)

# Optional: Save for debug
# inverted.save("debug_preprocessed.png")

# OCR: Extract text from preprocessed region
extracted_text = pytesseract.image_to_string(inverted).strip()

print("Extracted Text:\n", extracted_text)

# --- Step 2: Prompt ---
prompt = f"""
You are a financial data parser.

Given the extracted text (via OCR) from a stock chart screenshot, identify and return:
- The stock symbol or name (e.g., "AAPL", "Apple Inc.")
- The Open, High, Low, and Close (OHLC) prices.

Do not infer values. Only extract them if clearly present. If any value is missing or ambiguous, return it as null.

OCR Extracted Text:
\"\"\"
{extracted_text}
\"\"\"

Return your answer strictly in the following JSON format:
{{
  "stock": "AAPL",
  "open": 120.0,
  "high": 135.0,
  "low": 119.5,
  "close": 133.0
}}

If a value is not found, use null.
"""

# --- Step 3: Send to Ollama ---
response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3",
        "prompt": prompt,
        "stream": False
    }
)

# --- Step 4: Parse JSON from Output ---
try:
    raw_output = response.json().get("response", "")
    json_match = re.search(r"\{.*\}", raw_output, re.DOTALL)

    if json_match:
        parsed_json = json.loads(json_match.group(0))
        print("Structured Output:\n", json.dumps(parsed_json, indent=2))
    else:
        raise ValueError("No JSON found in the response.")

except Exception as e:
    print("Error parsing response:", e)
    print("Raw response:\n", response.text)