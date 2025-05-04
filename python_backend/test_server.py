import requests
import json

# Test script to verify the API endpoints

def test_health_endpoint():
    try:
        response = requests.get('http://localhost:5000/api/health')
        print(f"Health endpoint: {response.status_code}")
        print(response.json())
        print("--------------------")
    except Exception as e:
        print(f"Health endpoint error: {e}")

def test_client_logos_endpoint():
    try:
        response = requests.get('http://localhost:5000/api/client-logos')
        print(f"Client logos endpoint: {response.status_code}")
        print(json.dumps(response.json(), indent=2))
        print("--------------------")
    except Exception as e:
        print(f"Client logos endpoint error: {e}")

def test_contact_form_endpoint():
    try:
        data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message"
        }
        response = requests.post('http://localhost:5000/api/email/contact', json=data)
        print(f"Contact form endpoint: {response.status_code}")
        print(response.json())
        print("--------------------")
    except Exception as e:
        print(f"Contact form endpoint error: {e}")

def test_assessment_request_endpoint():
    try:
        data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "service": "Security Assessment"
        }
        response = requests.post('http://localhost:5000/api/email/assessment-request', json=data)
        print(f"Assessment request endpoint: {response.status_code}")
        print(response.json())
        print("--------------------")
    except Exception as e:
        print(f"Assessment request endpoint error: {e}")

if __name__ == "__main__":
    print("Testing Python backend API endpoints...")
    test_health_endpoint()
    test_client_logos_endpoint()
    test_contact_form_endpoint()
    test_assessment_request_endpoint()
    print("Testing complete.")
