# Vortex Docs App

This is a [Next.js](https://nextjs.org/) project that serves as the documentation and showcase application for the VortexUI library.

## Important Dependencies

- **Next.js:** 16.3.1
- **React:** 19.2.8
- **Material UI (@mui/material):** ^6.0.0
- **Serwist:** ^9.5.12 (For PWA and service worker support)
- **VortexUI:** Workspace linked package

## Prerequisites

- Node.js (v20+ recommended based on types)
- `pnpm` (Corepack enabled, v9.0.0 used in the monorepo)

## Getting Started

To run the development server:

```bash
# from the root of the monorepo, using turbo:
pnpm dev --filter vortex-docs

# or directly from this directory:
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `pnpm dev` - Starts the Next.js development server
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts a Next.js production server
- `pnpm lint` - Runs Next.js ESLint
