"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import { ComponentCode } from "@comp/docs/ComponentCode";

export default function Page() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
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
          sx={{
            color: "text.secondary",
            fontSize: "1.25rem",
            lineHeight: 1.6,
            maxWidth: "800px",
            mb: 4
          }}>
          VORTEX is Huge IT Solution&apos;s official framework for standardizing
          code architecture, UI/UX design, development practices, and review
          protocols across all teams and projects. Every line of code follows
          scalable, reviewable, and maintainable patterns.
        </Typography>
        <Stack direction="row" sx={{
          gap: 2
        }}>
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
          variant="h2"
          sx={{
            color: "text.primary",
            fontWeight: 700,
            mb: 2,
            fontSize: "2rem",
            letterSpacing: "-0.02em"
          }}>
          VortexUI setup for Next.js
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 3
          }}>
          This guide walks you through creating a brand new Next.js application
          from scratch and installing the <code>vortex-ui</code> library
          via NPM.
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          1. Create a new Next.js App
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          First, generate a new Next.js application. Open your terminal and run:
        </Typography>
        <ComponentCode code={`npx create-next-app@latest my-vortex-app`} />
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 1,
            mb: 3,
            fontStyle: "italic"
          }}>
          *During setup, it is recommended to say <strong>Yes</strong> to
          TypeScript, ESLint, Tailwind CSS, and the App Router.*
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          Navigate into your new project:
        </Typography>
        <ComponentCode code={`cd my-vortex-app`} />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          2. Install Vortex UI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          Install the <code>@hugeit/vortex-ui</code> library via your package manager. All required styling dependencies (like Material UI and Emotion) will be automatically installed for you!
        </Typography>
        <ComponentCode
          code={`npm install @hugeit/vortex-ui`}
        />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          3. Set up the Provider
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          <code>vortex-ui</code> requires a UI provider at the root of your
          application to supply the necessary theme configuration to MUI
          components. Open <code>src/app/layout.tsx</code> and wrap the{" "}
          <code>children</code> with <code>VortexUIProvider</code>:
        </Typography>
        <ComponentCode
          code={`import { VortexUIProvider } from "@hugeit/vortex-ui";\nimport "./globals.css";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>\n        <VortexUIProvider>\n          {children}\n        </VortexUIProvider>\n      </body>\n    </html>\n  );\n}`}
        />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          4. Add a Button Component
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          Now you can import and use components anywhere in your application!
          Let`&apos;`s update the main page to show a button. Open{" "}
          <code>src/app/page.tsx</code> and replace its contents with:
        </Typography>
        <ComponentCode
          code={`import { Button } from "@hugeit/vortex-ui";\n\nexport default function Home() {\n  return (\n    <main style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>\n      <h1>Welcome to Vortex</h1>\n      \n      <Button variant="filled">\n        Click Me\n      </Button>\n    </main>\n  );\n}`}
        />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          5. Run the App
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          Start your development server to see it in action!
        </Typography>
        <ComponentCode code={`npm run dev`} />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          6. Updating Vortex-UI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          To pull the latest updates (bug fixes, new components, etc.) from the NPM registry, simply run the install command with the <code>@latest</code> tag:
        </Typography>
        <ComponentCode
          code={`npm install @hugeit/vortex-ui@latest`}
        />
        
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mt: 3
          }}>
          *Note: After updating, always restart your development server. If
          changes don`&apos;`t appear, try deleting your framework`&apos;`s
          cache (like the `.next` folder).*
        </Typography>
      </Box>
    </Box>
  );
}
