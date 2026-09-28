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
        NPM Packages: Public, Private, Organizations & Pricing
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
          "& h2": { fontSize: "1.75rem", fontWeight: 700, mt: 6, mb: 2, color: "text.primary" },
          "& h3": { fontSize: "1.25rem", fontWeight: 600, mt: 4, mb: 2, color: "text.primary" },
          "& p": { fontSize: "1.05rem", lineHeight: 1.7, mb: 3, color: "text.primary" },
          "& ul, & ol": { mb: 3, pl: 3 },
          "& li": { fontSize: "1.05rem", lineHeight: 1.7, mb: 1, color: "text.primary" },
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
        {/* ─── SCOPES ─────────────────────────────────────────── */}
        <Typography component="h2">What Are Scopes?</Typography>
        <Typography component="p">
          When you sign up for an npm user account or create an organization, you
          are granted a <strong>scope</strong> that matches your user or
          organization name. Scopes let you create packages without naming
          conflicts with anyone else on the registry. Every scoped package is
          preceded by <code>@</code> and a slash:
        </Typography>
        <ul>
          <li><code>@myorg/package-name</code> — org-scoped</li>
          <li><code>@username/package-name</code> — user-scoped</li>
          <li><code>package-name</code> — unscoped (like <code>vortex-ui</code>)</li>
        </ul>
        <Typography component="p">
          Key rules to remember: <strong>unscoped packages are always public</strong>.{" "}
          <strong>Private packages are always scoped</strong>. Scoped packages
          default to private — you must explicitly publish them as public.
        </Typography>

        {/* ─── PUBLIC vs PRIVATE vs ORGS ───────────────────────── */}
        <Typography component="h2">Public vs. Private vs. Organizations</Typography>
        <Typography component="p">
          Choosing the right package visibility is critical. Here is how they
          compare across the five key dimensions:
        </Typography>
        <Box sx={tableBoxSx}>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Public Packages</th>
                <th>Private Packages</th>
                <th>Organizations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Description</strong></td>
                <td>Code anyone can download and use.</td>
                <td>Code visible only to you and chosen collaborators.</td>
                <td>Manage team access for sets of packages (public or private).</td>
              </tr>
              <tr>
                <td><strong>Visibility</strong></td>
                <td>Anyone on the internet.</td>
                <td>Only you and authorized collaborators.</td>
                <td>Depends on per-package access level.</td>
              </tr>
              <tr>
                <td><strong>Scope</strong></td>
                <td>Unscoped (<code>pkg</code>) or scoped (<code>@org/pkg</code>).</td>
                <td>Always scoped (e.g., <code>@myorg/pkg</code>).</td>
                <td>Always org-scoped (e.g., <code>@myorg/pkg</code>).</td>
              </tr>
              <tr>
                <td><strong>Pricing</strong></td>
                <td>Free — unlimited packages.</td>
                <td>Paid npm Pro or Teams plan required.</td>
                <td>Free for public; Teams plan for private packages.</td>
              </tr>
              <tr>
                <td><strong>Access Control</strong></td>
                <td>Everyone can read; only owners/collaborators publish.</td>
                <td>Explicit read or read/write grants per collaborator.</td>
                <td>Team-based: assign teams read or read/write per package.</td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* ─── SCOPE + ACCESS LEVEL MATRIX ─────────────────────── */}
        <Typography component="h2">Official npm Access Matrix</Typography>
        <Typography component="p">
          Package visibility is determined by two factors — the <strong>scope</strong> and the{" "}
          <strong>access level</strong>. Here is the complete matrix from the official npm docs:
        </Typography>
        <Box sx={tableBoxSx}>
          <table>
            <thead>
              <tr>
                <th>Scope</th>
                <th>Access Level</th>
                <th>Can View &amp; Download</th>
                <th>Can Publish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Org</td><td>Private</td>
                <td>Team members with <strong>read</strong> access</td>
                <td>Team members with <strong>read &amp; write</strong> access</td>
              </tr>
              <tr>
                <td>Org</td><td>Public</td>
                <td><strong>Everyone</strong></td>
                <td>Team members with <strong>read &amp; write</strong> access</td>
              </tr>
              <tr>
                <td>User</td><td>Private</td>
                <td>Owner &amp; collaborators with <strong>read</strong> access</td>
                <td>Owner &amp; collaborators with <strong>read &amp; write</strong> access</td>
              </tr>
              <tr>
                <td>User</td><td>Public</td>
                <td><strong>Everyone</strong></td>
                <td>Owner &amp; collaborators with <strong>read &amp; write</strong> access</td>
              </tr>
              <tr>
                <td>Unscoped</td><td>Public</td>
                <td><strong>Everyone</strong></td>
                <td>Owner &amp; collaborators with <strong>read &amp; write</strong> access</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Typography component="p">
          <strong>Note:</strong> Only user accounts can create and manage
          unscoped packages. Organizations can only manage scoped packages.
          This is why <code>vortex-ui</code> is published unscoped — it is
          publicly available to everyone for free.
        </Typography>

        {/* ─── PRICING ─────────────────────────────────────────── */}
        <Typography component="h2">NPM Pricing Plans</Typography>
        <Typography component="p">
          If you are considering hosting your own packages, here is the current
          pricing breakdown direct from{" "}
          <a href="https://www.npmjs.com/products" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            npmjs.com/products
          </a>
          :
        </Typography>
        <Box sx={tableBoxSx}>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Pro</th>
                <th>Teams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Target</strong></td>
                <td>Public package authors</td>
                <td>Individual creators</td>
                <td>Teams &amp; organizations</td>
              </tr>
              <tr>
                <td><strong>Price</strong></td>
                <td><strong>$0</strong></td>
                <td><strong>$7</strong> / month</td>
                <td><strong>$7</strong> / user / month</td>
              </tr>
              <tr>
                <td><strong>Public Packages</strong></td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td><strong>Private Packages</strong></td>
                <td>—</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td><strong>Permissions</strong></td>
                <td>Basic</td>
                <td>Package-based</td>
                <td>Team-based management</td>
              </tr>
              <tr>
                <td><strong>Security Warnings</strong></td>
                <td>Automatic</td>
                <td>Automatic</td>
                <td>Automatic</td>
              </tr>
              <tr>
                <td><strong>Support</strong></td>
                <td>Basic</td>
                <td>Basic</td>
                <td>Basic</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Divider sx={{ my: 6 }} />
        <Typography
          component="p"
          sx={{ fontStyle: "italic", textAlign: "center", color: "text.secondary" }}
        >
          Thank you for reading! For more, visit our{" "}
          <a href="https://github.com/murali-dev/vortex-fe" style={{ color: "inherit" }}>
            official repository
          </a>.
        </Typography>
      </Box>
    </Box>
  );
}
