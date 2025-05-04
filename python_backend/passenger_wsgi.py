import sys
import os

# Get the absolute path of the current directory
DIRPATH = os.path.dirname(os.path.abspath(__file__))

# Add the directory to Python path
sys.path.insert(0, DIRPATH)

# Import the Flask application
from app import app as application

# This is required for cPanel Python apps
application.secret_key = 'intello_secret_key_change_in_production'

# Fix paths for cPanel
application.static_folder = os.path.join(DIRPATH, 'build/client')

# Remove debug mode in production
application.debug = False
