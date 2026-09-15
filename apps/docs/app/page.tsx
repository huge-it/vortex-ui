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
          directly from GitHub.
        </Typography>

        {/* <Alert severity="warning" sx={{ mb: 5, borderRadius: 2 }}>
          <AlertTitle sx={{ fontWeight: 600 }}>Important</AlertTitle>
          Because you are installing directly from GitHub (instead of the NPM registry), you <strong>must</strong> make sure that the <code>dist/</code> folder is committed to your GitHub repository. When NPM installs from a git URL, it downloads the exact files that are committed to the repository.
        </Alert> */}

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
          2. Add the Repository as a Git Submodule
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          <strong>A. Add the Submodule:</strong> Bring the{" "}
          <code>vortex-ui</code> code into your project by adding it as a Git
          submodule. We recommend placing it inside an <code>external</code>{" "}
          folder:
        </Typography>
        <ComponentCode
          code={`git submodule add https://github.com/huge-it/vortex-ui.git external/vortex-fe`}
        />

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 3,
            mb: 2
          }}>
          <strong>B. Initialize and Fetch:</strong> If you are cloning a
          repository that already has the submodule configured, or just want to
          ensure it`&apos;`s fully initialized locally, run:
        </Typography>
        <ComponentCode code={`git submodule update --init --recursive`} />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          3. Configure Workspaces & Link
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          Tell your project`&apos;`s package manager to treat the submodule as a
          local package. Update your <code>package.json</code> to include the
          workspaces array:
        </Typography>
        <ComponentCode
          code={`{\n  "name": "your-project-name",\n  "workspaces": [\n    "external/vortex-fe/packages/ui"\n  ]\n}`}
        />
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 2,
            mb: 2
          }}>
          Then, run the install command to link the workspace locally:
        </Typography>
        <ComponentCode code={`npm install`} />

        <Divider sx={{ my: 4, opacity: 0.5 }} />

        <Typography
          variant="h3"
          sx={{
            color: "text.secondary",
            fontWeight: 600,
            mb: 1.5,
            fontSize: "1.5rem"
          }}>
          4. Install Required Peer Dependencies
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          <code>vortex-ui</code> relies on React and Material UI to function,
          but it does not install them automatically. You must install these
          peer dependencies directly:
        </Typography>
        <ComponentCode
          code={`npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @emotion/cache react react-dom`}
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
          5. Set up the Provider
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
          code={`import { VortexUIProvider } from "vortex-ui";\nimport "./globals.css";\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>\n        <VortexUIProvider>\n          {children}\n        </VortexUIProvider>\n      </body>\n    </html>\n  );\n}`}
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
          6. Add a Button Component
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
          code={`import { Button } from "vortex-ui";\n\nexport default function Home() {\n  return (\n    <main style={{ padding: "4rem", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>\n      <h1>Welcome to Vortex</h1>\n      \n      <Button variant="filled">\n        Click Me\n      </Button>\n    </main>\n  );\n}`}
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
          7. Run the App
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
          8. Updating Vortex-UI
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            mb: 2
          }}>
          To pull the latest updates (bug fixes, new components, etc.) from the
          repository, update your submodule to the latest commit:
        </Typography>
        <ComponentCode
          code={`git submodule update --remote external/vortex-fe`}
        />

        <Typography
          variant="body2"
          color="error"
          sx={{ mt: 2, mb: 2, fontWeight: 500 }}
        >
          ⚠️ Important: If you have modified files within the
          `external/vortex-fe` folder, Git will abort the update and throw an
          error (`error: Your local changes... would be overwritten by
          checkout`). You must commit, stash, or discard your local changes in
          that folder before you can update.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic"
          }}>
          *Note: After updating, always restart your development server. If
          changes don`&apos;`t appear, try deleting your framework`&apos;`s
          cache (like the `.next` folder).*
        </Typography>
      </Box>
    </Box>
  );
}
