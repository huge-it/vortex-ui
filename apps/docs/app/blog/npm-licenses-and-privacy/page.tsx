"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BlogPostPage() {
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
        NPM Licenses & Privacy: MIT, ISC, Apache, and What They Mean for Your
        Packages
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
          "& blockquote": {
            borderLeft: "4px solid",
            borderColor: "primary.main",
            pl: 3,
            ml: 0,
            mb: 3,
            color: "text.secondary",
            fontStyle: "italic",
          },
        }}
      >
        <Typography component="p">
          When you publish a package to npm, you are sharing code with
          potentially millions of developers. The <strong>license</strong> field
          in your <code>package.json</code> tells them what they are and are not
          allowed to do with your code. Choosing the right license — and
          understanding privacy implications — is one of the most important
          decisions for any package author.
        </Typography>

        {/* ─── WHY LICENSES MATTER ─────────────────────────────── */}
        <Typography component="h2">Why Licenses Matter on npm</Typography>
        <Typography component="p">
          Without a license, your package is technically under exclusive
          copyright — meaning no one can legally use, copy, or modify it, even
          if it is publicly visible on the registry. A license explicitly grants
          those permissions to others. Most npm packages use one of a handful of
          well-known open source licenses.
        </Typography>
        <Typography component="p">
          The npm registry reads the <code>license</code> field in your{" "}
          <code>package.json</code> and displays it prominently on your package
          page, helping developers make informed decisions before adding your
          package as a dependency.
        </Typography>

        {/* ─── MIT ─────────────────────────────────────────────── */}
        <Typography component="h2">The MIT License</Typography>
        <Typography component="p">
          The <strong>MIT License</strong> is the most popular open source
          license on npm, used by projects like React, Vue, Angular, Express,
          and thousands more. It is short, simple, and developer-friendly.
        </Typography>

        <Typography component="h3">What MIT Allows</Typography>
        <ul>
          <li>Use the software for any purpose (including commercially).</li>
          <li>Copy, modify, merge, publish, and distribute the software.</li>
          <li>Sublicense and sell copies of the software.</li>
        </ul>

        <Typography component="h3">MIT&apos;s Only Requirement</Typography>
        <Typography component="p">
          You must include the original copyright notice and the license text in
          any copy or substantial portion of the software. That&apos;s it.
        </Typography>

        <Typography component="h3">What MIT Does Not Do</Typography>
        <ul>
          <li>
            It provides <strong>no warranty</strong> — the software is provided
            &quot;as is&quot;.
          </li>
          <li>
            It does <strong>not</strong> require derivative works to also be
            open source.
          </li>
          <li>
            It does <strong>not</strong> grant trademark rights.
          </li>
        </ul>

        <Typography component="p">
          <strong>VortexUI uses the MIT license</strong>, meaning any developer
          or organization can install, use, and build on top of our components
          freely, even in commercial products.
        </Typography>

        {/* ─── OTHER COMMON LICENSES ───────────────────────────── */}
        <Typography component="h2">Other Common npm Licenses</Typography>

        <Box sx={tableBoxSx}>
          <table>
            <thead>
              <tr>
                <th>License</th>
                <th>Key Permissions</th>
                <th>Key Conditions</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>MIT</strong>
                </td>
                <td>Commercial use, modification, distribution, sublicense</td>
                <td>License &amp; copyright notice must be included</td>
                <td>Most npm packages, UI libraries, utilities</td>
              </tr>
              <tr>
                <td>
                  <strong>ISC</strong>
                </td>
                <td>Commercial use, modification, distribution</td>
                <td>License &amp; copyright notice must be included</td>
                <td>npm itself uses ISC; functionally similar to MIT</td>
              </tr>
              <tr>
                <td>
                  <strong>Apache 2.0</strong>
                </td>
                <td>Commercial use, modification, distribution, patent use</td>
                <td>Must state changes; include license &amp; notice files</td>
                <td>Corporate open source; explicit patent grant needed</td>
              </tr>
              <tr>
                <td>
                  <strong>GPL-3.0</strong>
                </td>
                <td>Commercial use, modification, distribution</td>
                <td>
                  Derivative works must <strong>also be GPL</strong> (copyleft)
                </td>
                <td>
                  Projects where you want all derivatives to remain open source
                </td>
              </tr>
              <tr>
                <td>
                  <strong>LGPL-2.1</strong>
                </td>
                <td>Commercial use, modification, distribution</td>
                <td>
                  Library modifications must be GPL; but end-apps can be
                  proprietary
                </td>
                <td>Libraries intended for commercial embedding</td>
              </tr>
              <tr>
                <td>
                  <strong>BSD-2-Clause / BSD-3-Clause</strong>
                </td>
                <td>Commercial use, modification, distribution</td>
                <td>
                  License &amp; copyright notice included; BSD-3 adds
                  non-endorsement clause
                </td>
                <td>Academic and research projects</td>
              </tr>
              <tr>
                <td>
                  <strong>UNLICENSED</strong>
                </td>
                <td>None — proprietary code</td>
                <td>No redistribution allowed</td>
                <td>Private / internal packages not meant to be shared</td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* ─── ADDING A LICENSE ────────────────────────────────── */}
        <Typography component="h2">
          How to Set a License on Your Package
        </Typography>
        <Typography component="p">
          Simply add the <code>license</code> field to your{" "}
          <code>package.json</code>:
        </Typography>
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
          }}
        >
          <pre style={{ margin: 0 }}>
            {`{
  "name": "vortex-ui",
  "version": "1.0.0",
  "license": "MIT",
  ...
}`}
          </pre>
        </Box>
        <Typography component="p">
          You should also add a physical <code>LICENSE</code> (or{" "}
          <code>LICENSE.md</code>) file to the root of your repository with the
          full license text. Tools like GitHub can auto-detect this and display
          a badge on your repo.
        </Typography>

        {/* ─── PRIVACY POLICY ──────────────────────────────────── */}
        <Typography component="h2">
          Privacy Considerations for npm Packages
        </Typography>
        <Typography component="p">
          Publishing a package to npm raises a few privacy questions that are
          often overlooked:
        </Typography>

        <Typography component="h3">1. What npm Collects</Typography>
        <Typography component="p">
          When you publish, npm stores your package tarball, your npm account
          details (email, username), and download/install metadata. This data is
          governed by the{" "}
          <a
            href="https://docs.npmjs.com/policies/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            npm Privacy Policy
          </a>
          . Install counts are public — anyone can see how many weekly downloads
          your package receives.
        </Typography>

        <Typography component="h3">
          2. Your Package&apos;s Privacy Policy
        </Typography>
        <Typography component="p">
          If your package collects any user data, makes network requests, or
          includes telemetry, you should clearly document this in your README
          and ideally link to a privacy policy. This is both ethical and, in
          many jurisdictions (e.g., under GDPR), a legal requirement.
        </Typography>

        <Typography component="h3">3. Secrets and Sensitive Data</Typography>
        <Typography component="p">
          Be careful what ends up in your published package. A common mistake is
          accidentally including <code>.env</code> files, credentials, or
          internal configs. Use a <code>.npmignore</code> file (similar to{" "}
          <code>.gitignore</code>) or the <code>files</code> whitelist in{" "}
          <code>package.json</code> to control exactly what gets published:
        </Typography>
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
          }}
        >
          <pre style={{ margin: 0 }}>
            {`// package.json — only publish the dist folder
{
  "files": ["dist", "README.md", "LICENSE"]
}`}
          </pre>
        </Box>
        <Typography component="p">
          You can run <code>npm pack</code> locally to see exactly what files
          would be included in a publish, before actually publishing.
        </Typography>

        <Typography component="h3">
          4. Private Packages for Sensitive Code
        </Typography>
        <Typography component="p">
          If your package contains proprietary business logic or sensitive
          internal tooling, use a <strong>private scoped package</strong> with a
          paid npm plan. This keeps your code off the public registry entirely,
          accessible only to authenticated team members.
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
