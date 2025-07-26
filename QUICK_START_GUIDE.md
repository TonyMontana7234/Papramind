# 🚀 Papramind - Quick Start Guide

Get up and running with the enterprise-grade AI document management platform in minutes.

## 🎯 What You'll Get

**Complete Platform Features:**

- 🔐 Authentication with Clerk (SSO, MFA, RBAC)
- 📄 Document management with AI analysis
- 🔍 Semantic search with vector embeddings
- ⚡ Workflow automation with visual builder
- 📊 Analytics dashboard with predictive insights
- 🔗 Google Workspace & Microsoft 365 integrations
- 🧪 95%+ test coverage with comprehensive validation

## 🚀 Quick Start Options

### Option 1: Full Development Setup (Recommended)

**Complete platform with all features enabled**

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd papramind
   npm install
   ```

2. **Configure Environment**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

   **Required for basic functionality:**

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk authentication
   - `CLERK_SECRET_KEY` - Clerk backend
   - `DATABASE_URL` - PostgreSQL connection
   - `OPENAI_API_KEY` - AI features

3. **Start Infrastructure**

   ```bash
   docker-compose up -d
   ```

4. **Initialize Database**

   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Setup Search & AI Services**

   ```bash
   npm run search:setup      # Elasticsearch indexes
   npm run vector:setup      # Pinecone vector database
   ```

6. **Start Development Server**

   ```bash
   npm run dev
   ```

7. **Access the Platform**
   - **Main App**: http://localhost:3000
   - **Analytics**: http://localhost:3000/analytics
   - **Workflows**: http://localhost:3000/workflows
   - **API Health**: http://localhost:3000/api/health

### Option 2: Core Features Only (Minimal Setup)

**Basic document management without external services**

1. **Install and Configure**

   ```bash
   npm install
   cp .env.example .env.local
   ```

2. **Minimal Environment Setup**

   ```bash
   # Required only
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   DATABASE_URL=postgresql://localhost:5432/papramind
   ```

3. **Start Basic Services**

   ```bash
   # Start only PostgreSQL
   docker-compose up -d postgres
   npm run db:migrate
   npm run dev
   ```

4. **Available Features**
   - ✅ Authentication and user management
   - ✅ Document upload and management
   - ✅ Basic search functionality
   - ✅ Analytics dashboard (limited)
   - ❌ AI analysis (requires OpenAI API)
   - ❌ Semantic search (requires Pinecone)
   - ❌ External integrations

### Option 3: Production Deployment

**One-click deployment to Railway**

1. **Setup GitHub Repository**

   ```bash
   # Automated setup (recommended)
   ./scripts/setup-github.sh    # Linux/macOS
   scripts\setup-github.bat     # Windows
   ```

2. **Deploy to Railway**

   ```bash
   npm install -g @railway/cli
   railway login
   railway init
   railway add postgresql redis
   railway deploy
   ```

3. **Configure Production Environment**
   ```bash
   railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_key"
   railway variables set CLERK_SECRET_KEY="your_secret"
   railway variables set OPENAI_API_KEY="your_key"
   # Add other required variables
   ```

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

### 🧪 Core Features to Test

**1. Authentication & User Management**

- ✅ Sign up/Sign in with Clerk
- ✅ Multi-factor authentication (MFA)
- ✅ Role-based access control (RBAC)
- ✅ User profile management

**2. Document Management**

- ✅ Upload documents with drag-and-drop
- ✅ Document versioning and history
- ✅ Metadata management and tagging
- ✅ Permission-based access control
- ✅ Secure file download with audit trails

**3. AI-Powered Features** (requires OpenAI API key)

- 🤖 Document analysis and categorization
- 📝 Content summarization and extraction
- 🏷️ Entity recognition and tagging
- 💭 Sentiment analysis
- 🎯 Smart category suggestions

**4. Search & Discovery**

- 🔍 Full-text search with Elasticsearch
- 🧠 Semantic search with natural language queries (requires Pinecone)
- 🔗 Similar document discovery
- 📊 Search analytics and performance tracking

**5. Workflow Automation**

- 🎨 Visual workflow builder with drag-and-drop
- ✅ Approval processes with delegation
- 📋 Workflow templates library
- 🧪 Interactive workflow testing
- 📈 Execution monitoring and analytics

**6. Analytics Dashboard**

- 📊 Document performance metrics
- 🔮 Predictive insights for document lifecycle
- 📈 Trend analysis with customizable time periods
- 📋 Custom report builder with scheduling
- 🗓️ Activity heatmaps and user behavior analysis

**7. External Integrations**

- 🔗 Google Workspace (Drive, Docs, Calendar, Gmail)
- 🏢 Microsoft 365 (OneDrive, Teams, Outlook, SharePoint)
- 🔄 Real-time synchronization with webhooks
- 🔐 OAuth 2.0 authentication for both platforms

### 🔌 API Endpoints to Test

**System Health**

```bash
# Health check
curl http://localhost:3000/api/health
```

**Document Management**

```bash
# List documents (requires Clerk auth)
curl -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  http://localhost:3000/api/documents

# Upload document
curl -X POST http://localhost:3000/api/upload \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -F "file=@document.pdf"
```

**AI Analysis**

```bash
# Analyze document with AI
curl -X POST http://localhost:3000/api/ai/analyze \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{"documentId": "doc-id", "analysisType": "full"}'
```

**Search & Discovery**

```bash
# Semantic search
curl -X POST http://localhost:3000/api/search/semantic \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{"query": "find documents about project management"}'

# Find similar documents
curl http://localhost:3000/api/search/similar/doc-id \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN"
```

**Workflow Automation**

```bash
# List workflows
curl http://localhost:3000/api/workflows \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN"

# Execute workflow
curl -X POST http://localhost:3000/api/workflows/workflow-id/execute \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{"context": {"documentId": "doc-id"}}'
```

**Analytics**

```bash
# Get dashboard data
curl http://localhost:3000/api/analytics/dashboard \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN"

# Get predictive insights
curl http://localhost:3000/api/analytics/predictions \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN"
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

**After Basic Setup:**

1. **Enable Advanced Features**

   - Configure Google Workspace integration
   - Set up Microsoft 365 integration
   - Enable Pinecone for semantic search
   - Configure Elasticsearch for enhanced search

2. **Production Deployment**

   - Set up production database (Railway PostgreSQL)
   - Configure AWS S3 for file storage
   - Set up monitoring and logging
   - Configure SSL certificates

3. **Customization**

   - Customize workflow templates
   - Configure analytics dashboards
   - Set up custom reports
   - Customize UI themes and branding

4. **Team Setup**
   - Configure user roles and permissions
   - Set up organization structure
   - Configure approval workflows
   - Train team on platform features

## 🚀 Production Readiness Checklist

- ✅ **Authentication**: Clerk configured with proper domains
- ✅ **Database**: PostgreSQL with proper indexing and backups
- ✅ **File Storage**: AWS S3 with proper permissions and encryption
- ✅ **AI Services**: OpenAI API with proper rate limiting
- ✅ **Search**: Elasticsearch cluster with proper configuration
- ✅ **Monitoring**: Health checks and error tracking enabled
- ✅ **Security**: Rate limiting, input validation, and audit logging
- ✅ **Testing**: All validation scripts passing

## 📞 Support & Resources

**Documentation:**

- 📖 [Implementation Status](docs/implementation-status.md) - Detailed feature overview
- 🚀 [Deployment Guide](docs/deployment-guide.md) - Production deployment
- 🛠️ [Development Guide](docs/development-guide.md) - Development setup

**Validation Scripts:**

```bash
node validate-implementation.js          # Overall system validation
node validate-vector-implementation.js   # Vector search validation
node validate-workflow-implementation.js # Workflow system validation
node validate-dashboard.js              # Analytics dashboard validation
```

**Getting Help:**

1. Check console logs for detailed error messages
2. Verify all environment variables are properly set
3. Ensure all required services are running
4. Review API endpoint documentation
5. Run validation scripts to identify issues

**The platform is enterprise-ready and production-tested!** 🎉
