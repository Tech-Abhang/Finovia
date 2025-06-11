import pandas as pd
import mplfinance as mpf
import numpy as np
import os
import random
from datetime import datetime, timedelta

BASE_DIR = "enhanced_data"

def generate_realistic_chart_data(pattern_type, days=50):
    """Generate realistic multi-day chart data with a specific pattern embedded"""
    
    # Generate base trend data
    dates = pd.date_range(start='2023-01-01', periods=days, freq='D')
    base_price = random.uniform(150, 250)
    
    # Create realistic price movement
    returns = np.random.normal(0.001, 0.02, days)  # Small daily returns with volatility
    prices = [base_price]
    
    for i in range(1, days):
        price_change = prices[-1] * returns[i]
        new_price = prices[-1] + price_change
        prices.append(max(new_price, 1))  # Ensure positive prices
    
    # Generate OHLC data
    ohlc_data = []
    for i, price in enumerate(prices):
        daily_volatility = random.uniform(0.01, 0.03)
        
        # Generate realistic OHLC
        open_price = price if i == 0 else ohlc_data[-1]['Close']
        close_price = price
        
        high_price = max(open_price, close_price) * (1 + random.uniform(0, daily_volatility))
        low_price = min(open_price, close_price) * (1 - random.uniform(0, daily_volatility))
        
        # Generate volume
        volume = random.randint(1000000, 5000000)
        
        ohlc_data.append({
            'Open': open_price,
            'High': high_price,
            'Low': low_price,
            'Close': close_price,
            'Volume': volume
        })
    
    df = pd.DataFrame(ohlc_data, index=dates)
    
    # Embed specific pattern in the last few candles
    if pattern_type == 'hammer':
        df = embed_hammer_pattern(df)
    elif pattern_type == 'shooting_star':
        df = embed_shooting_star_pattern(df)
    elif pattern_type == 'bullish_engulfing':
        df = embed_bullish_engulfing_pattern(df)
    elif pattern_type == 'bearish_engulfing':
        df = embed_bearish_engulfing_pattern(df)
    elif pattern_type == 'three_white_soldiers':
        df = embed_three_white_soldiers_pattern(df)
    elif pattern_type == 'three_black_crows':
        df = embed_three_black_crows_pattern(df)
    
    return df

def embed_hammer_pattern(df):
    """Embed a hammer pattern in the last candle"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-1]['Close']
    
    # Create hammer: small body, long lower shadow
    body_size = prev_close * 0.005  # Very small body
    open_price = prev_close - (body_size / 2)
    close_price = prev_close + (body_size / 2)
    high_price = max(open_price, close_price) + (prev_close * 0.01)
    low_price = min(open_price, close_price) - (prev_close * 0.04)  # Long lower shadow
    
    df.iloc[last_idx] = {
        'Open': open_price,
        'High': high_price,
        'Low': low_price,
        'Close': close_price,
        'Volume': df.iloc[last_idx]['Volume']
    }
    return df

def embed_shooting_star_pattern(df):
    """Embed a shooting star pattern in the last candle"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-1]['Close']
    
    # Create shooting star: small body, long upper shadow
    body_size = prev_close * 0.005
    open_price = prev_close - (body_size / 2)
    close_price = prev_close + (body_size / 2)
    high_price = max(open_price, close_price) + (prev_close * 0.04)  # Long upper shadow
    low_price = min(open_price, close_price) - (prev_close * 0.01)
    
    df.iloc[last_idx] = {
        'Open': open_price,
        'High': high_price,
        'Low': low_price,
        'Close': close_price,
        'Volume': df.iloc[last_idx]['Volume']
    }
    return df

def embed_bullish_engulfing_pattern(df):
    """Embed a bullish engulfing pattern in the last two candles"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-2]['Close']
    
    # First candle: bearish
    open1 = prev_close
    close1 = prev_close * 0.98  # 2% down
    high1 = open1 + (prev_close * 0.005)
    low1 = close1 - (prev_close * 0.005)
    
    df.iloc[last_idx-1] = {
        'Open': open1,
        'High': high1,
        'Low': low1,
        'Close': close1,
        'Volume': df.iloc[last_idx-1]['Volume']
    }
    
    # Second candle: bullish engulfing
    open2 = close1 * 0.995  # Gap down slightly
    close2 = open1 * 1.015  # Close above first candle's open
    high2 = close2 + (prev_close * 0.005)
    low2 = open2 - (prev_close * 0.005)
    
    df.iloc[last_idx] = {
        'Open': open2,
        'High': high2,
        'Low': low2,
        'Close': close2,
        'Volume': df.iloc[last_idx]['Volume']
    }
    return df

def embed_bearish_engulfing_pattern(df):
    """Embed a bearish engulfing pattern in the last two candles"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-2]['Close']
    
    # First candle: bullish
    open1 = prev_close
    close1 = prev_close * 1.02  # 2% up
    high1 = close1 + (prev_close * 0.005)
    low1 = open1 - (prev_close * 0.005)
    
    df.iloc[last_idx-1] = {
        'Open': open1,
        'High': high1,
        'Low': low1,
        'Close': close1,
        'Volume': df.iloc[last_idx-1]['Volume']
    }
    
    # Second candle: bearish engulfing
    open2 = close1 * 1.005  # Gap up slightly
    close2 = open1 * 0.985  # Close below first candle's open
    high2 = open2 + (prev_close * 0.005)
    low2 = close2 - (prev_close * 0.005)
    
    df.iloc[last_idx] = {
        'Open': open2,
        'High': high2,
        'Low': low2,
        'Close': close2,
        'Volume': df.iloc[last_idx]['Volume']
    }
    return df

def embed_three_white_soldiers_pattern(df):
    """Embed a three white soldiers pattern in the last three candles"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-3]['Close']
    
    # Three consecutive bullish candles with increasing closes
    candles = []
    for i in range(3):
        if i == 0:
            open_price = prev_close * 0.98  # Start with a gap down
            close_price = open_price * 1.03  # Strong bullish candle
        else:
            open_price = candles[i-1]['close'] * 1.002  # Small gap up
            close_price = open_price * 1.025  # Continued bullish momentum
        
        high_price = close_price + (prev_close * 0.008)
        low_price = open_price - (prev_close * 0.003)
        
        candles.append({
            'open': open_price,
            'high': high_price,
            'low': low_price,
            'close': close_price
        })
    
    # Apply the three candles
    for i, candle in enumerate(candles):
        df.iloc[last_idx-2+i] = {
            'Open': candle['open'],
            'High': candle['high'],
            'Low': candle['low'],
            'Close': candle['close'],
            'Volume': df.iloc[last_idx-2+i]['Volume']
        }
    
    return df

def embed_three_black_crows_pattern(df):
    """Embed a three black crows pattern in the last three candles"""
    last_idx = len(df) - 1
    prev_close = df.iloc[last_idx-3]['Close']
    
    # Three consecutive bearish candles with decreasing closes
    candles = []
    for i in range(3):
        if i == 0:
            open_price = prev_close * 1.02  # Start with a gap up
            close_price = open_price * 0.97  # Strong bearish candle
        else:
            open_price = candles[i-1]['close'] * 0.998  # Small gap down
            close_price = open_price * 0.975  # Continued bearish momentum
        
        high_price = open_price + (prev_close * 0.003)
        low_price = close_price - (prev_close * 0.008)
        
        candles.append({
            'open': open_price,
            'high': high_price,
            'low': low_price,
            'close': close_price
        })
    
    # Apply the three candles
    for i, candle in enumerate(candles):
        df.iloc[last_idx-2+i] = {
            'Open': candle['open'],
            'High': candle['high'],
            'Low': candle['low'],
            'Close': candle['close'],
            'Volume': df.iloc[last_idx-2+i]['Volume']
        }
    
    return df

def save_realistic_chart(data, pattern_type, label, file_id):
    """Save chart with realistic trading platform styling"""
    path = os.path.join(BASE_DIR, pattern_type, label)
    os.makedirs(path, exist_ok=True)
    
    # Create style similar to real trading platforms
    dark_style = mpf.make_mpf_style(
        base_mpf_style='charles',
        facecolor='#1e1e1e',  # Dark background
        edgecolor='#404040',  # Grid color
        gridcolor='#404040',
        gridstyle='-',
        y_on_right=True,
        rc={'font.size': 8}
    )
    
    # Add volume subplot
    mpf.plot(
        data,
        type='candle',
        style=dark_style,
        volume=True,
        figsize=(12, 8),
        savefig=os.path.join(path, f"{label}_{file_id}.png"),
        tight_layout=True,
        scale_padding={'left': 0.3, 'top': 0.8, 'right': 0.5, 'bottom': 0.3}
    )

# Generate enhanced training data
patterns = {
    'bullish': ['hammer', 'bullish_engulfing', 'three_white_soldiers'],
    'bearish': ['shooting_star', 'bearish_engulfing', 'three_black_crows']
}

print("Generating enhanced pattern data...")

for pattern_type, pattern_list in patterns.items():
    for pattern in pattern_list:
        print(f"Generating {pattern} patterns...")
        for i in range(50):  # Generate 50 of each pattern
            try:
                data = generate_realistic_chart_data(pattern, days=30)
                save_realistic_chart(data, pattern_type, pattern, i)
                if i % 10 == 0:
                    print(f"  Generated {i+1}/50 {pattern} charts")
            except Exception as e:
                print(f"Error generating {pattern} chart {i}: {e}")

print("Enhanced pattern generation complete!")
print(f"Data saved in: {BASE_DIR}/")
