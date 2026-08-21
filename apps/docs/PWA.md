# PWA Integration Guide

This application has been configured as a Progressive Web App (PWA) using `@serwist/next`, a modern and secure successor to `next-pwa`.

## Key Components

The PWA setup consists of the following key pieces:

1. **Service Worker (`app/sw.ts`)**
   The service worker handles caching and offline capabilities. It is configured to pre-cache the necessary Next.js assets and handle runtime caching for navigation and API requests.

2. **Web Manifest (`app/manifest.ts`)**
   The `manifest.ts` file dynamically generates the `manifest.webmanifest` required for browsers to recognize the application as installable. It defines the app's name, theme colors, and icons.

3. **Layout Meta Tags (`app/layout.tsx`)**
   The `viewport` configuration sets the `themeColor`, which dictates the color of the browser's toolbar/address bar on mobile devices to match the app's branding.

4. **Next.js Configuration (`next.config.ts`)**
   The configuration is wrapped with `withSerwistInit` which compiles the service worker during the build process and outputs it to `public/sw.js`.

5. **Icons (`public/`)**
   The `public/` directory contains `icon-192x192.png` and `icon-512x512.png`, which are used when the app is installed on a device's home screen.

## Scripts & Build Process

Because `@serwist/next` relies on Webpack to inject the service worker manifest, the build script in `package.json` has been updated to force Webpack instead of Turbopack (which is experimental for service worker generation):

```json
"scripts": {
  "build": "next build --webpack"
}
```

## Testing the PWA Locally

1. Create a production build:
   ```bash
   pnpm run build
   ```
2. Start the production server:
   ```bash
   pnpm start
   ```
3. Open the application in Google Chrome.
4. Open Developer Tools (F12) -> **Application** tab -> **Manifest**. Verify the manifest is loaded correctly.
5. In the same tab, check **Service Workers** to ensure `sw.js` is registered and running.
6. You should see an install icon in the address bar indicating the PWA is installable.
