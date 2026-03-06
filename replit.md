# Project Overview

Full-stack web application using React (frontend) and Express (backend).

## Architecture

- **Frontend**: React 18, Vite, Tailwind CSS, TanStack Query, Radix UI, Wouter (routing)
- **Backend**: Express 5, TypeScript (tsx), Drizzle ORM
- **Database**: PostgreSQL (via Drizzle ORM)
- **Styling**: Tailwind CSS with custom CSS variables for theming

## Project Structure

```
client/           # React frontend
  index.html      # HTML entry point
  src/
    main.tsx      # App entry point
    App.tsx       # Root component with routing
    index.css     # Global styles + Tailwind + CSS variables
    pages/        # Page components
    lib/          # Utilities (queryClient, etc.)
    components/   # Reusable components

server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route registration
  storage.ts      # Data storage layer
  vite.ts         # Vite dev server integration

shared/           # Shared types/schemas
  schema.ts       # Drizzle ORM schema + Zod types
```

## Running the App

- **Development**: `tsx server/index.ts` (configured in workflow)
- **Build**: `vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.cjs`
- **Production**: `node ./dist/index.cjs`
- **DB push**: `npm run db:push`

## Key Configuration

- Port: 5000 (mapped to external port 80)
- Vite root: `./client`
- Build output: `./dist/public`
- TypeScript paths: `@/*` → `./client/src/*`, `@shared/*` → `./shared/*`

## Dependencies

Major packages: express, react, vite, drizzle-orm, @tanstack/react-query, wouter, zod, tailwindcss, radix-ui components, passport, express-session
