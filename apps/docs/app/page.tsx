"use client";

import React from "react";
import { Typography, Box, Divider, Stack } from "@mui/material";
import { ComponentInstallation } from "../components/docs/ComponentInstallation";
import { ComponentCode } from "../components/docs/ComponentCode";
import Link from "next/link";
import { Button } from "vortex-ui";

export default function Page() {
  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: "3.5rem",
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VortexUI
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: "1.25rem",
            lineHeight: 1.6,
            maxWidth: "800px",
            mb: 4,
          }}
        >
          An organization-wide React component library built on top of Material
          UI. VortexUI owns the public API, styling, theme, naming, variants,
          and component behavior, providing a recognized styling identity in
          browser DevTools.
        </Typography>
        <Stack direction="row" gap={2}>
          <Button
            variant="filled"
            size="lg"
            component={Link}
            href="/components/button"
          >
            Explore Components
          </Button>
          <Button
            variant="outlined"
            size="lg"
            component="a"
            href="https://github.com"
            target="_blank"
          >
            GitHub Repository
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 5 }} />

      <ComponentInstallation />

      <Divider sx={{ my: 5 }} />

      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: "1.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Quick Start
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Wrap your root application in `VortexUIProvider` to enable custom
          themes, class name generator configurations, and custom Emotion
          caches.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1.5, color: "text.primary" }}
        >
          1. Wrap your application with the Provider:
        </Typography>
        <ComponentCode
          code={`import { VortexUIProvider } from 'vortex-ui';

export default function App({ children }) {
  return (
    <VortexUIProvider>
      {children}
    </VortexUIProvider>
  );
}`}
        />

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1.5, color: "text.primary" }}
        >
          2. Import and use VortexUI components:
        </Typography>
        <ComponentCode
          code={`import { Button } from 'vortex-ui';

export default function MyComponent() {
  return (
    <Button variant="filled" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  );
}`}
        />
      </Box>
    </Box>
  );
}
