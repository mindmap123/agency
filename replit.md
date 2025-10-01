# Next Level - Web Agency Application

## Overview

Next Level is a professional web agency landing page application built for a Bordeaux-based digital agency. Redesigned to match the clean, professional style of beyonds.fr, the application showcases the agency's expertise in web development, SEO, GSO (Generative Search Optimization for AI search engines), Google Ads, site maintenance, and redesign services. Built with a modern full-stack architecture, it features a React frontend with shadcn/ui components, an Express backend, and PostgreSQL database support via Drizzle ORM.

**Recent Changes (October 2025):**
- **Header redesign:** Transparent header with backdrop blur, minimalist desktop view showing only "Prendre RDV" button + burger menu
- **Modern burger menu:** All navigation consolidated into burger menu with ChevronRight icons and smooth animations
- **SEO/GSO/Acquisition section:** Comprehensive section with 7 expertises (SEO, GSO, technical optimization, content writing, SEA, marketing automation, growth hacking)
- **AI engines:** Added Grok to the list (6 total: ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Grok)
- **Modern icons:** Replaced all ArrowRight with ArrowUpRight icons featuring diagonal hover animations
- **Professional palette:** Primary blue (hsl(220, 90%, 56%)), clean white background, subtle gradients
- Logo adapted to use primary color from site palette for visual consistency

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
- Clean, professional design inspired by beyonds.fr with minimal gradients
- Simple color palette: white background, primary blue (hsl(220, 90%, 56%)), neutral grays
- Subtle animations and hover effects for professional look

**Site Structure:**
- **Header:** Transparent with backdrop blur, desktop shows only "Prendre RDV" + burger menu
- **Hero:** "Agence web à Bordeaux" with strong value proposition
- **Agency intro:** Brief description highlighting 5 years experience
- **Expertises:** 6 services with icons (Création sites, SEO, GSO, Google Ads, Refonte, Maintenance)
- **Stats:** 50+ projects, 5 years experience, 8 experts, 4.9/5 Google rating
- **Agency section:** Image placeholder with detailed description of digital expertise
- **Technologies:** WordPress, Shopify, React, Next.js
- **SEO/GSO/Acquisition:** Comprehensive section with 7 expertises and strategic approach
- **AI engines:** 6 LLM logos (ChatGPT, Claude, Perplexity, Gemini, DeepSeek, Grok)
- **Projects portfolio:** 3 sample projects with cards
- **Strong CTA:** "Vous avez un projet web? 🚀"
- **Contact form:** Validation with service selection
- **Footer:** Professional dark footer with links and contact info

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