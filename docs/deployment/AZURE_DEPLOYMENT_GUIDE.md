# Intello Cyber Technologies Website
# Azure Deployment Guide for Non-Technical Staff

## Table of Contents
1. [Introduction and Project Overview](#introduction-and-project-overview)
2. [Preparation Steps](#preparation-steps)
3. [Setting Up Azure Infrastructure](#setting-up-azure-infrastructure)
4. [Database Setup](#database-setup)
5. [Backend Deployment](#backend-deployment)
6. [Frontend Deployment](#frontend-deployment)
7. [Connecting Your Domain](#connecting-your-domain)
8. [Post-Deployment Verification](#post-deployment-verification)
9. [Maintenance and Troubleshooting](#maintenance-and-troubleshooting)
10. [Getting Help](#getting-help)

---

## Introduction and Project Overview

### About This Guide
This guide is designed for non-technical staff who need to deploy the Intello Cyber Technologies website to Microsoft Azure. We've broken down the process into simple steps with detailed instructions and screenshots where necessary.

### What You're Deploying

The Intello Cyber Technologies website consists of three main components:

1. **The Frontend**: This is what visitors see when they visit your website. It includes all the pages, interactive elements, and design.
   
2. **The Backend API**: This handles form submissions (contact forms and assessment requests) and powers the admin dashboard.
   
3. **The Database**: This stores all form submissions and user data securely.

### Website Features Overview

- **Public Pages**: Home, About, Services, Solutions, Industries, Insights, Contact
- **Interactive Elements**: 
  - Floating WhatsApp chat button
  - Floating "Schedule an Expert Consultation" button
  - Contact forms
  - Assessment request form
  - Direct Calendly scheduling links
- **Admin Section**:
  - Secure login
  - View and manage contact form submissions
  - View and manage assessment requests
  - Export functionality

### Visual Sitemap

The website is organized as follows:

```
Homepage
│
├── About Us
│
├── Services
│   ├── GRC Services
│   │   ├── ISO 27001
│   │   ├── SOC 2
│   │   └── [Other compliance services]
│   │
│   ├── IT Security & Audit
│   │   ├── Security Assessment
│   │   ├── Penetration Testing
│   │   └── [Other security services]
│   │
│   └── Cybersecurity Solutions
│       ├── Cloud Security
│       └── [Other solutions]
│
├── Solutions
│   ├── AI Compliance
│   ├── GRC Automation
│   └── [Other solution pages]
│
├── Industries
│   ├── BFSI
│   ├── Healthcare
│   └── [Other industry pages]
│
├── Contact
│
├── Assessment
│
└── Admin (protected)
    ├── Dashboard
    ├── Form Submissions
    └── Assessment Requests
```

---

## Preparation Steps

### 1. Gather Required Information

Before starting the deployment process, you'll need:

- **Azure Account Credentials**: Your Microsoft account with Azure subscription
- **Domain Name Information**: Domain name you want to use (e.g., intellocyber.com)
- **SSL Certificate**: (Optional, as Azure can provide one automatically)
- **Email Service Information**: SendGrid API key for email notifications

### 2. Install Required Software

You'll need these programs installed on your computer:

- **Web Browser**: Microsoft Edge, Google Chrome, or similar
- **Azure CLI**: For running Azure commands (we'll guide you through installation)

✅ **Quick Setup**: If you don't want to install Azure CLI, you can use Azure Cloud Shell in your browser, which we'll explain.

### 3. Prepare Your Website Files

Ensure you have:
- The final version of your website code
- Any images, videos, or other assets

---

## Setting Up Azure Infrastructure

### 1. Create an Azure Account

If you don't already have an Azure account:

1. Go to [https://portal.azure.com](https://portal.azure.com)
2. Click "Create an account"
3. Follow the sign-up process using your Microsoft account
4. Add your payment information when prompted

**Expected Time**: 10-15 minutes

### 2. Access the Azure Portal

1. Go to [https://portal.azure.com](https://portal.azure.com)
2. Sign in with your Microsoft account
3. You'll see the Azure Dashboard with various options

### 3. Create a Resource Group

Think of a resource group as a folder to organize all your website components.

1. In the Azure Portal, click "Resource groups" in the left menu
2. Click "+ Create"
3. Fill in the details:
   - **Subscription**: Choose your subscription
   - **Resource group name**: Enter "intello-website-rg"
   - **Region**: Choose a region close to your target audience (e.g., East US)
4. Click "Review + create"
5. Click "Create" after validation passes

**Expected Time**: 5 minutes

> **Visual Guide**: Look for the blue "+ Create" button in the top-left of the Resource groups page.

---

## Database Setup

### 1. Create PostgreSQL Database Server

1. In the Azure Portal search bar at the top, type "Azure Database for PostgreSQL"
2. Select "Azure Database for PostgreSQL" from the dropdown
3. Click "Create"
4. Select "Flexible server" option
5. Click "Create"
6. Fill in these details:
   - **Subscription**: Choose your subscription
   - **Resource group**: Select "intello-website-rg"
   - **Server name**: Enter "intello-db-server"
   - **Region**: Choose the same region as your resource group
   - **PostgreSQL version**: Choose 13 or latest
   - **Workload type**: Select "Development"
   - **Compute + storage**: Select "Burstable, B1ms" (smallest option)
   - **Admin username**: Enter "intello_admin"
   - **Password**: Create a strong password and SAVE IT SECURELY

7. Click "Next: Networking"
8. For "Firewall rules" select "Allow public access from any Azure service..." option
9. Click "Review + create"
10. Click "Create" after validation passes

**Expected Time**: 10-15 minutes for server creation

> **Important**: Write down your database server name, admin username, and password. You'll need these later.

### 2. Create the Database

1. After deployment completes, click "Go to resource"
2. In the left menu, select "Databases"
3. Click "+ Create"
4. Enter "intello_db" for the database name
5. Click "Save"

**Expected Time**: 5 minutes

---

## Backend Deployment

### 1. Create App Service Plan

1. In the Azure Portal search bar, type "App Service plan"
2. Select "App Service plans" from the dropdown
3. Click "+ Create"
4. Fill in these details:
   - **Subscription**: Choose your subscription
   - **Resource group**: Select "intello-website-rg"
   - **Name**: Enter "intello-api-plan"
   - **Operating System**: Select "Linux"
   - **Region**: Choose the same region as your resource group
   - **Pricing plan**: Select "B1 Basic" (affordable starter option)
5. Click "Review + create"
6. Click "Create" after validation passes

**Expected Time**: 5 minutes

### 2. Create Web App for the Backend API

1. In the Azure Portal search bar, type "App Services"
2. Select "App Services" from the dropdown
3. Click "+ Create"
4. Fill in these details:
   - **Subscription**: Choose your subscription
   - **Resource group**: Select "intello-website-rg"
   - **Name**: Enter "intello-api"
   - **Publish**: Select "Code"
   - **Runtime stack**: Select "Node 16 LTS"
   - **Operating System**: Select "Linux"
   - **Region**: Choose the same region as your resource group
   - **App Service Plan**: Select "intello-api-plan"
5. Click "Review + create"
6. Click "Create" after validation passes

**Expected Time**: 5-10 minutes

### 3. Configure Environment Variables

After deployment completes:

1. Click "Go to resource" to view your new web app
2. In the left menu, select "Configuration"
3. Under "Application settings", click "+ New application setting"
4. Add these settings one by one (click "OK" after each):
   
   **Option 1: Using DATABASE_URL (Recommended)**
   
   | Name | Value |
   |------|-------|
   | DATABASE_URL | postgres://intello_admin:YourPassword@intello-db-server.postgres.database.azure.com:5432/intello_db |
   | NODE_ENV | production |
   | PORT | 8080 |
   | SENDGRID_API_KEY | [Your SendGrid API Key] |

   > Replace "YourPassword" with the actual password you created for your database.
   
   **Option 2: Using Individual PostgreSQL Variables**
   
   If you prefer to set individual database variables instead:
   
   | Name | Value |
   |------|-------|
   | PGHOST | intello-db-server.postgres.database.azure.com |
   | PGUSER | intello_admin |
   | PGPASSWORD | [Your Database Password] |
   | PGDATABASE | intello_db |
   | PGPORT | 5432 |
   | NODE_ENV | production |
   | PORT | 8080 |
   | SENDGRID_API_KEY | [Your SendGrid API Key] |

5. Click "Save" at the top of the page

**Expected Time**: 5 minutes

> **Note**: The application will automatically construct the DATABASE_URL from the individual PostgreSQL variables if they are provided, or use the DATABASE_URL directly if it's available.

### 4. Deploy Backend Code

The simplest way to deploy your code is through the Azure Portal:

1. In your web app resource, go to the left menu and select "Deployment Center"
2. Choose "Local Git" as your source
3. Click "Save"
4. Go to "Deployment Credentials" in the left menu
5. Set up your username and password for deployment
6. Return to "Deployment Center" and note the Git clone URL

Now, ask your technical team member to push the code to this Git URL using:

```
git remote add azure [Git URL you noted]
git push azure main
```

**Expected Time**: 10-15 minutes

> **Alternative**: If you're not comfortable with Git, you can use the Azure Web App Deployment plugin for Visual Studio Code or zip deployment options, but these may require additional technical assistance.

---

## Frontend Deployment

### 1. Create Static Web App

1. In the Azure Portal search bar, type "Static Web Apps"
2. Select "Static Web Apps" from the dropdown
3. Click "+ Create"
4. Fill in these details:
   - **Subscription**: Choose your subscription
   - **Resource group**: Select "intello-website-rg"
   - **Name**: Enter "intello-website"
   - **Hosting plan**: Free (adequate for most small sites)
   - **Region**: Choose the same region as your resource group

5. Under "Deployment details":
   - **Deployment source**: Select "GitHub" (You'll need to authorize Azure to access your GitHub)
   - **Organization**: Select your GitHub organization
   - **Repository**: Select your website repository
   - **Branch**: Select "main"

6. Under "Build details":
   - **Build presets**: Select "Custom"
   - **App location**: Enter "/"
   - **Output location**: Enter "build"

7. Click "Review + create"
8. Click "Create" after validation passes

**Expected Time**: 10-15 minutes

### 2. Configure API Connection

Azure Static Web Apps need to know how to connect to your backend API. This is done through a configuration file in your code repository:

Ask your technical team member to create a file called `staticwebapp.config.json` in the root of your repository with this content:

```json
{
  "routes": [
    {
      "route": "/api/*",
      "methods": ["GET", "POST", "PUT", "DELETE"],
      "rewrite": "https://intello-api.azurewebsites.net/api/:path*"
    },
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif}", "/css/*", "/js/*"]
  }
}
```

**Expected Time**: 5 minutes if done by a technical person

---

## Connecting Your Domain

### 1. Add Custom Domain to Static Web App

1. In the Azure Portal, go to your Static Web App resource
2. In the left menu, select "Custom domains"
3. Click "+ Add"
4. Enter your domain name (e.g., www.intellocyber.com)
5. Follow the verification instructions, which will include:
   - Adding a CNAME record at your domain registrar
   - Adding a TXT record for validation
6. Click "Add" once you've set up the DNS records

**Expected Time**: 15-30 minutes (depending on DNS propagation)

### 2. Add Custom Domain to the API (Optional)

If you want a custom domain for your API (e.g., api.intellocyber.com):

1. In the Azure Portal, go to your App Service resource
2. In the left menu, select "Custom domains"
3. Click "+ Add custom domain"
4. Enter your domain name (e.g., api.intellocyber.com)
5. Follow the verification instructions
6. Click "Add" once you've set up the DNS records

**Expected Time**: 15-30 minutes

### 3. SSL Certificate

Azure will automatically provision and manage SSL certificates for your domains, ensuring your site is secure with HTTPS.

---

## Post-Deployment Verification

After deployment is complete, verify that everything is working properly:

### 1. Check Website Functionality

1. Visit your website domain (e.g., www.intellocyber.com)
2. Test navigation to all major sections
3. Test interactive elements:
   - Submit the contact form
   - Submit an assessment request form
   - Click the WhatsApp button
   - Click the Calendly consultation button

### 2. Verify Admin Access

1. Go to your website's /admin route (e.g., www.intellocyber.com/admin)
2. Log in with your admin credentials
3. Verify you can see the form submissions
4. Check both contact form and assessment submissions tabs

### 3. Test Email Notifications

1. Submit a test contact form
2. Verify that you receive an email notification

---

## Maintenance and Troubleshooting

### Monitoring Your Website

1. In the Azure Portal, go to your Static Web App or App Service
2. In the left menu, select "Monitoring"
3. Here you can see health status, performance metrics, and logs

### Common Issues and Solutions

#### Website Not Loading
- Check that your DNS settings are correct
- Verify that your Static Web App deployment succeeded
- Look at the deployment logs in GitHub Actions

#### Form Submissions Not Working
- Verify the backend API is running
- Check the API configuration in staticwebapp.config.json
- Review the database connection settings:
  - Either DATABASE_URL must be set correctly, OR
  - All PostgreSQL variables (PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT) must be set
- Check the Application Service logs to see if there are any database connection errors

#### Email Notifications Not Sending
- Verify the SendGrid API key is correct
- Check spam/junk folders
- Review logs in the App Service

### Updating Your Website

When you need to update your website:

1. Make changes to your code repository
2. Commit and push to GitHub
3. Azure Static Web Apps will automatically deploy the changes

**Expected Time**: Varies based on the changes

---

## Getting Help

If you encounter issues beyond what's covered in this guide:

### Azure Support
1. In the Azure Portal, click the question mark icon in the top menu
2. Select "Help + support"
3. Click "New support request"

### IT Support Team
Contact your internal IT support team or the website developers with:
- Screenshots of any error messages
- The specific Azure resource having issues
- Steps you've already taken to try to resolve the problem

---

## Final Checklist

Before considering the deployment complete, verify:

- [ ] Website loads correctly at your custom domain
- [ ] All pages are accessible and look correct
- [ ] Forms submit successfully
- [ ] Admin area is accessible
- [ ] Email notifications are working
- [ ] WhatsApp and Calendly buttons function properly
- [ ] SSL is working (site loads as https://)
- [ ] Database is properly connected (check form submissions work)

For more detailed database setup instructions, refer to the supplementary guide: DATABASE_DEPLOYMENT_GUIDE.md

---

*This guide was prepared by Intello Technology Team. For additional assistance, please contact your account manager or technical support team.*

---

## Document Information
- **Version**: 1.0
- **Last Updated**: April 18, 2025
- **Prepared For**: Intello Cyber Technologies