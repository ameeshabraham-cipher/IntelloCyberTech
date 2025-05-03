# Azure Deployment Guide for Intello Cyber Technologies

This guide provides detailed instructions for deploying the Intello Cyber Technologies website to Microsoft Azure.

## Prerequisites

1. **Microsoft Azure Account**: You need an active Azure subscription. If you don't have one, create a [free account](https://azure.microsoft.com/en-us/free/).

2. **Azure CLI** (optional): For command-line deployment. [Install the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) if you prefer this method.

3. **GitHub Account**: For setting up continuous deployment with GitHub Actions.

## Deployment Steps

### Step 1: Create Azure Resources

#### Using Azure Portal

1. **Login to Azure Portal**:
   - Go to [https://portal.azure.com/](https://portal.azure.com/)
   - Sign in with your credentials

2. **Create a Resource Group**:
   - Click "+ Create a resource"
   - Search for "Resource Group" and select it
   - Click "Create"
   - Fill in the required details:
     - Subscription: Select your subscription
     - Resource Group: `intello-rg` (or your preferred name)
     - Region: Select a region close to your target audience (e.g., UAE North)
   - Click "Review + create" and then "Create"

3. **Create an App Service Plan**:
   - Click "+ Create a resource"
   - Search for "App Service Plan" and select it
   - Click "Create"
   - Fill in the details:
     - Subscription: Select your subscription
     - Resource Group: Select the resource group you created
     - Name: `intello-app-plan`
     - Operating System: Linux
     - Region: Same as your resource group
     - Pricing Plan: Choose appropriate tier (Standard S1 or higher recommended for production)
   - Click "Review + create" and then "Create"

4. **Create a Web App**:
   - Click "+ Create a resource"
   - Search for "Web App" and select it
   - Click "Create"
   - Fill in the details:
     - Subscription: Select your subscription
     - Resource Group: Select the resource group you created
     - Name: `intello-cyber-tech` (this will be your site URL: intello-cyber-tech.azurewebsites.net)
     - Publish: Code
     - Runtime stack: Node 20 LTS
     - Operating System: Linux
     - Region: Same as your resource group
     - App Service Plan: Select the plan you created
   - Click "Review + create" and then "Create"

5. **Create Azure Database for PostgreSQL** (since your app uses PostgreSQL):
   - Click "+ Create a resource"
   - Search for "Azure Database for PostgreSQL" and select it
   - Choose "Flexible server" and click "Create"
   - Fill in the details:
     - Subscription: Select your subscription
     - Resource Group: Select the resource group you created
     - Server name: `intello-db`
     - Region: Same as your resource group
     - PostgreSQL version: 15
     - Admin username: Create a username
     - Password: Create a secure password
     - Configure server: Choose appropriate compute + storage
   - Click "Review + create" and then "Create"

### Step 2: Configure Environment Variables

1. **Set up Environment Variables in Azure**:
   - Go to your Web App (intello-cyber-tech)
   - In the left menu, click on "Configuration" under "Settings"
   - Click "+ New application setting" to add each environment variable
   - Add the following variables:
     - `DATABASE_URL`: Your PostgreSQL connection string (format: `postgres://username:password@intello-db.postgres.database.azure.com:5432/intello_db?sslmode=require`)
     - Any other environment variables your application needs
   - Click "Save" to apply changes

### Step 3: Set Up GitHub Deployment

1. **Push Your Code to GitHub**:
   - Create a new GitHub repository or use an existing one
   - Push your code to the repository including the `.github/workflows/azure-deploy.yml` file we created

2. **Get Azure Publish Profile**:
   - In Azure Portal, go to your Web App
   - Click "Get publish profile" in the Overview page and save the file

3. **Set up GitHub Secrets**:
   - Go to your GitHub repository
   - Click on "Settings" > "Secrets and variables" > "Actions"
   - Click "New repository secret"
   - Create the following secrets:
     - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
       Value: Paste the content of the publish profile file you downloaded
     - Name: `DATABASE_URL`
       Value: Your PostgreSQL connection string

4. **Trigger Deployment**:
   - Push changes to the main branch or go to the "Actions" tab in your GitHub repository
   - Select the "Deploy to Azure" workflow
   - Click "Run workflow" and select the main branch

### Step 4: Verify Deployment

1. **Check Deployment Status**:
   - In GitHub, go to the "Actions" tab to see the deployment progress
   - Once completed, open your website: `https://intello-cyber-tech.azurewebsites.net`

2. **Check Application Logs if Issues Occur**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Monitoring", click "Log stream"
   - View logs to identify any issues

## Custom Domain Setup

1. **Add a Custom Domain**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Custom domains"
   - Click "+ Add custom domain"
   - Enter your domain name (e.g., `intellome.com`)
   - Follow the verification steps

2. **Configure DNS**:
   - At your domain registrar, add the following records:
     - A Record: Points to your app's IP address
     - CNAME Record: `www` points to `intello-cyber-tech.azurewebsites.net`

3. **Add SSL Certificate**:
   - In the Custom domains page, click on "Add binding" for your domain
   - Select "Add TLS/SSL binding"
   - Choose a certificate:
     - Create App Service Managed Certificate (free)
     - Or use a certificate you upload
   - Click "Add Binding"

## Maintenance and Monitoring

1. **Set Up Azure Application Insights**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Application Insights"
   - Click "Turn on Application Insights"
   - Follow the setup wizard

2. **Set Up Azure Alerts**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Monitoring", click "Alerts"
   - Click "Create alert rule"
   - Configure alerts for:
     - High CPU/Memory usage
     - HTTP errors
     - Response time

## Scaling

1. **Manual Scaling**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Scale up (App Service plan)"
   - Select a higher tier for more resources

2. **Auto Scaling**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Scale out (App Service plan)"
   - Click "Enable autoscale"
   - Set up rules based on metrics like CPU usage

## Troubleshooting

### Common Issues

1. **Database Connection Issues**:
   - Verify your `DATABASE_URL` environment variable is correct
   - Check that your Azure PostgreSQL firewall rules allow connections from Azure services

2. **Deployment Failures**:
   - Check GitHub Actions logs for specific errors
   - Verify that the build process completes successfully
   - Ensure all dependencies are properly declared in package.json

3. **Application Crashes**:
   - Check application logs in Azure Portal
   - Consider adding more detailed logging to your application

## Backup and Disaster Recovery

1. **Database Backups**:
   - Configure automated backups for your PostgreSQL database
   - In Azure Portal, go to your PostgreSQL server
   - Under "Settings", click on "Backups"
   - Configure your retention period (7-35 days)

2. **Web App Backups**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Backups"
   - Click "Configure" to set up regular backups

## Security

1. **Enable HTTPS Only**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "TLS/SSL settings"
   - Set "HTTPS Only" to "On"

2. **Configure Authentication**:
   - In Azure Portal, go to your Web App
   - In the left menu, under "Settings", click "Authentication"
   - Click "Add identity provider" if you need to set up authentication

---

For more detailed information, consult the [official Azure documentation](https://docs.microsoft.com/en-us/azure/app-service/).
