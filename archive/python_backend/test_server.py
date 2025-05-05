#!/usr/bin/env python
# -*- coding: utf-8 -*-

import unittest
import requests
import json
import os

# Constants
API_BASE_URL = 'http://localhost:5001/api'

class TestPythonBackend(unittest.TestCase):
    
    def test_health_endpoint(self):
        """Test the health check endpoint"""
        response = requests.get(f'{API_BASE_URL}/health')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data['status'], 'healthy')
        print('✓ Health check endpoint working')
        
    def test_client_logos_endpoint(self):
        """Test the client logos endpoint"""
        response = requests.get(f'{API_BASE_URL}/client-logos')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        print(f'✓ Client logos endpoint working - found {len(data)} logos')
        if len(data) > 0:
            print(f'  Sample logo: {data[0]["name"]} - {data[0]["imagePath"]}')
        
    def test_contact_form_endpoint(self):
        """Test the contact form endpoint"""
        form_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message"
        }
        response = requests.post(
            f'{API_BASE_URL}/email/contact', 
            json=form_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data['success'])
        print('✓ Contact form endpoint working')
        
    def test_assessment_request_endpoint(self):
        """Test the assessment request endpoint"""
        form_data = {
            "name": "Test User",
            "email": "test@example.com",
            "companyName": "Test Company",
            "phoneNumber": "1234567890",
            "message": "This is a test assessment request"
        }
        response = requests.post(
            f'{API_BASE_URL}/email/assessment-request', 
            json=form_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(data['success'])
        print('✓ Assessment request endpoint working')

def run_tests():
    # Run the server first, then run these tests
    print('\nRunning API tests...')
    print('Note: Make sure the Python server is running on port 5001 first!\n')
    
    try:
        # Check if server is running
        requests.get(f'{API_BASE_URL}/health')
        
        # Create test suite
        suite = unittest.TestSuite()
        suite.addTest(TestPythonBackend('test_health_endpoint'))
        suite.addTest(TestPythonBackend('test_client_logos_endpoint'))
        suite.addTest(TestPythonBackend('test_contact_form_endpoint'))
        suite.addTest(TestPythonBackend('test_assessment_request_endpoint'))
        
        # Run tests
        runner = unittest.TextTestRunner(verbosity=1)
        runner.run(suite)
        
        print('\nAll tests completed successfully!')
    except requests.exceptions.ConnectionError:
        print('Error: Could not connect to the server.')
        print('Make sure the Python server is running on port 5001:')
        print('  cd python_backend && python app.py')

if __name__ == '__main__':
    run_tests()
