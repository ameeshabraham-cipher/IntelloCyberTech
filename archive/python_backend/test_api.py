#!/usr/bin/env python
# -*- coding: utf-8 -*-

from app import app
import json


def test_api_endpoints():
    """
    Test all API endpoints directly using Flask's test client
    """
    with app.test_client() as client:
        print("\n==== Testing Python Backend API Endpoints ====\n")
        
        # Test health endpoint
        print("\n1. Testing Health Endpoint:")
        response = client.get('/api/health')
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.get_data(as_text=True)}")
        
        # Test client logos endpoint
        print("\n2. Testing Client Logos Endpoint:")
        response = client.get('/api/client-logos')
        print(f"Status Code: {response.status_code}")
        data = json.loads(response.get_data(as_text=True))
        print(f"Found {len(data)} client logos")
        if len(data) > 0:
            print(f"Sample logo: {data[0]['name']} - {data[0]['imagePath']}")
        
        # Test contact form endpoint
        print("\n3. Testing Contact Form Endpoint:")
        form_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message"
        }
        response = client.post('/api/email/contact', 
                        json=form_data, 
                        content_type='application/json')
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.get_data(as_text=True)}")
        
        # Test assessment request endpoint
        print("\n4. Testing Assessment Request Endpoint:")
        form_data = {
            "name": "Test User",
            "email": "test@example.com",
            "companyName": "Test Company",
            "phoneNumber": "1234567890",
            "message": "This is a test assessment request"
        }
        response = client.post('/api/email/assessment-request', 
                        json=form_data, 
                        content_type='application/json')
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.get_data(as_text=True)}")
        
        print("\n==== All API Endpoint Tests Completed ====\n")


if __name__ == "__main__":
    test_api_endpoints()
