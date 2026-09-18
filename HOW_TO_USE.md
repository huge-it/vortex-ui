# Using Vortex-UI in Another Application

This guide explains how to install and use the `vortex-ui` component library in a new project. 

Vortex UI is published to the NPM registry, making it easy to install and keep up-to-date in any React or Next.js application.

---

## Step-by-Step Installation Guide

### Step 1: Install the Package

Open your terminal in the root of your consuming project (e.g., your Next.js app) and install the library via your package manager:

```bash
npm install @hugeit/vortex-ui
```

*(Note: Depending on your package manager, you can also use `yarn add @hugeit/vortex-ui` or `pnpm add @hugeit/vortex-ui`).*

### Step 2: Set up the Provider

`vortex-ui` requires a UI provider at the root of your application to supply the necessary theme configuration to the underlying components. 

Open your root layout or app component (e.g., `src/app/layout.tsx` in Next.js App Router) and wrap your application with `VortexUIProvider`:

```tsx
import { VortexUIProvider } from "@hugeit/vortex-ui";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <VortexUIProvider>
          {children}
        </VortexUIProvider>
      </body>
    </html>
  );
}
```

### Step 3: Start Using the Components!

You are now fully set up. You can import components directly from `@hugeit/vortex-ui` in your code:

```tsx
import { Button } from '@hugeit/vortex-ui';

export default function Home() {
  return (
    <main style={{ padding: "4rem", display: "flex", justifyContent: "center" }}>
      <Button variant="filled">Click Me</Button>
    </main>
  );
}
```

---

## Maintenance & Updates

### How to pull the latest updates from Vortex-UI
When new versions of `vortex-ui` are published (e.g., bug fixes or new components), updating is as simple as bumping the version via NPM:

```bash
npm install @hugeit/vortex-ui@latest
```

*Note: After updating, always restart your development server (e.g., `npm run dev`). If changes don't appear, try deleting your framework's cache (like the `.next` folder).*
