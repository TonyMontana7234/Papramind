# 🚀 Papramind - Quick Start Guide

## Test the Application

### Option 1: Local Development (Recommended)

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Environment**

   - Edit `.env.local` with your API keys
   - At minimum, you need:
     - Clerk authentication keys
     - OpenAI API key
     - Database credentials

3. **Start Infrastructure**

   ```bash
   docker-compose up -d
   ```

4. **Setup Database**

   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Open: http://localhost:3000
   - API Documentation: http://localhost:3000/api

### Option 2: Quick Demo Setup (Minimal Configuration)

If you want to test quickly without full setup:

1. **Use Demo Mode**

   ```bash
   # Set demo environment
   export NODE_ENV=demo

   # Start with minimal services
   npm run dev:demo
   ```

2. **Access Demo Features**
   - Document upload/management
   - Basic search functionality
   - UI components showcase

## 🔗 Deployment Options

### GitHub + Railway (Recommended)

1. **Setup GitHub Repository** (automated):

   ```bash
   # Linux/macOS
   chmod +x scripts/setup-github.sh
   ./scripts/setup-github.sh

   # Windows
   scripts\setup-github.bat
   ```

2. **Deploy to Railway**:

   ```bash
   # Install Railway CLI
   npm install -g @railway/cli

   # Login and deploy
   railway login
   railway init
   railway add postgresql
   railway add redis
   railway deploy
   ```

3. **Configure Environment Variables**:
   ```bash
   railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
   railway variables set CLERK_SECRET_KEY="your_secret"
   railway variables set OPENAI_API_KEY="your_key"
   ```

### Vercel (Alternative)

1. **Deploy to Vercel**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel --prod
   ```

2. **Configure Environment Variables in Vercel Dashboard**
   - Add all required API keys
   - Set production URLs

### Docker Deployment

1. **Build and Run**

   ```bash
   # Build production image
   docker build -t papramind .

   # Run with environment file
   docker run -p 3000:3000 --env-file .env.local papramind
   ```

## 🧪 Testing Features

### Core Features to Test

1. **Authentication**

   - Sign up/Sign in with Clerk
   - User profile management

2. **Document Management**

   - Upload documents
   - View document list
   - Document versioning

3. **AI Features** (requires OpenAI API key)

   - Document analysis
   - Content summarization
   - Category suggestions

4. **Search** (requires Elasticsearch)

   - Full-text search
   - Semantic search (requires Pinecone)

5. **Workflow Builder**

   - Create workflows
   - Test workflow execution

6. **Analytics Dashboard**
   - View document metrics
   - Usage analytics

### API Endpoints to Test

```bash
# Health check
curl http://localhost:3000/api/health

# Document list (requires auth)
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3000/api/documents

# Search documents
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query": "test document"}'
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**

   - Ensure PostgreSQL is running
   - Check database credentials in `.env.local`

2. **Authentication Issues**

   - Verify Clerk API keys
   - Check Clerk dashboard configuration

3. **File Upload Issues**

   - Verify AWS S3 credentials
   - Check bucket permissions

4. **Search Not Working**
   - Ensure Elasticsearch is running
   - Run `npm run search:setup`

### Getting Help

- Check the console for error messages
- Review the `.env.local` configuration
- Ensure all required services are running

## 🎯 Next Steps

Once you have the basic setup working:

1. Configure external integrations (Google, Microsoft)
2. Set up production database
3. Configure file storage
4. Enable advanced AI features
5. Customize the UI/UX

## 📞 Support

If you encounter issues:

1. Check the error logs in the console
2. Verify all environment variables are set
3. Ensure all services are running
4. Review the API documentation

The application is production-ready once properly configured!
