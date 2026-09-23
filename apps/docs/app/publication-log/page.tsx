"use client";
import { InlineCode } from "@comp/docs/InlineCode";

import { Box, Divider, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import { ComponentCode } from "@comp/docs/ComponentCode";

export default function PublicationLogPage() {
  return (
    <Box sx={{ maxWidth: "900px", margin: "0 auto", py: 4 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
        <Box>
          <Typography variant="h3" sx={{ color: "text.primary", fontWeight: 800, mb: 1, letterSpacing: "-0.02em" }}>
            NPM Publishing Guide
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Architecture shift from Git Submodules to NPM, and how to publish updates.
          </Typography>
        </Box>
        <Button variant="outlined" component={Link} href="/changelog">
          Back to Changelog
        </Button>
      </Stack>

      <Divider sx={{ mb: 6 }} />

      <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 600, mb: 2 }}>
        1. Why We Moved from Git Submodules to NPM
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}>
        Initially, <InlineCode>vortex-ui</InlineCode> was consumed by adding the entire <InlineCode>vortex-fe</InlineCode> repository as a Git submodule inside consuming applications. While this allowed for rapid prototyping, it presented significant scalability and performance issues. Moving to NPM standardizes the installation process, reduces the footprint in consuming applications, and adheres to modern JavaScript ecosystem best practices.
      </Typography>

      <Typography variant="h5" sx={{ color: "text.primary", fontWeight: 600, mt: 4, mb: 1.5 }}>
        The Problem with Git Submodules
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 2, lineHeight: 1.7 }}>
        When using a Git submodule, consuming projects are forced to clone the entire <InlineCode>vortex-fe</InlineCode> monorepo. This means consumers download the documentation site, storybooks, raw TypeScript files, and all development dependencies. This bloats the consuming repository and requires complex Workspace configurations (<InlineCode>pnpm-workspace.yaml</InlineCode>) just to link the UI package.
      </Typography>

      <Typography variant="h5" sx={{ color: "text.primary", fontWeight: 600, mt: 4, mb: 1.5 }}>
        The NPM Solution
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.7 }}>
        By compiling the package with <InlineCode>tsup</InlineCode> and publishing it to NPM, consumers only download the compiled distribution files (<InlineCode>dist/index.js</InlineCode>, <InlineCode>dist/index.d.ts</InlineCode>). They do not clone the repo, they do not need workspaces, and they can install it via a single command: <InlineCode>npm install @hugeit/vortex-ui</InlineCode>.
      </Typography>

      <Divider sx={{ mb: 6, opacity: 0.5 }} />

      <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 600, mb: 3 }}>
        2. Pros and Cons Comparison
      </Typography>

      <Typography variant="h5" sx={{ color: "text.primary", fontWeight: 600, mb: 2 }}>
        NPM Registry Publication (Current Strategy)
      </Typography>
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 5, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: "background.default" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, width: "50%" }}>Pros</TableCell>
              <TableCell sx={{ fontWeight: 600, width: "50%" }}>Cons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Plug-and-Play:</strong> Consumers just run <InlineCode>npm install @hugeit/vortex-ui</InlineCode>. No complex workspace configurations required.</TableCell>
              <TableCell><strong>Publishing Overhead:</strong> Maintainers must remember to bump the version and run the build/publish commands.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Tiny Footprint:</strong> Only the minified, compiled code (<InlineCode>dist/</InlineCode>) is downloaded, drastically reducing node_modules size.</TableCell>
              <TableCell><strong>Slower Local Dev:</strong> Testing changes across multiple repositories requires npm link or publishing beta versions.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Automatic Dependencies:</strong> Packages like <InlineCode>@mui/material</InlineCode> and <InlineCode>@emotion</InlineCode> are automatically installed.</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>Versioning:</strong> Consumers can lock to specific versions and update safely.</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" sx={{ color: "text.primary", fontWeight: 600, mb: 2 }}>
        Git Submodule Installation (Deprecated)
      </Typography>
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 6, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: "background.default" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, width: "50%" }}>Pros</TableCell>
              <TableCell sx={{ fontWeight: 600, width: "50%" }}>Cons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><strong>Instant Updates:</strong> Edit the UI library directly inside the consuming app for instant hot-reloads.</TableCell>
              <TableCell><strong>Massive Footprint:</strong> Clones the entire UI monorepo (including docs, tests, and dev dependencies).</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><strong>No Publishing Needed:</strong> Committing to git is all it takes to distribute the code.</TableCell>
              <TableCell><strong>Complex Setup:</strong> Requires editing workspace yaml and framework transpilation config.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell><strong>Git Nightmares:</strong> Submodules easily get out of sync, leading to detached HEAD states.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ mb: 6, opacity: 0.5 }} />

      <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 600, mb: 3 }}>
        3. How to Publish to NPM
      </Typography>
      
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
        When you have added new components or fixed bugs in <InlineCode>vortex-ui</InlineCode>, you must publish a new version to the NPM registry so consumers can install the updates. Ensure you have an NPM account and are logged in via your terminal (<InlineCode>npm login</InlineCode>).
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
            Step 1: Navigate to the UI Package
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            Open your terminal and ensure you are in the correct package directory:
          </Typography>
          <ComponentCode code={`cd packages/ui`} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
            Step 2: Bump the Version
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            Open <InlineCode>packages/ui/package.json</InlineCode> and increment the <InlineCode>version</InlineCode> field. NPM will reject your publication with a 403 Forbidden error if you try to publish an existing version.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
            Step 3: Build the Distribution Files
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            You must compile the raw React/TypeScript files into standard JavaScript before publishing. This uses <InlineCode>tsup</InlineCode> to generate the <InlineCode>dist/</InlineCode> folder.
          </Typography>
          <ComponentCode code={`npm run build`} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
            Step 4: Publish the Package
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            Finally, publish the package to the public registry. Note: if you have 2FA enabled, you must append <InlineCode>--otp=123456</InlineCode>.
          </Typography>
          <ComponentCode code={`npm publish --access public`} />
        </Box>
      </Stack>
    </Box>
  );
}
