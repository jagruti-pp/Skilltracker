print("👋 Hello from app.py!")
from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS
from datetime import datetime

print("✅ Starting script...")

app = Flask(__name__)
CORS(app)

print("✅ Flask app created")

try:
    conn = psycopg2.connect(
        dbname="skillltracker",
        user="postgres",
        password="samiksha",
        host="localhost",
        port="5432"
    )
    cursor = conn.cursor()
    print("✅ Connected to PostgreSQL")
except Exception as e:
    print(f"❌ Error connecting to DB: {e}")

@app.route('/ping')
def ping():
    return "Pong!"

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    print("📥 Received signup data:", data)
    username = data.get('firstName')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Missing fields'}), 400

    try:
        cursor.execute(
            "INSERT INTO users (username, email, password, last_login) VALUES (%s, %s, %s, %s)",
            (username, email, password, datetime.now())
        )
        conn.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("✅ Running Flask app now...")
    app.run(debug=True)
