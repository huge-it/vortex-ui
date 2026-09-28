"use client";

import React from "react";
import { Box, Typography, Card, CardActionArea, CardContent, Stack } from "@mui/material";
import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "welcome-to-vortexui-npm",
    title: "Welcome to VortexUI: Building a Better Developer Experience with NPM",
    date: "September 26, 2026",
    description: "Discover why we created VortexUI, the benefits of standardizing our components, and why we strongly recommend NPM over Git submodules.",
  },
  {
    slug: "npm-public-vs-private",
    title: "NPM Packages: Public, Private, Organizations & Pricing",
    date: "September 26, 2026",
    description: "A comprehensive guide to npm scopes, the difference between public and private packages, organization-level access control, and a complete pricing breakdown.",
  },
  {
    slug: "how-to-publish-npm-packages",
    title: "Setting Up, Structuring & Publishing Your NPM Package",
    date: "September 26, 2026",
    description: "From monorepo folder structure to semantic versioning and publish commands — everything you need to ship your own package to npm.",
  },
  {
    slug: "npm-licenses-and-privacy",
    title: "NPM Licenses & Privacy: MIT, ISC, Apache, and What They Mean",
    date: "September 26, 2026",
    description: "Understand the MIT license, other common open source licenses on npm, and the privacy considerations every package author should know.",
  },
  {
    slug: "peer-vs-dependencies",
    title: "peerDependencies vs dependencies: What Every Package Author Must Know",
    date: "September 26, 2026",
    description: "Learn the difference between dependencies, devDependencies, and peerDependencies — with real VortexUI examples and common pitfalls to avoid.",
  },
  {
    slug: "changelog-and-migration",
    title: "Changelog & Migration Guides: Communicating Changes to Your Users",
    date: "September 26, 2026",
    description: "How to write changelogs using the Keep a Changelog format, create migration guides for breaking changes, and manage deprecation lifecycles.",
  },
];

export default function BlogIndexPage() {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        py: 8,
        px: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "text.primary",
          fontWeight: 800,
          fontSize: "2.5rem",
          mb: 2,
        }}
      >
        Blog
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: "1.1rem",
          mb: 6,
        }}
      >
        Insights, updates, and deep dives from the VortexUI team.
      </Typography>

      <Stack spacing={4}>
        {BLOG_POSTS.map((post) => (
          <Card key={post.slug} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardActionArea component={Link} href={`/blog/${post.slug}`}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, mb: 1, display: "block" }}>
                  {post.date}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>
                  {post.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {post.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
