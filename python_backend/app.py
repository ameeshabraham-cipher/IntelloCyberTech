from flask import Flask, jsonify, request, send_from_directory, render_template
from flask_cors import CORS
import os
import glob
import re
from pathlib import Path

# Initialize Flask app
app = Flask(__name__, static_folder='../build/client')
CORS(app)

print('Using simplified static site mode with Python backend - no database connection required')

# Health check endpoint
@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy"})

# Client logos endpoint
@app.route('/api/client-logos')
def client_logos():
    try:
        client_images_dir = os.path.join(os.getcwd(), '../client/public/images/client-images')
        
        # Check if directory exists
        if not os.path.exists(client_images_dir):
            return jsonify([])
        
        # Get all image files
        image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
        image_files = []
        
        for ext in image_extensions:
            image_files.extend(glob.glob(os.path.join(client_images_dir, f'*{ext}')))
            image_files.extend(glob.glob(os.path.join(client_images_dir, f'*{ext.upper()}')))
        
        # Create client logo objects
        client_logos = []
        for image_path in image_files:
            file_name = os.path.basename(image_path)
            name = os.path.splitext(file_name)[0]
            # Format name: replace hyphens with spaces and capitalize
            name = re.sub(r'[-_]', ' ', name)
            name = ' '.join(word.capitalize() for word in name.split())
            
            client_logos.append({
                "name": name,
                "imagePath": f"/images/client-images/{file_name}"
            })
        
        return jsonify(client_logos)
    except Exception as e:
        print(f"Error retrieving client logos: {e}")
        return jsonify({
            "success": False,
            "message": "Failed to retrieve client logos"
        }), 500

# Mock form endpoints
@app.route('/api/email/contact', methods=['POST'])
def contact_form():
    return jsonify({
        "success": True,
        "message": "Contact form submitted. Using Formspree for actual submissions."
    })

@app.route('/api/email/assessment-request', methods=['POST'])
def assessment_request():
    return jsonify({
        "success": True,
        "message": "Assessment request submitted. Using Formspree for actual submissions."
    })

# Serve React app - handle SPA routing
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
