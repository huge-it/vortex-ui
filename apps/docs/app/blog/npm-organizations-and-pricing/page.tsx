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
        NPM Organizations, Pricing, and Access Control
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
        <Typography component="h2">
          Public vs. Private vs. Organizations
        </Typography>
        <Typography component="p">
          When publishing packages to npm, you choose between public and private
          visibility. Understanding this distinction is crucial for organizations.
        </Typography>
        
        <Typography component="h3">Comparison Table</Typography>
        <Box
          sx={{
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
          }}
        >
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
                <td>Code that anyone can download and use in their own projects.</td>
                <td>Code hosted on npm that is only visible to you and chosen collaborators.</td>
                <td>A way to manage access for teams to sets of packages (both public and private).</td>
              </tr>
              <tr>
                <td><strong>Visibility</strong></td>
                <td>Anyone on the internet.</td>
                <td>Only you and authorized collaborators.</td>
                <td>Depends on the package level (public or private).</td>
              </tr>
              <tr>
                <td><strong>Scope</strong></td>
                <td>Can be unscoped (e.g., <code>vortex-ui</code>) or scoped (e.g., <code>@org/package</code>).</td>
                <td>Always scoped (e.g., <code>@myorg/package</code>).</td>
                <td>Packages under an org are always scoped with the org name (e.g., <code>@myorg/package</code>).</td>
              </tr>
              <tr>
                <td><strong>Pricing</strong></td>
                <td>Completely <strong>free</strong> for unlimited packages.</td>
                <td>Requires a paid npm subscription (npm Pro/Teams).</td>
                <td>Free for public packages; requires a paid npm Teams subscription for private packages.</td>
              </tr>
              <tr>
                <td><strong>Access Control</strong></td>
                <td>None (everyone can read). Only owners/collaborators can publish.</td>
                <td>Strict access control. You explicitly grant read or read/write access.</td>
                <td>Granular team-based access control. You manage teams and grant access to packages.</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Typography component="h2">NPM Pricing Plans</Typography>
        <Typography component="p">
          If you are considering hosting your own packages on NPM, here is a quick overview of the current pricing plans for both public and private packages:
        </Typography>
        <Box
          sx={{
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
          }}
        >
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
                <td><strong>Target Audience</strong></td>
                <td>Public Package Authors</td>
                <td>Individual Creators</td>
                <td>Teams & Organizations</td>
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
                <td>N/A</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td><strong>Permissions & Management</strong></td>
                <td>Basic</td>
                <td>Package-based permissions</td>
                <td>Team-based management & permissions</td>
              </tr>
              <tr>
                <td><strong>Security Warnings</strong></td>
                <td>Automatic</td>
                <td>Automatic</td>
                <td>Automatic</td>
              </tr>
              <tr>
                <td><strong>Support</strong></td>
                <td>Basic support</td>
                <td>Basic support</td>
                <td>Basic support</td>
              </tr>
            </tbody>
          </table>
        </Box>

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
