# Next Level - Web Agency Application

## Overview

Next Level is a modern web agency landing page application built for a Bordeaux-based digital agency. The application showcases the agency's services including web development, SEO, GSO (Generative Search Optimization for AI search engines), and Google Ads management. Built with a modern full-stack architecture, it features a React frontend with shadcn/ui components, an Express backend, and PostgreSQL database support via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite for fast development and optimized production builds
- **Routing:** Wouter for lightweight client-side routing
- **UI Library:** shadcn/ui (Radix UI primitives) with the "new-york" style variant
- **Styling:** Tailwind CSS with CSS variables for theming
- **State Management:** TanStack React Query for server state
- **Form Handling:** React Hook Form with Zod validation
- **Type Safety:** TypeScript with strict mode enabled

**Design Decisions:**
- Component-based architecture with reusable UI components in `client/src/components/ui/`
- Custom hooks for scroll animations and mobile detection
- Responsive design with mobile-first approach
- French language interface (targeting French market in Bordeaux)
- Gradient-based design system with primary (blue) and secondary (purple) brand colors

**Directory Structure:**
```
client/
├── src/
│   ├── components/     # Feature components and UI primitives
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and query client
│   └── pages/          # Route pages (Home, NotFound)
```

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with ES Modules
- **Framework:** Express.js
- **Database ORM:** Drizzle ORM
- **Session Management:** connect-pg-simple (PostgreSQL session store)
- **Development:** tsx for TypeScript execution in development

**Design Decisions:**
- Separation of concerns with modular route registration
- Storage abstraction layer (IStorage interface) allowing for both in-memory and database implementations
- Memory storage implementation (`MemStorage`) for development/testing
- Middleware for request logging and JSON body parsing with raw body preservation
- Custom Vite middleware integration for development with HMR support

**Directory Structure:**
```
server/
├── index.ts      # Express app setup and middleware
├── routes.ts     # Route registration
├── storage.ts    # Storage abstraction and implementations
└── vite.ts       # Vite development server integration
```

### Data Storage

**Database:** PostgreSQL via Neon Database (@neondatabase/serverless)

**ORM:** Drizzle ORM with the following configuration:
- Schema location: `shared/schema.ts`
- Migrations directory: `./migrations`
- Dialect: PostgreSQL
- Connection via `DATABASE_URL` environment variable

**Current Schema:**
- `users` table with UUID primary key, username (unique), and password fields
- Zod schema validation for insert operations

**Design Philosophy:**
- Shared schema definitions between frontend and backend (`shared/` directory)
- Type-safe database operations with TypeScript inference
- Database credentials managed via environment variables

### Authentication & Authorization

**Current State:** Basic user schema exists but authentication implementation is incomplete

**Planned Architecture:**
- User authentication with password hashing
- Session management using PostgreSQL-backed sessions
- Storage interface includes user lookup methods (by ID and username)

### Build & Deployment

**Development Mode:**
- Frontend: Vite dev server with HMR
- Backend: tsx with hot reload
- Concurrent development with Vite middleware integration

**Production Build:**
- Frontend: Vite build outputting to `dist/public`
- Backend: esbuild bundling server code to `dist/index.js`
- ESM module format throughout

**Scripts:**
- `npm run dev` - Development mode
- `npm run build` - Production build
- `npm run start` - Run production server
- `npm run db:push` - Push database schema changes

## External Dependencies

### UI & Styling
- **shadcn/ui:** Complete component library built on Radix UI primitives
- **Tailwind CSS:** Utility-first CSS framework with custom configuration
- **Radix UI:** Accessible component primitives (accordion, dialog, dropdown, etc.)
- **Lucide React:** Icon library for UI elements
- **class-variance-authority:** Type-safe variant styling
- **tailwind-merge & clsx:** Utility class merging

### Data Management
- **@tanstack/react-query:** Server state management and data fetching
- **React Hook Form:** Form state and validation
- **Zod:** Schema validation (@hookform/resolvers for integration)
- **drizzle-zod:** Zod schema generation from Drizzle schemas

### Database & Backend
- **@neondatabase/serverless:** PostgreSQL client for Neon Database
- **Drizzle ORM:** Type-safe database toolkit
- **connect-pg-simple:** PostgreSQL session store for Express
- **Express.js:** Web application framework

### Development Tools
- **Vite:** Build tool and dev server
- **@vitejs/plugin-react:** React support for Vite
- **@replit/vite-plugin-runtime-error-modal:** Error handling in Replit environment
- **@replit/vite-plugin-cartographer & dev-banner:** Replit-specific development tools
- **esbuild:** JavaScript bundler for production server build
- **tsx:** TypeScript execution for development

### Utilities
- **wouter:** Lightweight router for React
- **date-fns:** Date manipulation library
- **cmdk:** Command palette component
- **embla-carousel-react:** Carousel component
- **nanoid:** Unique ID generation

### Type Safety
- TypeScript with strict mode enabled throughout
- Path aliases configured (@/, @shared/, @assets/)
- Shared types between client and server via `shared/` directory