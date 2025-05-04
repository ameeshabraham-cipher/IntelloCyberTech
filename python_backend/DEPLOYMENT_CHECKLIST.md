# Intello Cyber Technologies Website: cPanel Deployment Checklist

## Pre-Deployment Tasks

- [ ] Build the frontend React application
  ```bash
  npm run build:client
  ```

- [ ] Verify the build output in the `build/client` directory
  ```bash
  ls -la build/client
  ```

- [ ] Test the Python backend locally
  ```bash
  cd python_backend
  python test_api.py
  ```

## cPanel Setup

- [ ] Log in to cPanel
- [ ] Navigate to "Setup Python App"
- [ ] Create a new Python application with:
  - Python version: 3.8+
  - Application root: `/home/username/public_html`
  - Application URL: Your domain name
  - Application startup file: `app.py`
  - Application entry point: `app`
  - Passenger mode: Enabled

## File Upload

- [ ] Upload all Python backend files to the website root
  - [ ] `app.py`
  - [ ] `passenger_wsgi.py`
  - [ ] `requirements.txt`
  - [ ] `.htaccess`

- [ ] Upload the React build files to the `build/client` directory
  - [ ] All files from your local `build/client` directory

## Post-Upload Configuration

- [ ] Install the Python dependencies
  ```bash
  pip install -r requirements.txt --user
  ```

- [ ] Set correct file permissions
  ```bash
  chmod 755 app.py passenger_wsgi.py
  chmod 644 .htaccess requirements.txt
  ```

- [ ] Restart the Python application through cPanel

## Testing

- [ ] Visit your website domain to confirm it loads correctly
- [ ] Test navigation between different pages
- [ ] Test the client logos display
- [ ] Test the contact form (submission will go through Formspree)
- [ ] Test the assessment request form
- [ ] Test the Calendly appointment scheduling

## SSL Configuration

- [ ] Enable SSL in cPanel if not already enabled
- [ ] Configure redirects to force HTTPS

## Troubleshooting

- If you encounter 500 errors, check the error logs in cPanel
- If static assets are not loading, verify paths in the `.htaccess` file
- If the API endpoints are not responding, check Python error logs

## Important Notes

- Form submissions are handled by Formspree
- Appointment scheduling is handled by Calendly
- The Python backend is primarily serving static files and providing minimal API endpoints
- No database connection is required

## Support

If you encounter any issues during deployment, contact support at support@example.com.
