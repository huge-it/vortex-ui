# VortexUI Package

This is the shared UI component library for the Vortex ecosystem, built with React and Material UI, and documented using Storybook.

## Important Dependencies

- **React:** ^19.0.0
- **Material UI (@mui/material):** ^6.0.0
- **Storybook:** ^10.5.10
- **Emotion:** ^11.0.0

## Prerequisites

- Node.js (v20+ recommended)
- `pnpm` (Corepack enabled)

## Getting Started

This package uses Storybook for component development and testing. To start the Storybook development server:

```bash
# from the root of the monorepo, you can run:
pnpm dev --filter vortex-ui
# (assuming the root turbo config maps "dev" to "storybook" for this package)

# or directly from this directory:
pnpm storybook
```

This will start Storybook locally on port 6006 (by default). Open [http://localhost:6006](http://localhost:6006) to view the component explorer.

## Scripts

- `pnpm storybook` - Starts the local Storybook development server.
- `pnpm build-storybook` - Builds Storybook as a static site for deployment.
