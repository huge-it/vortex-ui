"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPage() {
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
        Understanding the Vortex Monorepo Folder Structure
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
          "& p": {
            fontSize: "1.05rem",
            lineHeight: 1.7,
            mb: 3,
            color: "text.primary",
          },
          "& pre": {
            backgroundColor: "background.default",
            p: 3,
            borderRadius: 2,
            overflowX: "auto",
            mb: 3,
            color: "primary.main",
            fontFamily: "monospace",
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
        <Typography component="p">
          Vortex is built as a monorepo workspace. This allows us to maintain both
          our UI component library and our documentation site in a single
          repository, streamlining development and testing.
        </Typography>

        <Typography component="h2">High-Level Structure</Typography>
        <pre>
{`vortex-fe/
├── apps/
│   └── docs/            # Next.js Documentation Site
├── packages/
│   └── ui/              # React Component Library (VortexUI)
├── package.json         # Root workspace config
└── turbo.json           # Turborepo config`}
        </pre>

        <Typography component="h2">The Docs Application (apps/docs)</Typography>
        <Typography component="p">
          This is a Next.js App Router application. It serves as the official
          documentation for VortexUI, as well as our blog. It consumes the local
          <code>@murali-dev/vortex-ui</code> package during development, ensuring
          that changes to the UI library are instantly reflected in the docs.
        </Typography>

        <Typography component="h2">The UI Package (packages/ui)</Typography>
        <Typography component="p">
          This is where the magic happens. The <code>ui</code> folder contains the
          raw React components, written in TypeScript. When we run the build
          command, Vite compiles these components into highly optimized bundles
          in the <code>dist/</code> folder, ready to be published to NPM.
        </Typography>

        <Divider sx={{ my: 6 }} />
        <Typography
          component="p"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          Thank you for reading! For more information and documentation, visit
          our{" "}
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
