"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPage() {
  return (
    <Box
      sx={{
        // maxWidth: "800px",
        margin: "0 auto",
      }}
    >
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
        Welcome to VortexUI: Building a Better Developer Experience with NPM
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
          "& ul": {
            mb: 3,
            pl: 3,
          },
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
          "& strong": {
            fontWeight: 600,
          },
        }}
      >
        <Typography component="p">
          In the fast-paced world of frontend development, maintaining
          consistency, speed, and quality across multiple applications can be a
          daunting task. That&apos;s exactly why we built{" "}
          <strong>VortexUI</strong>.
        </Typography>

        <Typography component="p">
          In this post, we&apos;ll dive into why we created this component
          library, the benefits of using it, why we highly recommend installing
          it via NPM, and the differences between public and private NPM
          packages.
        </Typography>

        <Typography component="h2">Why We Created VortexUI</Typography>
        <Typography component="p">
          As our ecosystem of applications grew, we found ourselves copying and
          pasting the same UI components—buttons, data tables, modals, and
          navigation bars—across different repositories. This led to fragmented
          designs, inconsistent user experiences, and duplicated maintenance
          efforts. Whenever a bug was fixed in one project, we had to manually
          apply the fix to all other projects.
        </Typography>
        <Typography component="p">
          We created VortexUI to serve as our{" "}
          <strong>single source of truth</strong> for UI components. By
          centralizing our design system, we ensure that every application looks
          and feels like part of the same family, while drastically reducing
          development time for new projects.
        </Typography>

        <Typography component="h2">Uses and Pros of VortexUI</Typography>
        <Typography component="p">
          VortexUI is designed to be the foundational building block for all our
          React and Next.js applications.
        </Typography>

        <Typography component="h3">Key Uses:</Typography>
        <ul>
          <li>
            <strong>Rapid Prototyping:</strong> Quickly spin up new interfaces
            without worrying about pixel-perfect styling.
          </li>
          <li>
            <strong>Consistent Branding:</strong> Enforce brand guidelines
            automatically through a centralized theming engine.
          </li>
          <li>
            <strong>Complex Data Handling:</strong> Utilize advanced components
            like our robust <code>DataTable</code> with built-in sorting,
            filtering, and pagination.
          </li>
          <li>
            <strong>Accessible Design:</strong> Built with accessibility (a11y)
            in mind, ensuring all users can navigate our applications.
          </li>
        </ul>

        <Typography component="h3">Pros:</Typography>
        <ul>
          <li>
            <strong>Plug-and-Play Integration:</strong> Wrapping your app in{" "}
            <code>&lt;VortexUIProvider&gt;</code> is all it takes to get
            started.
          </li>
          <li>
            <strong>TypeScript Ready:</strong> First-class TypeScript support
            with pre-compiled <code>.d.ts</code> files for instant IDE
            autocompletion.
          </li>
          <li>
            <strong>Tiny Footprint:</strong> Components are optimized and
            bundled efficiently, meaning consuming apps don&apos;t get bloated.
          </li>
          <li>
            <strong>Theming Support:</strong> Built-in support for light and
            dark modes.
          </li>
        </ul>

        <Typography component="h2">
          Why We Suggest Using NPM to Install VortexUI
        </Typography>
        <Typography component="p">
          In the past, sharing code often involved complex Git submodules or
          monorepo workspace linking, which forced consuming applications to
          download raw source code, documentation, and development dependencies.
        </Typography>
        <Typography component="p">
          Moving to <strong>NPM (Node Package Manager)</strong> revolutionizes
          this workflow. Here is why we strongly advocate for NPM installation:
        </Typography>
        <ol style={{ paddingLeft: "24px", marginBottom: "24px" }}>
          <li>
            <Typography
              component="span"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              <strong>Simplicity:</strong> A single command (
              <code>npm install vortex-ui</code>) handles everything. No complex
              workspace configurations or git detached heads.
            </Typography>
          </li>
          <li>
            <Typography
              component="span"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              <strong>Compiled Distribution:</strong> NPM serves the compiled,
              minified code (<code>dist/</code> folder). You aren&apos;t
              downloading the storybooks, docs, or raw TypeScript files—just
              what your app actually needs to run.
            </Typography>
          </li>
          <li>
            <Typography
              component="span"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              <strong>Dependency Management:</strong> NPM automatically resolves
              and installs peer and nested dependencies (like{" "}
              <code>@mui/material</code> and <code>@emotion</code>).
            </Typography>
          </li>
          <li>
            <Typography
              component="span"
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "text.primary",
              }}
            >
              <strong>Semantic Versioning:</strong> Consumers can safely lock
              versions (e.g., <code>^1.2.0</code>) to receive bug fixes without
              unexpected breaking changes.
            </Typography>
          </li>
        </ol>



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
