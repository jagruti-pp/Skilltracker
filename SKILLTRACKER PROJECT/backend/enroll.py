from flask import Flask, request, jsonify
import psycopg2
from flask_cors import CORS
from datetime import datetime

from dotenv import load_dotenv
import os
import psycopg2

load_dotenv()  

app = Flask(__name__)
CORS(app)

# Connect to DB
try:
    conn = psycopg2.connect(
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT")
    )
    cursor = conn.cursor()
    print("✅ Connected to PostgreSQL")
except Exception as e:
    print(f"❌ Error connecting to DB: {e}")

# Home route
@app.route('/')
def home():
    return "✅ Server running"

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
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
        return jsonify({'message': 'User registered successfully', 'email': email}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    try:
        cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()

        if user:
            return jsonify({
                'user_id': user[0],
                'email': user[2]  # Assuming email is at index 2
            }), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 400
    except Exception as e:
        return jsonify({'error': 'Server error'}), 500
    
# ✅ Enroll route (correctly placed)
@app.route('/enroll', methods=['POST'])
def enroll():
    data = request.json
    email = data['email']
    course_id = data['course_id']

    cursor.execute("SELECT user_id FROM users WHERE email=%s", (email,))
    user_row = cursor.fetchone()
    if not user_row:
        return jsonify({'error': 'User not found'}), 404

    user_id = user_row[0]

    try:
        cursor.execute(
            "INSERT INTO enrollments (user_id, course_id) VALUES (%s, %s) ON CONFLICT DO NOTHING",
            (user_id, course_id)
        )
        conn.commit()
        return jsonify({'message': 'Enrolled successfully'})
    except Exception as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500


# Add this in your enroll.py file
@app.route('/my-courses', methods=['POST'])
def my_courses():
    data = request.json
    email = data.get('email')

    try:
        cursor.execute("SELECT user_id FROM users WHERE email=%s", (email,))
        user_row = cursor.fetchone()

        if not user_row:
            return jsonify({'error': 'User not found'}), 404

        user_id = user_row[0]

        cursor.execute("""
            SELECT courses.course_id, courses.title, courses.description
            FROM enrollments
            JOIN courses ON enrollments.course_id = courses.course_id
            WHERE enrollments.user_id = %s
        """, (user_id,))
        
        courses = cursor.fetchall()

        course_list = []
        for course in courses:
            course_list.append({
                'course_id': course[0],
                'title': course[1],
                'description': course[2]
            })

        return jsonify(course_list), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# ✅ Only one main block at the end

# ALL ROUTES GO HERE FIRST

if __name__ == '__main__':
    print("🚀 Starting Flask login app...")
    app.run(debug=True)
