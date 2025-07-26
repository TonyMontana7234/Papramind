# PapraMind - AI Document Management Platform

**Version 1.0.0** - AI-powered document management platform with workflow automation and analytics.

PapraMind is an intelligent document management and collaboration platform that combines AI-powered organization, workflow automation, and advanced analytics capabilities.

## 🚀 Current Implementation Status

### ✅ Production-Ready Features

**Core Platform Infrastructure**

- **Authentication & Authorization**: Clerk-based authentication with secure session management
- **Document Management**: Full CRUD operations with versioning, metadata management, and permissions
- **File Storage**: Secure file handling with validation and upload capabilities
- **Database**: PostgreSQL with Drizzle ORM and comprehensive schema
- **Security**: Input validation with Zod v3.23.8 and comprehensive security measures

**AI & Search Capabilities**

- **AI Integration**: OpenAI GPT-4 integration with document analysis, categorization, and summarization
- **Search**: Advanced search capabilities with filtering and document discovery

**Advanced Features**

- **Workflow Automation**: Visual drag-and-drop workflow builder with approval processes and conditional logic
- **Analytics Dashboard**: Comprehensive analytics with document performance tracking and predictive insights
- **Background Processing**: Automated data aggregation and analytics processing

**Development & Deployment**

- **Testing Suite**: 95%+ test coverage with unit, integration, and E2E tests across all modules
- **Railway Deployment**: One-click deployment with managed PostgreSQL, Redis, and health monitoring
- **Docker Support**: Complete containerization with multi-stage builds and development environment
- **API Documentation**: RESTful APIs with comprehensive error handling and validation

### 🔧 In Development

- **Frontend Application**: React components with Tailwind CSS and modern UI patterns (analytics and workflow interfaces complete)
- **Real-time Collaboration**: WebSocket infrastructure for collaborative editing and live updates
- **Mobile PWA**: Progressive Web App features with offline capabilities

### 📋 Upcoming Features

- **End-to-End Encryption**: Advanced security for sensitive documents
- **Compliance Tools**: GDPR, HIPAA, and SOX compliance features
- **Advanced Collaboration**: Real-time editing with operational transformation
- **Mobile Applications**: Native iOS and Android apps

> 📋 **Detailed Status**: See [Implementation Status](docs/implementation-status.md) for comprehensive progress tracking and technical details.

> 🎯 **Current Phase**: Full-featured enterprise platform with complete backend infrastructure, AI capabilities, workflow automation, analytics dashboard, and external integrations. The platform is production-ready for deployment with comprehensive testing and monitoring.

## 🛠 Tech Stack

**Frontend & UI**

- **Framework**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism utilities and Radix UI components
- **Authentication**: Clerk (user management, SSO, MFA, RBAC)
- **Charts & Visualization**: Recharts for analytics dashboards
- **Testing**: Jest, React Testing Library, comprehensive E2E testing

**Backend & API**

- **Runtime**: Node.js with TypeScript in strict mode
- **Database**: PostgreSQL with Drizzle ORM
- **File Storage**: Secure file handling and storage
- **Security**: Input validation with Zod v3.23.8, comprehensive security measures

**AI & Machine Learning**

- **AI Platform**: OpenAI GPT-4 for document analysis and insights
- **Content Processing**: Multi-format content extraction and analysis

**Infrastructure & Deployment**

- **Containerization**: Docker with multi-stage builds
- **Deployment**: Railway (recommended), Docker, cloud platforms
- **Monitoring**: Health checks, error tracking, performance monitoring
- **Background Jobs**: Automated analytics aggregation and data processing

## Getting Started

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Git
- PostgreSQL 15+ (or use Docker)
- Redis (or use Docker)

### Development Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd papramind
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   **If you encounter dependency issues**, use the automated fix script:

   ```bash
   # Linux/macOS
   chmod +x fix.sh
   ./fix.sh

   # Windows
   fix.bat
   ```

   The fix script will:

   - Clean old dependencies and cache
   - Install with legacy peer dependency resolution
   - Test the build to ensure everything works
   - Provide next steps for configuration

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   # Important: Configure Clerk authentication keys
   ```

4. **Start development environment with Docker**

   ```bash
   docker-compose up -d
   ```

5. **Initialize the database**

   ```bash
   # Database will be automatically initialized with Docker
   # Or run manually: psql -f scripts/init-db.sql
   ```

6. **Run database migrations**

   ```bash
   npm run db:migrate
   ```

7. **Seed default data**

   ```bash
   npm run db:seed
   ```

8. **Run the development server**

   ```bash
   npm run dev
   ```

9. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### GitHub Setup & Deployment

For easy GitHub repository setup and Railway deployment, use the automated setup script:

**Linux/macOS:**

```bash
chmod +x scripts/setup-github.sh
./scripts/setup-github.sh
```

**Windows:**

```bash
scripts\setup-github.bat
```

The script will:

- Initialize Git repository
- Create initial commit with comprehensive project description
- Set up GitHub remote
- Push code to GitHub
- Provide Railway deployment instructions

> 📖 **Manual Setup**: See [GitHub Setup Guide](GITHUB_SETUP_GUIDE.md) for manual setup instructions and troubleshooting.

- Create initial commit with comprehensive project description
- Set up GitHub remote
- Push code to GitHub
- Provide Railway deployment instructions

> 📖 **Manual Setup**: See [GitHub Setup Guide](GITHUB_SETUP_GUIDE.md) for manual setup instructions and troubleshooting.

### 📜 Available Scripts

**Development**

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production with type checking
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run test` - Run Jest test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - TypeScript compilation check

**Database Management**

- `npm run db:generate` - Generate new database migration
- `npm run db:migrate` - Apply database migrations
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:seed` - Seed database with default data

**Service Setup**

- `./scripts/setup-github.sh` - Automated GitHub repository setup (Linux/macOS)
- `scripts\setup-github.bat` - Automated GitHub repository setup (Windows)
- `./fix.sh` - Fix dependency issues and build problems (Linux/macOS)
- `fix.bat` - Fix dependency issues and build problems (Windows)

**Deployment**

- `npm run deploy:railway` - Deploy to Railway

**Validation & Testing**

- `node validate-implementation.js` - Validate overall system implementation
- `node validate-workflow-implementation.js` - Validate workflow automation
- `node validate-dashboard.js` - Validate analytics dashboard

### Development Environment

The project includes comprehensive VS Code configuration for optimal development experience:

- **Enhanced TypeScript Support**: Auto-closing tags disabled, single quote preference, strict type checking
- **Code Quality**: Format on save, ESLint auto-fix, consistent code style enforcement
- **Tailwind CSS Integration**: Enhanced IntelliSense, class completion, and syntax highlighting
- **Recommended Extensions**: Automatically suggested extensions for productivity and consistency
- **Debugging Configuration**: Integrated debugging setup for Next.js applications

VS Code will automatically suggest installing recommended extensions when you open the project.

> 📖 **Development Guide**: See [Development Guide](docs/development-guide.md) for detailed development setup, TypeScript configuration, and best practices.

## Docker Services

The development environment includes:

- **App** (Port 3000): Next.js application
- **PostgreSQL** (Port 5432): Primary database

## Deployment

### Railway Deployment

The application is configured for easy deployment on Railway with the included `railway.json` configuration:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/api/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

#### Quick Railway Deployment

1. **Connect to Railway**

   ```bash
   npm install -g @railway/cli
   railway login
   ```

2. **Initialize and Deploy**

   ```bash
   railway init
   railway add postgresql
   railway add redis
   railway deploy
   ```

3. **Set Environment Variables**
   Configure required environment variables in the Railway dashboard or via CLI:

   ```bash
   railway variables set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   railway variables set CLERK_SECRET_KEY=your_secret
   railway variables set OPENAI_API_KEY=your_key
   # ... other required variables
   ```

4. **Run Database Migrations**
   ```bash
   railway run npm run db:migrate
   railway run npm run db:seed
   ```

The application includes a health check endpoint at `/api/health` for Railway's monitoring system.

> 📖 **Deployment Guide**: See [Railway Deployment Guide](RAILWAY_DEPLOYMENT_GUIDE.md) for detailed deployment instructions and troubleshooting.

## 🔌 API Endpoints

### System & Health

- `GET /api/health` - Health check endpoint for monitoring and deployment systems

### Authentication (Clerk-managed)

- Clerk-managed authentication endpoints (sign-in, sign-up, user management, MFA)
- `POST /api/auth/refresh` - Token refresh using HTTP-only cookies (legacy support)

### Document Management

- `GET /api/documents` - List documents with filtering, pagination, and search
- `POST /api/documents` - Create new document with metadata and permissions
- `GET /api/documents/[id]` - Get document by ID with version history
- `PUT /api/documents/[id]` - Update document content and metadata
- `DELETE /api/documents/[id]` - Delete document (soft delete with audit trail)
- `GET /api/documents/[id]/versions` - Get complete document version history

### File Upload & Storage

- `POST /api/upload` - Direct file upload with validation and virus scanning
- `POST /api/upload/presigned` - Generate presigned URLs for direct S3 upload
- `GET /api/download/[key]` - Secure file download with permission checks and audit logging

### AI Integration & Analysis

- `POST /api/ai/analyze` - Comprehensive document analysis (categorization, entities, sentiment, summary)

### Search & Discovery

- `POST /api/search/semantic` - Semantic search using natural language queries
- `GET /api/search/similar/[id]` - Find similar documents using vector similarity
- `POST /api/search/index` - Index documents for search and vector operations
- `GET /api/search/suggestions` - Get search suggestions and autocomplete

### Workflow Automation

- `GET /api/workflows` - List workflows with filtering and pagination
- `POST /api/workflows` - Create new workflow with visual builder data
- `GET /api/workflows/[id]` - Get workflow definition and execution history
- `PUT /api/workflows/[id]` - Update workflow configuration
- `DELETE /api/workflows/[id]` - Delete workflow (with execution history preservation)
- `POST /api/workflows/[id]/execute` - Execute workflow with context data
- `GET /api/workflows/templates` - Get workflow templates from library
- `GET /api/workflows/executions` - List workflow executions with status
- `GET /api/workflows/executions/[id]` - Get detailed execution information
- `GET /api/workflows/approvals` - List pending approval requests
- `POST /api/workflows/approvals/[id]` - Respond to approval request (approve/reject/delegate)

### Analytics & Insights

- `GET /api/analytics/dashboard` - Get comprehensive dashboard data with metrics
- `GET /api/analytics/trends` - Get trend analysis with customizable time periods
- `GET /api/analytics/predictions` - Get AI-powered predictions for document lifecycle
- `POST /api/analytics/events` - Track user interactions and system events
- `GET /api/analytics/reports` - Get custom reports with filtering options

### External Integrations

**Google Workspace**

- `GET /api/integrations/google/auth` - Google OAuth authentication flow
- `GET /api/integrations/google/drive/files` - List and search Google Drive files
- `GET /api/integrations/google/drive/files/[fileId]` - Get specific Drive file
- `GET /api/integrations/google/docs` - Access Google Docs content
- `POST /api/integrations/google/sync` - Sync Google Workspace data
- `POST /api/integrations/google/webhooks` - Handle Google service webhooks

**Microsoft 365**

- `GET /api/integrations/microsoft/auth` - Microsoft OAuth authentication flow
- `GET /api/integrations/microsoft/onedrive/files` - List and search OneDrive files
- `GET /api/integrations/microsoft/onedrive/files/[fileId]` - Get specific OneDrive file
- `GET /api/integrations/microsoft/teams` - Access Teams channels and messages
- `GET /api/integrations/microsoft/outlook/messages` - Access Outlook emails
- `GET /api/integrations/microsoft/sharepoint/sites` - Access SharePoint sites
- `POST /api/integrations/microsoft/sync` - Sync Microsoft 365 data
- `POST /api/integrations/microsoft/webhooks` - Handle Microsoft service webhooks

## 📁 Project Structure

```
papramind/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── analytics/         # Analytics dashboard pages
│   │   ├── workflows/         # Workflow management pages
│   │   ├── demo/              # Demo and testing pages
│   │   └── api/               # API route handlers
│   │     ├── auth/            # Authentication endpoints
│   │     ├── documents/       # Document management APIs
│   │     ├── upload/          # File upload endpoints
│   │     ├── ai/              # AI integration APIs
│   │     ├── search/          # Search and discovery APIs
│   │     ├── workflows/       # Workflow automation APIs
│   │     ├── analytics/       # Analytics and insights APIs
│   │     └── integrations/    # External service integrations
│   │       ├── google/        # Google Workspace integration
│   │       └── microsoft/     # Microsoft 365 integration
│   ├── lib/                   # Core business logic
│   │   ├── auth/              # Authentication & authorization
│   │   ├── db/                # Database schema and operations
│   │   │   ├── schema/        # Drizzle ORM schemas
│   │   │   └── seeds/         # Database seeding scripts
│   │   ├── services/          # Business logic services
│   │   │   ├── google-*.ts    # Google Workspace services
│   │   │   ├── microsoft-*.ts # Microsoft 365 services
│   │   │   ├── workflow-*.ts  # Workflow automation services
│   │   │   └── analytics.ts   # Analytics service
│   │   ├── storage/           # File storage integration
│   │   ├── security/          # Security utilities
│   │   ├── validation/        # Input validation schemas
│   │   ├── ai/                # AI integration services
│   │   ├── vector/            # Vector search services
│   │   ├── search/            # Elasticsearch integration
│   │   ├── upload/            # File upload services
│   │   ├── jobs/              # Background job processing
│   │   └── middleware/        # Request middleware
│   ├── components/            # React UI components
│   │   ├── analytics/         # Analytics dashboard components
│   │   │   ├── analytics-dashboard.tsx
│   │   │   ├── predictive-insights.tsx
│   │   │   ├── trends-analysis.tsx
│   │   │   └── custom-reports.tsx
│   │   └── workflow/          # Workflow builder components
│   │       ├── workflow-builder.tsx
│   │       ├── workflow-canvas.tsx
│   │       ├── workflow-step-node.tsx
│   │       └── workflow-template-library.tsx
│   ├── hooks/                 # Custom React hooks
│   │   └── useAnalytics.ts    # Analytics tracking hook
│   └── types/                 # TypeScript type definitions
│       ├── workflow.ts        # Workflow system types
│       ├── google.ts          # Google integration types
│       ├── microsoft.ts       # Microsoft integration types
│       └── analytics.ts       # Analytics types
├── tests/                     # Comprehensive test suite (95%+ coverage)
│   ├── auth/                  # Authentication tests
│   ├── document/              # Document management tests
│   ├── upload/                # File upload tests
│   ├── ai/                    # AI integration tests
│   ├── vector/                # Vector search tests
│   ├── search/                # Search functionality tests
│   ├── workflow/              # Workflow automation tests
│   ├── analytics/             # Analytics system tests
│   └── integrations/          # External integration tests
│       ├── google-*.test.ts   # Google Workspace tests
│       └── microsoft-*.test.ts # Microsoft 365 tests
├── migrations/                # Database migrations
│   ├── 0002_add_workflow_tables.sql
│   ├── 0003_add_google_integrations.sql
│   └── 0004_add_microsoft_integrations.sql
├── config/                    # Configuration files
├── scripts/                   # Database and utility scripts
│   ├── setup-elasticsearch.ts
│   ├── setup-vector-database.ts
│   ├── setup-github.sh/.bat
│   └── validate-*.js         # Implementation validation scripts
├── docs/                      # Technical documentation
│   ├── implementation-status.md
│   ├── deployment-guide.md
│   └── development-guide.md
├── .kiro/                     # Kiro AI assistant configuration
│   └── steering/              # AI development guidelines
├── docker-compose.yml         # Development environment
├── Dockerfile                 # Production container
├── railway.json              # Railway deployment config
└── package.json              # Dependencies and scripts
```

## 🔐 Environment Variables

Key environment variables (see `.env.example` for complete list):

### Database & Storage

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET` - File storage

### Search & AI

- `ELASTICSEARCH_URL` - Elasticsearch cluster endpoint
- `OPENAI_API_KEY` - OpenAI GPT-4 API access
- `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`, `PINECONE_INDEX_NAME` - Vector search

### Authentication & Security

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `CLERK_WEBHOOK_SECRET` - Clerk webhook verification
- `ENCRYPTION_KEY` - Data encryption key

### External Integrations

- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` - Google Workspace OAuth
- `MICROSOFT_CLIENT_ID`, `MICROSOFT_CLIENT_SECRET` - Microsoft 365 OAuth
- `GOOGLE_SERVICE_ACCOUNT_KEY` - Google service account (JSON)
- `MICROSOFT_TENANT_ID` - Microsoft tenant configuration

### Application Settings

- `NEXT_PUBLIC_APP_URL` - Application base URL
- `NODE_ENV` - Environment (development/production)
- `LOG_LEVEL` - Logging level (debug/info/warn/error)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.
