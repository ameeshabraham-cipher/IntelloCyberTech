# Intello Cyber Technologies - Python Backend

This directory contains a Python Flask implementation of the minimal backend needed for the Intello Cyber Technologies website.

## Features

- Serves the React frontend as static files
- Handles client-side routing (SPA)
- Provides minimal API endpoints:
  - `/api/health` - Health check endpoint
  - `/api/client-logos` - Dynamic client logo discovery
  - `/api/email/contact` - Contact form endpoint
  - `/api/email/assessment-request` - Assessment request endpoint

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

## Testing

Use the included test script to verify the API endpoints:
```
python test_server.py
```

## Notes

- This Python backend is designed to be minimal and primarily serves static files
- Form submissions can be integrated with external services
- Appointment scheduling can be integrated with calendar services
