# 🐙 GitHub Setup Guide for Papramind

## Quick Setup (Recommended)

For automated GitHub setup, use the provided script:

**Linux/macOS:**

```bash
chmod +x scripts/setup-github.sh
./scripts/setup-github.sh
```

**Windows:**

```bash
scripts\setup-github.bat
```

The script will automatically:

- Check Git installation
- Initialize Git repository
- Create initial commit with comprehensive project description
- Set up GitHub remote
- Push code to GitHub
- Provide Railway deployment instructions

---

## Manual Setup (Alternative)

If you prefer manual setup or need to troubleshoot, follow these steps:

## Step 1: Install Git (if not already installed)

### Windows:

1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. Restart your terminal/command prompt

### Verify Git Installation:

```bash
git --version
```

## Step 2: Configure Git (First time setup)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository" (green button)
3. Repository name: `papramind`
4. Description: `AI-Powered Document Management Platform`
5. Set to **Public** (for Railway deployment)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

## Step 4: Initialize and Push Code

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Papramind AI Document Management Platform

- Complete Next.js 14 application with TypeScript
- Authentication with Clerk
- AI integration with OpenAI GPT-4
- Vector search with Pinecone
- Document management with PostgreSQL
- Workflow automation system
- Analytics dashboard
- Google Workspace & Microsoft 365 integrations
- Comprehensive testing suite
- Railway deployment configuration"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/papramind.git

# Push to GitHub
git push -u origin main
```

> 💡 **Tip**: The automated setup script (`scripts/setup-github.sh` or `scripts\setup-github.bat`) performs these steps automatically and includes interactive prompts for your GitHub username and repository name.

## Step 5: Verify Upload

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/papramind`
2. You should see all your files uploaded
3. The README.md should display the project information

## Step 6: Deploy to Railway

Now you can deploy to Railway using your GitHub repository:

### Option A: Railway Dashboard

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `papramind` repository
5. Railway will auto-detect it's a Next.js app

### Option B: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your GitHub repo
railway link

# Add services
railway add postgresql
railway add redis

# Set environment variables
railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"
railway variables set CLERK_SECRET_KEY="your_clerk_secret"
railway variables set OPENAI_API_KEY="your_openai_key"
railway variables set JWT_SECRET="your_32_char_secret"
railway variables set ENCRYPTION_KEY="your_32_char_key"
railway variables set NODE_ENV="production"

# Deploy
railway deploy
```

## Step 7: Post-Deployment

After Railway deployment:

```bash
# Run database migrations
railway run npm run db:migrate

# Seed the database
railway run npm run db:seed
```

## Your Live URLs

After successful deployment:

- **GitHub Repository**: `https://github.com/YOUR_USERNAME/papramind`
- **Live Application**: `https://papramind-production.up.railway.app`
- **Demo Page**: `https://papramind-production.up.railway.app/demo`

## Troubleshooting

### Git Issues:

```bash
# If you get permission errors, use HTTPS with token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/papramind.git

# Or use SSH (if you have SSH keys set up)
git remote set-url origin git@github.com:YOUR_USERNAME/papramind.git
```

### Large File Issues:

If you get errors about large files:

```bash
# Remove node_modules and other large directories
echo "node_modules/" >> .gitignore
echo ".next/" >> .gitignore
echo "dist/" >> .gitignore
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"
```

## Quick Commands Reference

```bash
# Check git status
git status

# Add specific files
git add filename.js

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Check remote URL
git remote -v
```

## 🎉 Success!

Once completed, you'll have:
✅ Code hosted on GitHub
✅ Automatic deployments from GitHub to Railway
✅ Live application accessible worldwide
✅ Professional development workflow

Your Papramind application will be live and ready for testing!
