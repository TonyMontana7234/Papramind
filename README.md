# Papramind - AI-Powered Document Management Platform

Papramind is an intelligent document management and collaboration platform that combines AI-powered organization, real-time collaboration, workflow automation, and enterprise-grade security.

## Current Implementation Status

### ✅ Completed Features (Production Ready)

- **Authentication & Authorization**: Clerk-based authentication with RBAC, rate limiting, and secure session management
- **Document Management Core**: Full CRUD operations with versioning, metadata, and permission-based access control
- **File Upload & Storage**: S3 integration with virus scanning, validation, and presigned URL support
- **Database Schema**: PostgreSQL with comprehensive document and user models, optimized indexing
- **Security**: Rate limiting, password hashing, file validation, and comprehensive permission system
- **API Endpoints**: RESTful APIs for all core operations with proper error handling and validation
- **AI Integration**: Complete OpenAI GPT-4 integration with document analysis, categorization, entity extraction, sentiment analysis, and summarization
- **Vector Search**: Semantic search with Pinecone vector database, hybrid search capabilities, and similar document discovery
- **Search Integration**: Elasticsearch setup with document indexing, full-text search, and advanced query building
- **Workflow Automation**: Visual workflow builder with drag-and-drop interface, approval processes, and template library
- **Analytics Dashboard**: Comprehensive analytics with document performance tracking, predictive insights, and custom reporting
- **External Integrations**: Google Workspace and Microsoft 365 integrations with OAuth, file sync, and API access
- **Testing Suite**: Comprehensive unit and integration tests with 95%+ coverage across all modules

### 🚧 In Development

- **Frontend Application**: React components and user interface (foundation ready with Tailwind CSS and glassmorphism utilities)
- **Real-time Collaboration**: WebSocket infrastructure and collaborative editing
- **TypeScript Configuration**: Resolving type conflicts and improving development experience

### 📋 Planned Features

- 🔄 **Real-Time Collaboration**: Simultaneous editing with conflict resolution
- 📱 **Modern UX**: Glassmorphism design with PWA support
- 🔒 **Enterprise Security**: End-to-end encryption and compliance features
- 🌐 **Multi-Platform**: Web, mobile, and desktop accessibility

> 📋 **Detailed Status**: See [Implementation Status](docs/implementation-status.md) for comprehensive progress tracking and technical details.

> 🎯 **Current Phase**: Comprehensive platform with backend infrastructure, workflow automation, analytics dashboard, and external integrations complete. The platform includes full authentication, document management, AI integration, vector search, workflow builder, analytics insights, and Google/Microsoft integrations. Frontend application completion is the next major milestone.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Authentication**: Clerk (user management, SSO, MFA)
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Testing**: Jest, React Testing Library
- **Backend**: Node.js, Express/Fastify, TypeScript
- **Database**: PostgreSQL, Redis, Elasticsearch
- **AI/ML**: OpenAI GPT-4, Vector embeddings, Pinecone
- **Storage**: AWS S3/Azure Blob
- **Infrastructure**: Docker, Kubernetes

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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - Run TypeScript type checking

#### Database Scripts

- `npm run db:generate` - Generate new database migration
- `npm run db:migrate` - Apply database migrations
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:seed` - Seed database with default data

#### Setup Scripts

- `npm run search:setup` - Initialize Elasticsearch indexes
- `npm run vector:setup` - Setup Pinecone vector database
- `./scripts/setup-github.sh` - Automated GitHub repository setup (Linux/macOS)
- `scripts\setup-github.bat` - Automated GitHub repository setup (Windows)

#### Deployment Scripts

- `npm run deploy:railway` - Deploy to Railway
- `npm run railway:setup` - Setup Railway services (PostgreSQL, Redis)
- `npm run railway:migrate` - Run database migrations on Railway

#### Validation Scripts

- `node validate-implementation.js` - Validate overall system implementation
- `node validate-vector-implementation.js` - Validate vector search implementation
- `node test-vector-implementation.js` - Test vector search functionality

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
- **Redis** (Port 6379): Caching and real-time features
- **Elasticsearch** (Port 9200): Search and indexing
- **Kibana** (Port 5601): Elasticsearch management UI

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

## API Endpoints

### System

- `GET /api/health` - Health check endpoint for monitoring and deployment systems

### Authentication

- Clerk-managed authentication endpoints (sign-in, sign-up, user management)
- `POST /api/auth/refresh` - Token refresh using HTTP-only cookies (legacy support)

### Documents

- `GET /api/documents` - List documents with filtering and pagination
- `POST /api/documents` - Create new document
- `GET /api/documents/[id]` - Get document by ID
- `PUT /api/documents/[id]` - Update document
- `DELETE /api/documents/[id]` - Delete document
- `GET /api/documents/[id]/versions` - Get document version history

### File Upload & Storage

- `POST /api/upload` - Upload files with validation and virus scanning
- `POST /api/upload/presigned` - Generate presigned URLs for direct S3 upload
- `GET /api/download/[key]` - Secure file download with permission checks

### AI Integration

- `POST /api/ai/analyze` - Analyze documents with AI (categorization, entities, sentiment, summary)

### Search & Discovery

- `POST /api/search/semantic` - Semantic search using natural language queries
- `GET /api/search/similar/[id]` - Find similar documents using vector similarity
- `POST /api/search/index` - Index documents for search and vector operations

### Workflow Automation

- `GET /api/workflows` - List workflows with filtering and pagination
- `POST /api/workflows` - Create new workflow
- `GET /api/workflows/[id]` - Get workflow by ID
- `PUT /api/workflows/[id]` - Update workflow
- `DELETE /api/workflows/[id]` - Delete workflow
- `POST /api/workflows/[id]/execute` - Execute workflow
- `GET /api/workflows/templates` - Get workflow templates
- `GET /api/workflows/executions` - List workflow executions
- `GET /api/workflows/approvals` - List approval requests
- `POST /api/workflows/approvals/[id]` - Respond to approval request

### Analytics & Insights

- `GET /api/analytics/dashboard` - Get analytics dashboard data
- `GET /api/analytics/trends` - Get trend analysis data
- `GET /api/analytics/predictions` - Get AI-powered predictions
- `POST /api/analytics/events` - Track analytics events

### External Integrations

- `GET /api/integrations/google/auth` - Google OAuth authentication
- `GET /api/integrations/google/drive/files` - List Google Drive files
- `POST /api/integrations/google/sync` - Sync Google Workspace data
- `GET /api/integrations/microsoft/auth` - Microsoft OAuth authentication
- `GET /api/integrations/microsoft/onedrive/files` - List OneDrive files
- `POST /api/integrations/microsoft/sync` - Sync Microsoft 365 data

## Project Structure

```
papramind/
├── src/
│   ├── app/                 # Next.js app directory
│   │   └── api/            # API route handlers
│   │     ├── auth/         # Authentication endpoints
│   │     ├── documents/    # Document management APIs
│   │     ├── upload/       # File upload endpoints
│   │     ├── ai/           # AI integration APIs
│   │     ├── search/       # Search and discovery APIs
│   │     ├── workflows/    # Workflow automation APIs
│   │     ├── analytics/    # Analytics and insights APIs
│   │     └── integrations/ # External service integrations
│   ├── lib/                 # Core business logic
│   │   ├── auth/           # Authentication & authorization
│   │   ├── db/             # Database schema and operations
│   │   ├── services/       # Business logic services
│   │   ├── storage/        # File storage integration
│   │   ├── security/       # Security utilities
│   │   ├── validation/     # Input validation schemas
│   │   ├── ai/             # AI integration services
│   │   ├── vector/         # Vector search services
│   │   ├── search/         # Elasticsearch integration
│   │   ├── upload/         # File upload services
│   │   ├── jobs/           # Background job processing
│   │   └── middleware/     # Request middleware
│   ├── components/          # React UI components
│   │   ├── analytics/      # Analytics dashboard components
│   │   └── workflow/       # Workflow builder components
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript type definitions
├── tests/                  # Comprehensive test suite
│   ├── auth/              # Authentication tests
│   ├── document/          # Document management tests
│   ├── upload/            # File upload tests
│   ├── ai/                # AI integration tests
│   ├── vector/            # Vector search tests
│   ├── search/            # Search functionality tests
│   ├── workflow/          # Workflow automation tests
│   ├── analytics/         # Analytics system tests
│   └── integrations/      # External integration tests
├── config/                  # Configuration files
├── scripts/                 # Database and utility scripts
├── docs/                    # Technical documentation
├── docker-compose.yml       # Development environment
└── Dockerfile              # Production container
```

## Environment Variables

Key environment variables (see `.env.example` for complete list):

### Database & Storage

- `DB_HOST`, `DB_PORT`, `DB_NAME` - Database configuration
- `REDIS_HOST`, `REDIS_PORT` - Redis configuration
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_S3_BUCKET` - File storage

### Search & AI

- `ELASTICSEARCH_URL` - Elasticsearch configuration
- `OPENAI_API_KEY` - OpenAI GPT-4 API access
- `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`, `PINECONE_INDEX_NAME` - Vector search

### Authentication & Security

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key
- `CLERK_SECRET_KEY` - Clerk secret key
- `JWT_SECRET`, `JWT_REFRESH_SECRET` - Authentication secrets (legacy)
- `ENCRYPTION_KEY` - Data encryption key

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
