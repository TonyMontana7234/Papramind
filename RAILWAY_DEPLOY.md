# Railway Deployment for Papramind

## Prerequisites

Before deploying to Railway, ensure your code is on GitHub. Use the automated setup script:

**Linux/macOS:**

```bash
chmod +x scripts/setup-github.sh
./scripts/setup-github.sh
```

**Windows:**

```bash
scripts\setup-github.bat
```

The script will push your code to GitHub and provide Railway deployment instructions.

## Quick Deploy Steps

### 1. Install Railway CLI

```bash
npm install -g @railway/cli
```

### 2. Login and Initialize

```bash
railway login
railway init
```

### 3. Add Services

```bash
railway add postgresql
railway add redis
```

### 4. Set Environment Variables

```bash
railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_key"
railway variables set CLERK_SECRET_KEY="your_clerk_secret"
railway variables set OPENAI_API_KEY="your_openai_key"
railway variables set JWT_SECRET="your_32_char_secret"
railway variables set ENCRYPTION_KEY="your_32_char_key"
railway variables set NODE_ENV="production"
```

### 5. Deploy

```bash
railway deploy
```

### 6. Run Migrations

```bash
railway run npm run db:migrate
railway run npm run db:seed
```

## Your Live URL

After deployment: `https://your-app-name.up.railway.app`

## Complete Deployment Workflow

1. **Setup GitHub** (automated):

   ```bash
   ./scripts/setup-github.sh  # Linux/macOS
   scripts\setup-github.bat   # Windows
   ```

2. **Deploy to Railway**:

   ```bash
   railway login
   railway init
   railway add postgresql
   railway add redis
   railway deploy
   ```

3. **Configure Environment**:

   ```bash
   railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
   railway variables set CLERK_SECRET_KEY="your_secret"
   # ... other variables
   ```

4. **Initialize Database**:
   ```bash
   railway run npm run db:migrate
   railway run npm run db:seed
   ```

## Required API Keys

- Clerk Authentication (free tier)
- OpenAI API (free $5 credit)
- Optional: Pinecone, AWS S3, Google/Microsoft APIs

## Troubleshooting

If the GitHub setup script fails:

1. Ensure Git is installed: `git --version`
2. Create the repository manually on GitHub
3. Check your GitHub authentication
4. See [GitHub Setup Guide](GITHUB_SETUP_GUIDE.md) for manual setup
