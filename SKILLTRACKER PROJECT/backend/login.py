from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS
print("👋 Hello from login app!")

app = Flask(__name__)
CORS(app)  
# Connect to PostgreSQL
try:
    conn = psycopg2.connect(
        dbname="skillltracker",  # Make sure this is spelled exactly like your DB
        user="postgres",
        password="samiksha",     # Replace with your real password if different
        host="localhost",
        port="5432"
    )
    cursor = conn.cursor()
    print("✅ Connected to PostgreSQL successfully")
except Exception as e:
    print(f"❌ Error connecting to PostgreSQL: {e}")

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    print(f"📥 Login attempt: username={username}")

    try:
        cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()

        if user:
            print("✅ Login successful")
            return jsonify({'user_id': user[0]}), 200
        else:
            print("❌ Invalid credentials")
            return jsonify({'error': 'Invalid username or password'}), 400
    except Exception as e:
        print(f"❌ Error during login: {e}")
        return jsonify({'error': 'Server error'}), 500

if __name__ == '__main__':
    print("🚀 Starting Flask login app...")
    app.run(debug=True)
