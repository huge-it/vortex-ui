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

Because this application is part of a monorepo, you can run commands from the root of the workspace using the `--filter` flag.

### Development

To start the development server:
```bash
pnpm --filter vortex-docs dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:
```bash
pnpm --filter vortex-docs build
```

### Start Production Server

After building, you can start the production server:
```bash
pnpm --filter vortex-docs start
```

### Linting

To run ESLint on this application:
```bash
pnpm --filter vortex-docs lint
```

## Running Scripts Directly

Alternatively, you can run these scripts directly from within the `apps/docs` directory:
- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`

## Building Multiple Workspace Projects

If you want to build both the Docs application (`vortex-docs`) and the UI Storybook (`vortex-ui`) from the root of the workspace:

```bash
# Build the Docs app
pnpm --filter vortex-docs build

# Build the UI package
pnpm --filter vortex-ui build

# Build the UI Storybook
pnpm --filter vortex-ui build-storybook
```

To run the dev environments simultaneously, you could use:
```bash
# Start both Docs dev server and UI Storybook (using turborepo if configured, or multiple terminals)
pnpm --filter vortex-docs dev
pnpm --filter vortex-ui storybook
```
