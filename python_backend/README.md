# Intello Cyber Technologies - Python Backend

This directory contains a Python Flask implementation of the minimal backend needed for the Intello Cyber Technologies website. It serves as a drop-in replacement for the Node.js Express backend, designed to work with cPanel's Python App feature.

## Features

- Serves the React frontend as static files
- Handles client-side routing (SPA)
- Provides minimal API endpoints:
  - `/api/health` - Health check endpoint
  - `/api/client-logos` - Dynamic client logo discovery
  - `/api/email/contact` - Mock contact form endpoint (actual submission via Formspree)
  - `/api/email/assessment-request` - Mock assessment request endpoint (actual submission via Formspree)

## Requirements

- Python 3.8+
- Flask 2.0+
- Flask-CORS

## Local Development

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the development server:
   ```
   python app.py
   ```

## cPanel Deployment

### 1. Set Up Python App in cPanel

1. In cPanel, go to "Setup Python App"
2. Create a new application with Python 3.8+ 
3. Set the application root to your website directory
4. Set the application URL to your domain
5. Application startup file: app.py
6. Application entry point: app
7. Click "Setup"

### 2. Build the Frontend

Build the React frontend using:
```
npm run build:client
```

### 3. Upload Files

1. Upload the contents of the `python_backend` directory to your website's root directory
2. Upload the contents of the `build/client` directory to the `build/client` directory on your server

### 4. Configure .htaccess

Make sure the `.htaccess` file is in place to handle routing

## Testing

Use the included test script to verify the API endpoints:
```
python test_server.py
```

## Notes

- This Python backend is designed to be minimal and primarily serves static files
- Form submissions are handled by Formspree
- Appointment scheduling is handled by Calendly
