"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPage() {
  const codeBlockSx = {
    backgroundColor: "background.default",
    p: 3,
    borderRadius: 2,
    overflowX: "auto",
    mb: 3,
    fontFamily: "monospace",
    fontSize: "0.85rem",
    color: "primary.main",
    lineHeight: 1.8,
  };

  const tableBoxSx = {
    overflowX: "auto",
    mb: 3,
    "& table": {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "0.95rem",
    },
    "& th": {
      backgroundColor: "action.hover",
      fontWeight: 700,
      padding: "10px 14px",
      textAlign: "left",
      border: "1px solid",
      borderColor: "divider",
      color: "text.primary",
    },
    "& td": {
      padding: "10px 14px",
      border: "1px solid",
      borderColor: "divider",
      color: "text.primary",
      verticalAlign: "top",
      lineHeight: 1.6,
    },
    "& tr:nth-of-type(even) td": {
      backgroundColor: "action.hover",
    },
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
        peerDependencies vs dependencies: What Every Package Author Must Know
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
        <Typography component="p">
          When building a UI component library like VortexUI, one of the most
          critical — and commonly misunderstood — decisions is where to list
          each dependency. Getting it wrong can cause duplicate React instances,
          bloated bundles, or mysterious runtime errors in consuming apps.
        </Typography>

        {/* ─── THE THREE TYPES ──────────────────────────────────── */}
        <Typography component="h2">
          The Three Types of Dependencies
        </Typography>

        <Box sx={tableBoxSx}>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Installed When?</th>
                <th>Who Provides It?</th>
                <th>Use For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>dependencies</strong></td>
                <td>
                  Always — both in your project and when a consumer installs
                  your package.
                </td>
                <td>Your package bundles or pulls it in automatically.</td>
                <td>
                  Runtime libraries your code directly needs (e.g.,{" "}
                  <code>dayjs</code>, <code>@emotion/react</code>).
                </td>
              </tr>
              <tr>
                <td><strong>devDependencies</strong></td>
                <td>
                  Only during development of <em>your</em> package. Never
                  installed for consumers.
                </td>
                <td>Only you, during development.</td>
                <td>
                  Build tools, linters, test frameworks, Storybook (e.g.,{" "}
                  <code>tsup</code>, <code>typescript</code>,{" "}
                  <code>storybook</code>).
                </td>
              </tr>
              <tr>
                <td><strong>peerDependencies</strong></td>
                <td>
                  <strong>Not</strong> automatically installed. The consumer
                  must provide them.
                </td>
                <td>The consuming application.</td>
                <td>
                  Shared singletons that must exist only once (e.g.,{" "}
                  <code>react</code>, <code>react-dom</code>,{" "}
                  <code>next</code>).
                </td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* ─── WHY PEERS MATTER ────────────────────────────────── */}
        <Typography component="h2">
          Why peerDependencies Exist
        </Typography>
        <Typography component="p">
          Imagine if VortexUI listed <code>react</code> as a regular{" "}
          <code>dependency</code>. When a consumer installs VortexUI, npm would
          install a <strong>second copy</strong> of React inside{" "}
          <code>node_modules/vortex-ui/node_modules/react</code>. This causes:
        </Typography>
        <ul>
          <li>
            <strong>Duplicate React instances</strong> — hooks like{" "}
            <code>useState</code> break because they reference a different React
            copy than the one your app uses.
          </li>
          <li>
            <strong>Bloated bundle size</strong> — React gets bundled twice,
            adding ~40 KB gzipped for no reason.
          </li>
          <li>
            <strong>Context mismatches</strong> — providers and consumers of
            React Context won&apos;t communicate if they&apos;re on different
            React instances.
          </li>
        </ul>
        <Typography component="p">
          By declaring <code>react</code> as a <strong>peerDependency</strong>,
          you are saying: &quot;I need React to work, but I expect{" "}
          <em>your app</em> to provide it. Don&apos;t install a separate
          copy.&quot;
        </Typography>

        {/* ─── VORTEXUI EXAMPLE ────────────────────────────────── */}
        <Typography component="h2">
          How VortexUI Uses Each Type
        </Typography>
        <Typography component="p">
          Here is exactly how our <code>package.json</code> is configured and
          why:
        </Typography>

        <Typography component="h3">peerDependencies</Typography>
        <Box sx={codeBlockSx}>
          <pre style={{ margin: 0 }}>
            {`"peerDependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": ">=14.0.0"
}`}
          </pre>
        </Box>
        <Typography component="p">
          These are frameworks and libraries that the consuming application
          already has. We declare the minimum versions we support. The consumer
          provides these — VortexUI never bundles them.
        </Typography>

        <Typography component="h3">dependencies</Typography>
        <Box sx={codeBlockSx}>
          <pre style={{ margin: 0 }}>
            {`"dependencies": {
  "dayjs": "^1.11.23",
  "@emotion/cache": "^11.11.0",
  "@emotion/react": "^11.0.0",
  "@emotion/styled": "^11.0.0",
  "@mui/icons-material": "^6.0.0",
  "@mui/material": "^6.0.0",
  "@mui/material-nextjs": "^6.0.0"
}`}
          </pre>
        </Box>
        <Typography component="p">
          These are libraries that VortexUI <strong>requires at runtime</strong>{" "}
          and the consumer may or may not already have. npm will install them
          automatically when someone runs <code>npm install vortex-ui</code>.
        </Typography>

        <Typography component="h3">devDependencies</Typography>
        <Box sx={codeBlockSx}>
          <pre style={{ margin: 0 }}>
            {`"devDependencies": {
  "tsup": "^8.0.2",
  "typescript": "^5.0.0",
  "storybook": "^10.5.10",
  "@storybook/react": "^10.5.10",
  "@storybook/react-vite": "^10.5.10",
  "@types/react": "^19.0.0",
  "@types/react-dom": "^19.0.0"
}`}
          </pre>
        </Box>
        <Typography component="p">
          These are only needed when developing VortexUI itself. They are{" "}
          <strong>never installed</strong> by consumers and never included in
          the published package.
        </Typography>

        {/* ─── COMMON MISTAKES ─────────────────────────────────── */}
        <Typography component="h2">Common Mistakes to Avoid</Typography>

        <Typography component="h3">
          ❌ Putting React in dependencies
        </Typography>
        <Typography component="p">
          This causes duplicate React instances. Always use{" "}
          <code>peerDependencies</code> for React, ReactDOM, and Next.js.
        </Typography>

        <Typography component="h3">
          ❌ Putting build tools in dependencies
        </Typography>
        <Typography component="p">
          <code>tsup</code>, <code>typescript</code>, and{" "}
          <code>storybook</code> should never be in <code>dependencies</code>.
          They would be installed on every consumer&apos;s machine for no
          reason. Use <code>devDependencies</code>.
        </Typography>

        <Typography component="h3">
          ❌ Forgetting to list a peer dependency
        </Typography>
        <Typography component="p">
          If your components use <code>next/link</code> internally but you
          don&apos;t declare <code>next</code> as a peer, consumers without
          Next.js get confusing &quot;module not found&quot; errors.
        </Typography>

        <Typography component="h3">
          ❌ Using exact versions in peerDependencies
        </Typography>
        <Typography component="p">
          Don&apos;t use <code>&quot;react&quot;: &quot;19.0.0&quot;</code> — use a range
          like <code>^19.0.0</code> or <code>&gt;=18.0.0</code> so consumers
          aren&apos;t locked to a single patch version.
        </Typography>

        {/* ─── --legacy-peer-deps ───────────────────────────────── */}
        <Typography component="h2">
          The <code>--legacy-peer-deps</code> Problem
        </Typography>
        <Typography component="p">
          Starting with npm v7, npm strictly enforces peer dependency
          compatibility. If a consumer&apos;s React version doesn&apos;t match
          your declared range, <code>npm install</code> will <strong>fail</strong>{" "}
          with a peer dependency conflict error.
        </Typography>
        <Typography component="p">
          Users often work around this with:
        </Typography>
        <Box
          sx={{
            backgroundColor: "background.default",
            p: 2,
            borderRadius: 1,
            mb: 3,
            fontFamily: "monospace",
            color: "primary.main",
          }}
        >
          <div>npm install vortex-ui --legacy-peer-deps</div>
        </Box>
        <Typography component="p">
          This flag tells npm to ignore peer dependency checks — reverting to
          the old npm v6 behavior. While it works, it can lead to runtime bugs
          if versions are truly incompatible.{" "}
          <strong>
            As a package author, you should set wide enough peer ranges to
            minimize this issue.
          </strong>
        </Typography>

        {/* ─── DECISION FLOWCHART ──────────────────────────────── */}
        <Typography component="h2">Quick Decision Guide</Typography>
        <Typography component="p">
          When adding a new dependency to your component library, ask:
        </Typography>
        <ol>
          <li>
            <strong>Is it React, ReactDOM, or the host framework?</strong> →{" "}
            <code>peerDependencies</code>
          </li>
          <li>
            <strong>
              Is it only needed to build, test, or develop the library?
            </strong>{" "}
            → <code>devDependencies</code>
          </li>
          <li>
            <strong>
              Is it a runtime library the consumer may not have?
            </strong>{" "}
            → <code>dependencies</code>
          </li>
          <li>
            <strong>
              Could having two copies cause problems (singletons, context)?
            </strong>{" "}
            → <code>peerDependencies</code>
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
