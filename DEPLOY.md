# Azure Deployment Guide

## Prerequisites
1. Azure subscription
2. Azure CLI installed
3. GitHub account
4. Docker installed locally (for testing)

## Local Docker Build and Run
```bash
# Build the Docker image
docker build -t simplebank .

# Run the container
docker run -p 8080:8080 simplebank
```

## Azure Setup Steps

1. Create Azure resources:
```bash
# Login to Azure
az login

# Create Resource Group
az group create --name rg-simplebank --location eastus

# Deploy infrastructure using Bicep
az deployment group create \
  --resource-group rg-simplebank \
  --template-file infra/main.bicep
```

2. Set up GitHub Secrets for CI/CD:
   - Go to your GitHub repository settings
   - Navigate to Secrets and Variables > Actions
   - Add the following secrets:
     - AZURE_CREDENTIALS: (Service Principal credentials JSON)

3. Create Azure Service Principal:
```bash
# Create Service Principal and save output
az ad sp create-for-rbac --name "simplebank-sp" \
  --role contributor \
  --scopes /subscriptions/{subscription-id}/resourceGroups/rg-simplebank
```

## Deployment

The application will be automatically deployed when you push to the main branch.
You can also manually trigger the deployment from the GitHub Actions tab.

## Accessing the Application

After deployment, you can access the application at:
https://{container-app-name}.{region}.azurecontainer.io

## Monitoring

Access application logs and metrics through:
1. Azure Portal > Container Apps > Your App > Monitoring
2. Log Analytics workspace