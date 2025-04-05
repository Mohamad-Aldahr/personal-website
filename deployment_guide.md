# GitHub Pages Deployment Guide

This guide explains how to deploy your personal website to GitHub Pages using the provided GitHub account.

## Prerequisites
- GitHub account credentials
- Static website files (already generated in the `out` directory)

## Steps to Deploy

### 1. Create a GitHub Repository
1. Go to GitHub.com and log in with the provided credentials:
   - Username: aldahermohamad18@gmail.com
   - Password: punwih-kebtah-Zyzxi3
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name the repository: "personal-website"
4. Make sure it's set to "Public"
5. Click "Create repository"

### 2. Upload Website Files
1. Clone the repository to your local machine
2. Copy all files from the `out` directory to the repository
3. Rename `index.html` to `index.html` (if needed)
4. Add a file named `.nojekyll` to disable Jekyll processing
5. Commit and push the changes

### 3. Configure GitHub Pages
1. Go to the repository settings
2. Scroll down to the "GitHub Pages" section
3. Select "main" branch as the source
4. Click "Save"
5. Wait a few minutes for the site to be published

### 4. Access Your Website
Your website will be available at: https://aldahermohamad18.github.io/personal-website/

## Login Information
- Default username: admin
- Default password: admin123

## Troubleshooting
- If the site doesn't appear, check if the repository is public
- Make sure the `.nojekyll` file exists in the repository
- Verify that all paths in the HTML files are relative
