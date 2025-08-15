# E-commerce Platform

A large-scale, Amazon-like e-commerce platform optimized for the Indian market with 30-minute quick commerce delivery capabilities.

## Architecture

This project uses a monorepo structure with the following components:

- **Backend**: NestJS-based microservices architecture
- **Frontend**: React with Vite, TanStack Router, and TanStack Query
- **Shared**: Common types and utilities
- **Database**: PostgreSQL 16 with Redis 7 for caching

## Quick Start

### Prerequisites

- Node.js 20+
- Docker and Docker Compose
- npm

### Development Setup

1. **Clone and setup the project:**

   ```bash
   cd ecommerce-platform
   ```

2. **Start the development environment:**

   ```bash
   docker-compose up -d
   ```

3. **Install dependencies for all packages:**

   ```bash
   # Backend
   cd backend && npm install

   # Frontend
   cd ../frontend && npm install

   # Shared types
   cd ../shared && npm install
   ```

4. **Start development servers:**

   ```bash
   # Backend (in backend directory)
   npm run start:dev

   # Frontend (in frontend directory)
   npm run dev
   ```

### Services

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Database**: PostgreSQL on localhost:5432
- **Redis**: localhost:6379

### Health Check

Check if all services are running:

```bash
curl http://localhost:3000/health
```

## Project Structure

```
ecommerce-platform/
├── backend/                 # NestJS backend application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── entities/       # TypeORM entities
│   │   └── ...
│   └── Dockerfile.dev
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   └── ...
│   └── Dockerfile.dev
├── shared/                 # Shared types and utilities
│   └── src/
├── database/              # Database initialization scripts
│   └── init/
└── docker-compose.yml     # Development environment
```

## Technology Stack

### Backend

- **Framework**: NestJS 10.x
- **Database**: PostgreSQL 16 with TypeORM
- **Cache**: Redis 7
- **Language**: TypeScript 5.x

### Frontend

- **Framework**: React 18.x with Vite
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Language**: TypeScript 5.x

### Infrastructure

- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL 16
- **Cache**: Redis 7

## Development

### Available Scripts

#### Backend

```bash
npm run start:dev    # Start development server
npm run build        # Build for production
npm run test         # Run tests
```

#### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

#### Shared

```bash
npm run build        # Build shared types
npm run dev          # Watch mode for development
```

## Environment Variables

### Backend (.env.development)

- `DATABASE_HOST`: PostgreSQL host
- `DATABASE_PORT`: PostgreSQL port
- `DATABASE_NAME`: Database name
- `DATABASE_USER`: Database user
- `DATABASE_PASSWORD`: Database password
- `REDIS_HOST`: Redis host
- `REDIS_PORT`: Redis port

### Frontend (.env.development)

- `VITE_API_URL`: Backend API URL

## Next Steps

This foundation provides:

- ✅ Monorepo structure with NX
- ✅ NestJS backend with TypeORM and PostgreSQL
- ✅ React frontend with TanStack Router and Query
- ✅ Docker development environment
- ✅ Shared types package
- ✅ Database connectivity and health checks

Ready for implementing the next tasks in the development plan!
