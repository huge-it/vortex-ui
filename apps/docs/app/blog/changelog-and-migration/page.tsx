"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CodeBlock } from "../../../components/CodeBlock";

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
        Changelog & Migration Guides: Communicating Changes to Your Users
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
          A component library is only as trustworthy as its communication.
          When you publish a new version of your package, consumers need to
          know: <em>What changed? Will it break my code? How do I upgrade?</em>{" "}
          This is where changelogs and migration guides become essential.
        </Typography>

        {/* ─── WHY CHANGELOGS MATTER ───────────────────────────── */}
        <Typography component="h2">Why Changelogs Matter</Typography>
        <Typography component="p">
          Without a changelog, developers are forced to read through git
          commits, diff source files, or worse — discover breaking changes only
          after they deploy. A good changelog:
        </Typography>
        <ul>
          <li>
            Builds <strong>trust</strong> — shows your package is actively
            maintained.
          </li>
          <li>
            Reduces <strong>support burden</strong> — users can self-serve
            instead of filing issues.
          </li>
          <li>
            Enables <strong>informed upgrades</strong> — teams can decide when
            to adopt a new version.
          </li>
          <li>
            Provides <strong>audit trails</strong> — critical for enterprise
            environments that require change documentation.
          </li>
        </ul>

        {/* ─── KEEP A CHANGELOG FORMAT ─────────────────────────── */}
        <Typography component="h2">
          The &quot;Keep a Changelog&quot; Format
        </Typography>
        <Typography component="p">
          We follow the{" "}
          <a
            href="https://keepachangelog.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            Keep a Changelog
          </a>{" "}
          standard — a widely adopted format that organizes changes into
          human-readable categories. Here is what a real VortexUI changelog
          entry would look like:
        </Typography>
        <CodeBlock title="CHANGELOG.md — Example">
{`# Changelog

All notable changes to VortexUI will be documented in this file.

## [0.2.0] - 2026-10-15

### Added
- FilterButton component with multi-select support.
- DateRange Picker with preset range options.
- New \`variant="outlined"\` option for all button components.

### Changed
- DataTable now uses virtualized scrolling for large datasets.
- Updated MUI dependency from v5 to v6.

### Fixed
- Button ripple effect not working in dark mode.
- TextField label overlap when using \`defaultValue\`.

### Deprecated
- \`<LegacySelect />\` component — use \`<Select />\` instead.
  Will be removed in v1.0.0.

### Breaking
- Renamed \`onSelectionChange\` prop to \`onChange\` in Select.
- Minimum React version bumped from 18 to 19.

## [0.1.21] - 2026-09-26

### Fixed
- Package publishing configuration cleanup.
- Corrected TypeScript declaration file paths.`}
        </CodeBlock>

        <Typography component="h3">Category Definitions</Typography>
        <ul>
          <li>
            <strong>Added</strong> — brand new features or components that
            didn&apos;t exist before.
          </li>
          <li>
            <strong>Changed</strong> — modifications to existing behavior or
            API. Non-breaking changes.
          </li>
          <li>
            <strong>Fixed</strong> — bug fixes.
          </li>
          <li>
            <strong>Deprecated</strong> — features that still work but will be
            removed in a future major version.
          </li>
          <li>
            <strong>Removed</strong> — features that were previously deprecated
            and are now gone.
          </li>
          <li>
            <strong>Security</strong> — fixes for security vulnerabilities.
          </li>
          <li>
            <strong>Breaking</strong> — anything that requires the consumer to
            change their code.
          </li>
        </ul>

        {/* ─── WRITING MIGRATION GUIDES ────────────────────────── */}
        <Typography component="h2">Writing Migration Guides</Typography>
        <Typography component="p">
          A changelog tells users <em>what</em> changed. A migration guide
          tells them <em>how to update their code</em>. You should write a
          migration guide for every major version bump or any release with
          breaking changes.
        </Typography>

        <Typography component="h3">Structure of a Migration Guide</Typography>
        <Typography component="p">
          A good migration guide follows this pattern for each breaking change:
        </Typography>
        <ol>
          <li>
            <strong>What changed</strong> — a brief description.
          </li>
          <li>
            <strong>Why</strong> — the reasoning behind the change.
          </li>
          <li>
            <strong>Before</strong> — code example of the old usage.
          </li>
          <li>
            <strong>After</strong> — code example of the new usage.
          </li>
          <li>
            <strong>Codemod / Find-Replace</strong> — if possible, a regex or
            automated script to help.
          </li>
        </ol>

        <Typography component="h3">Example: VortexUI v0.x → v1.0</Typography>
        <CodeBlock title="MIGRATION-GUIDE.md — Example">
{`# Migration Guide: VortexUI v0.x → v1.0

## Select: onSelectionChange → onChange

**What changed:** The \`onSelectionChange\` prop on \`<Select />\`
has been renamed to \`onChange\` for consistency with MUI.

**Before (v0.x):**
\`\`\`tsx
<Select onSelectionChange={(val) => setValue(val)} />
\`\`\`

**After (v1.0):**
\`\`\`tsx
<Select onChange={(val) => setValue(val)} />
\`\`\`

**Find & Replace:**
Search:  onSelectionChange=
Replace: onChange=

---

## Minimum React Version: 18 → 19

**What changed:** VortexUI v1.0 requires React 19+.

**Why:** We adopted React 19 features like \`use()\` and
improved server component support.

**Action:** Update your project's React version:
\`\`\`bash
npm install react@^19.0.0 react-dom@^19.0.0
\`\`\`

---

## LegacySelect Removed

**What changed:** \`<LegacySelect />\` has been removed.
It was deprecated in v0.2.0.

**Action:** Replace all usages with \`<Select />\`.
The API is identical.`}
        </CodeBlock>

        {/* ─── BEST PRACTICES ──────────────────────────────────── */}
        <Typography component="h2">Best Practices</Typography>

        <Typography component="h3">
          1. Update the Changelog With Every PR
        </Typography>
        <Typography component="p">
          Don&apos;t wait until release day to write the changelog. Add an entry
          under an <code>[Unreleased]</code> section in every pull request.
          At release time, rename <code>[Unreleased]</code> to the version
          number and date.
        </Typography>

        <Typography component="h3">
          2. Use Semantic Versioning Consistently
        </Typography>
        <Typography component="p">
          If there are breaking changes → bump <strong>major</strong>. New
          features → bump <strong>minor</strong>. Bug fixes only → bump{" "}
          <strong>patch</strong>. This lets consumers use version ranges like{" "}
          <code>^1.0.0</code> with confidence.
        </Typography>

        <Typography component="h3">
          3. Deprecate Before Removing
        </Typography>
        <Typography component="p">
          Never remove a feature without deprecating it first. The lifecycle
          should be:
        </Typography>
        <ol>
          <li>
            <strong>v1.2.0</strong> — Mark <code>&lt;OldComponent /&gt;</code>{" "}
            as deprecated with a console warning.
          </li>
          <li>
            <strong>v1.x</strong> — Keep it working for at least one minor
            release cycle.
          </li>
          <li>
            <strong>v2.0.0</strong> — Remove it, documented in the migration
            guide.
          </li>
        </ol>

        <Typography component="h3">
          4. Link the Migration Guide From package.json
        </Typography>
        <Typography component="p">
          npm displays the README on the package page. Include a prominent
          &quot;Upgrading?&quot; section at the top of your README with a link
          to the migration guide for the latest major version.
        </Typography>

        <Typography component="h3">
          5. Use GitHub Releases
        </Typography>
        <Typography component="p">
          In addition to <code>CHANGELOG.md</code>, create a GitHub Release for
          each published version. GitHub Releases support markdown, file
          attachments, and notifications — making it easy for watchers to stay
          informed.
        </Typography>

        {/* ─── TEMPLATE ────────────────────────────────────────── */}
        <Typography component="h2">
          CHANGELOG.md Starter Template
        </Typography>
        <Typography component="p">
          Copy this template into the root of your repository to get started:
        </Typography>
        <CodeBlock title="CHANGELOG.md — Starter Template">
{`# Changelog

All notable changes to this project will be documented
in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
-

### Changed
-

### Fixed
-

## [0.1.0] - YYYY-MM-DD

### Added
- Initial release with core components.`}
        </CodeBlock>

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
