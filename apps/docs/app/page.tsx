"use client";

import React from "react";
import {
  Typography,
  Box,
  Divider,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { ComponentCode } from "../components/docs/ComponentCode";
import Link from "next/link";
import { Button } from "vortex-ui";

export default function Page() {
  return (
    <Box>
      {/* Hero Section */}
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
          VORTEX
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.secondary", mb: 2 }}
        >
          Visual & Operational Rules for Technical EXecution
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
          VORTEX is Huge IT Solution&apos;s official framework for standardizing
          code architecture, UI/UX design, development practices, and review
          protocols across all teams and projects. Every line of code follows
          scalable, reviewable, and maintainable patterns.
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
            href="https://github.com/huge-it/vortex-ui"
            target="_blank"
          >
            GitHub Repository
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Setup Guide */}
      <Box sx={{ mb: 6 }}>
        <Typography
          color="text.primary"
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: "2rem",
            letterSpacing: "-0.02em",
          }}
        >
          Vortex UI setup for Next.js
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          This guide walks you through creating a brand new Next.js application
          from scratch and installing the <code>vortex-ui</code> library
          directly from GitHub.
        </Typography>

        {/* <Alert severity="warning" sx={{ mb: 5, borderRadius: 2 }}>
          <AlertTitle sx={{ fontWeight: 600 }}>Important</AlertTitle>
          Because you are installing directly from GitHub (instead of the NPM registry), you <strong>must</strong> make sure that the <code>dist/</code> folder is committed to your GitHub repository. When NPM installs from a git URL, it downloads the exact files that are committed to the repository.
        </Alert> */}

        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.5rem" }}
        >
          1. Create a new Next.js App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          First, generate a new Next.js application. Open your terminal and run:
        </Typography>
        <ComponentCode code={`npx create-next-app@latest my-vortex-app`} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 3, fontStyle: "italic" }}
        >
          *During setup, it is recommended to say <strong>Yes</strong> to
          TypeScript, ESLint, Tailwind CSS, and the App Router.*
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Navigate into your new project:
        </Typography>
        <ComponentCode code={`cd my-vortex-app`} />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.5rem" }}
        >
          2. Install Vortex UI via GitHub
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Since the package is not published to <code>npmjs.com</code>, you can
          install it directly from your GitHub repository. You must also install
          the required peer dependencies for MUI and Emotion.
        </Typography>
        <ComponentCode
          code={`# Using npm\nnpm install github:huge-it/vortex-ui @mui/material @emotion/react @emotion/styled\n\n# Using pnpm\npnpm add github:huge-it/vortex-ui @mui/material @emotion/react @emotion/styled`}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1, mb: 2, fontStyle: "italic" }}
        >
          *(Note: If your UI package is located in a specific subdirectory
          within a monorepo, npm supports installing from a subdirectory like
          this:{" "}
          <code>
            npm install
            git+https://github.com/huge-it/vortex-ui.git#main:packages/ui
          </code>
          )*
        </Typography>

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.5rem" }}
        >
          3. Set up the Provider
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          <code>vortex-ui</code> requires a UI provider at the root of your
          application to supply the necessary theme configuration to MUI
          components. Open <code>src/app/layout.tsx</code> and wrap the{" "}
          <code>children</code> with <code>VortexUIProvider</code>:
        </Typography>
        <ComponentCode
          code={`import { VortexUIProvider } from "vortex-ui";\nimport "./globals.css";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>\n        <VortexUIProvider>\n          {children}\n        </VortexUIProvider>\n      </body>\n    </html>\n  );\n}`}
        />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.5rem" }}
        >
          4. Add a Button Component
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Now you can import and use components anywhere in your application!
          Let`&apos;`s update the main page to show a button. Open{" "}
          <code>src/app/page.tsx</code> and replace its contents with:
        </Typography>
        <ComponentCode
          code={`"use client";\nimport { Button } from "vortex-ui";\n\nexport default function Home() {\n  return (\n    <main style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>\n      <h1>Welcome to Vortex</h1>\n      \n      <Button \n        variant="filled" \n        onClick={() => alert("Vortex Button Clicked!")}\n      >\n        Click Me\n      </Button>\n    </main>\n  );\n}`}
        />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.5rem" }}
        >
          5. Run the App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Start your development server to see it in action!
        </Typography>
        <ComponentCode code={`npm run dev`} />
      </Box>
    </Box>
  );
}
