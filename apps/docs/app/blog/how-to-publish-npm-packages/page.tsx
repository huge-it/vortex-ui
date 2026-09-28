"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPage() {
  const codeBlockSx = {
    backgroundColor: "background.default",
    p: 2,
    borderRadius: 1,
    mb: 3,
    fontFamily: "monospace",
    color: "primary.main",
    fontSize: "0.9rem",
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Button
        component={Link}
        href="/blog"
        variant="text"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4, color: "text.secondary" }}
      >
        Back to Blog
      </Button>

      <Typography
        variant="h1"
        sx={{
          color: "text.primary",
          fontWeight: 800,
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          lineHeight: 1.2,
        }}
      >
        Setting Up, Structuring & Publishing Your NPM Package
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: "text.secondary", mb: 4, fontWeight: 500 }}
      >
        September 26, 2026
      </Typography>

      <Divider sx={{ mb: 6 }} />

      <Box
        sx={{
          "& h2": {
            fontSize: "1.75rem",
            fontWeight: 700,
            mt: 6,
            mb: 2,
            color: "text.primary",
          },
          "& h3": {
            fontSize: "1.25rem",
            fontWeight: 600,
            mt: 4,
            mb: 2,
            color: "text.primary",
          },
          "& p": {
            fontSize: "1.05rem",
            lineHeight: 1.7,
            mb: 3,
            color: "text.primary",
          },
          "& ul, & ol": { mb: 3, pl: 3 },
          "& li": {
            fontSize: "1.05rem",
            lineHeight: 1.7,
            mb: 1,
            color: "text.primary",
          },
          "& code": {
            backgroundColor: "background.default",
            padding: "2px 6px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "0.9em",
            color: "primary.main",
          },
        }}
      >
        {/* ─── FOLDER STRUCTURE ────────────────────────────────── */}
        <Typography component="h2">
          The Vortex Monorepo Folder Structure
        </Typography>
        <Typography component="p">
          Vortex is built as a monorepo workspace, allowing us to maintain both
          the UI component library and the documentation site in a single
          repository. This streamlines development, testing, and publishing.
        </Typography>

        <Typography component="h3">High-Level Structure</Typography>
        <Box
          sx={{
            backgroundColor: "background.default",
            p: 3,
            borderRadius: 2,
            overflowX: "auto",
            mb: 3,
            fontFamily: "monospace",
            fontSize: "0.9rem",
            color: "primary.main",
            lineHeight: 1.8,
          }}
        >
          <pre style={{ margin: 0 }}>
            {`vortex-fe/
├── apps/
│   └── docs/            # Next.js Documentation & Blog Site
│       ├── app/         # Next.js App Router pages
│       ├── components/  # Shared layout components (Header, Sidebar...)
│       └── public/      # Static assets
├── packages/
│   └── ui/              # React Component Library (VortexUI)
│       ├── src/         # Component source files (TypeScript + React)
│       ├── dist/        # Compiled output (published to NPM)
│       └── package.json # Package config with "name", "version", "main"
├── package.json         # Root workspace config
└── turbo.json           # Turborepo pipeline config`}
          </pre>
        </Box>

        <Typography component="h3">
          The Docs Application (apps/docs)
        </Typography>
        <Typography component="p">
          This is a Next.js App Router application serving both the official
          VortexUI documentation and this blog. During development, it consumes
          the local <code>vortex-ui</code> package so changes to components are
          instantly reflected without a publish step.
        </Typography>

        <Typography component="h3">The UI Package (packages/ui)</Typography>
        <Typography component="p">
          This is where the components live. Written in TypeScript, they are
          compiled by tsup into the <code>dist/</code> folder — this is what
          gets published to NPM. The <code>dist/</code> contains only the
          optimized JS bundles and <code>.d.ts</code> type definitions, keeping
          installs lean.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* ─── BEFORE PUBLICATION ──────────────────────────────── */}
        <Typography component="h2">✅ Before Publication</Typography>

        <Typography component="h3">1. Verify package.json</Typography>
        <Typography component="p">
          Here is what the VortexUI <code>package.json</code> looks like — every
          field matters:
        </Typography>
        <Box
          sx={{
            backgroundColor: "background.default",
            p: 3,
            borderRadius: 2,
            overflowX: "auto",
            mb: 3,
            fontFamily: "monospace",
            fontSize: "0.85rem",
            color: "primary.main",
            lineHeight: 1.8,
          }}
        >
          <pre style={{ margin: 0 }}>
            {`{
  "name": "vortex-ui",
  "version": "0.1.20",
  "description": "VortexUI component library",
  "author": "Manoj Murali",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/murali-dev/vortex-fe.git"
  },
  "keywords": ["react", "ui", "components", "vortex"],
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
    }
  },
  "files": ["dist", "package.json"],
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": ">=14.0.0"
  }
}`}
          </pre>
        </Box>
        <Typography component="p">Key fields to double-check:</Typography>
        <ul>
          <li>
            <strong>name</strong> — unique on the registry. Run{" "}
            <code>npm search vortex-ui</code> to verify.
          </li>
          <li>
            <strong>version</strong> — must be a valid semver not yet published.
            npm rejects duplicate versions.
          </li>
          <li>
            <strong>main / module / types</strong> — point to compiled output.{" "}
            <code>main</code> for CJS, <code>module</code> for ESM,{" "}
            <code>types</code> for TypeScript.
          </li>
          <li>
            <strong>exports</strong> — the modern way to declare entry points.
            Supports conditional imports (CJS vs ESM).
          </li>
          <li>
            <strong>files</strong> — whitelist of what gets published. Only{" "}
            <code>dist/</code> and <code>package.json</code> — no source code,
            no storybooks, no docs.
          </li>
          <li>
            <strong>peerDependencies</strong> — declares what the consuming app
            must provide (React, ReactDOM, Next.js).
          </li>
          <li>
            <strong>license</strong> — <code>&quot;MIT&quot;</code> for open
            source. Include a <code>LICENSE</code> file in the repo root.
          </li>
          <li>
            <strong>keywords</strong> — helps discoverability on npmjs.com.
          </li>
          <li>
            <strong>repository</strong> — links to source code on the npm
            package page.
          </li>
        </ul>

        <Typography component="h3">2. Ensure a Clean Build</Typography>
        <Box sx={codeBlockSx}>
          <div>npm run build</div>
        </Box>
        <Typography component="p">
          Verify that <code>dist/</code> contains the expected output:{" "}
          <code>index.js</code>, <code>index.mjs</code>,{" "}
          <code>index.d.ts</code>, and any CSS/asset files.
        </Typography>

        <Typography component="h3">
          3. Run Linting &amp; Type Checks
        </Typography>
        <Box sx={codeBlockSx}>
          <div>npm run lint</div>
          <div>npx tsc --noEmit</div>
        </Box>
        <Typography component="p">
          Never publish with lint errors or TypeScript compilation failures.
          Consumers who use strict mode will surface issues you missed.
        </Typography>

        <Typography component="h3">
          4. Preview What Gets Published
        </Typography>
        <Box sx={codeBlockSx}>
          <div>npm pack --dry-run</div>
        </Box>
        <Typography component="p">
          This lists every file that would end up in the published tarball.
          Check for accidental inclusion of <code>.env</code>, test files,
          storybook configs, or <code>node_modules</code>. If something
          unexpected appears, update your <code>files</code> array or add an{" "}
          <code>.npmignore</code>.
        </Typography>

        <Typography component="h3">
          5. Test Locally Before Publishing
        </Typography>
        <Box sx={codeBlockSx}>
          <div># From your UI package folder:</div>
          <div>npm pack</div>
          <div>&nbsp;</div>
          <div># From a test project:</div>
          <div>npm install ../packages/ui/vortex-ui-0.1.20.tgz</div>
        </Box>
        <Typography component="p">
          This simulates a real npm install using the packed tarball. Verify that
          your components import correctly, types resolve, and theming works.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* ─── DURING PUBLICATION ──────────────────────────────── */}
        <Typography component="h2">🚀 During Publication</Typography>

        <Typography component="h3">1. Log In to npm</Typography>
        <Box sx={codeBlockSx}>
          <div>npm login</div>
          <div>npm whoami   # verify you are logged in</div>
        </Box>

        <Typography component="h3">2. Bump the Version</Typography>
        <Box sx={codeBlockSx}>
          <div>npm version patch   # 0.1.20 → 0.1.21 (bug fix)</div>
          <div>npm version minor   # 0.1.20 → 0.2.0  (new feature)</div>
          <div>npm version major   # 0.1.20 → 1.0.0  (breaking change)</div>
        </Box>
        <Typography component="p">
          This updates <code>package.json</code> and creates a git tag
          automatically. Always commit all changes before running this.
        </Typography>

        <Typography component="h3">3. Publish</Typography>
        <Box sx={codeBlockSx}>
          <div># Unscoped public package (VortexUI):</div>
          <div>npm publish</div>
          <div>&nbsp;</div>
          <div># Scoped package that should be public:</div>
          <div>npm publish --access public</div>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* ─── AFTER PUBLICATION ───────────────────────────────── */}
        <Typography component="h2">📋 After Publication</Typography>

        <Typography component="h3">1. Verify on the Registry</Typography>
        <Typography component="p">
          Visit your package page at{" "}
          <a
            href="https://www.npmjs.com/package/vortex-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            npmjs.com/package/vortex-ui
          </a>{" "}
          and confirm:
        </Typography>
        <ul>
          <li>Version number is correct.</li>
          <li>README is rendered properly.</li>
          <li>License, repository link, and keywords are displayed.</li>
          <li>File count and package size look reasonable.</li>
        </ul>

        <Typography component="h3">
          2. Install Test in a Fresh Project
        </Typography>
        <Box sx={codeBlockSx}>
          <div>mkdir test-install &amp;&amp; cd test-install</div>
          <div>npm init -y</div>
          <div>npm install vortex-ui@latest</div>
        </Box>
        <Typography component="p">
          Ensure the package resolves, installs peer dependencies correctly, and
          components render as expected.
        </Typography>

        <Typography component="h3">3. Update Consuming Apps</Typography>
        <Typography component="p">
          In any project that depends on <code>vortex-ui</code>, run:
        </Typography>
        <Box sx={codeBlockSx}>
          <div>npm update vortex-ui</div>
        </Box>

        <Typography component="h3">4. Tag the Release in Git</Typography>
        <Box sx={codeBlockSx}>
          <div>git push origin main --tags</div>
        </Box>
        <Typography component="p">
          Push both the commit and the version tag so your team and CI can track
          exactly which commit corresponds to which published version.
        </Typography>

        <Typography component="h3">
          5. Write a Changelog / Release Notes
        </Typography>
        <Typography component="p">
          Document what changed in this release. A good changelog entry
          includes:
        </Typography>
        <ul>
          <li>
            <strong>Added</strong> — new components or features.
          </li>
          <li>
            <strong>Changed</strong> — modifications to existing components.
          </li>
          <li>
            <strong>Fixed</strong> — bug fixes.
          </li>
          <li>
            <strong>Deprecated</strong> — features that will be removed in the
            future.
          </li>
          <li>
            <strong>Breaking</strong> — anything that requires consumer code
            changes.
          </li>
        </ul>

        <Divider sx={{ my: 6 }} />
        <Typography
          component="p"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Thank you for reading! For more, visit our{" "}
          <a
            href="https://github.com/murali-dev/vortex-fe"
            style={{ color: "inherit" }}
          >
            official repository
          </a>
          .
        </Typography>
      </Box>
    </Box>
  );
}
