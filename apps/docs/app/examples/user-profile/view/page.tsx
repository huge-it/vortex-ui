"use client";

import React from "react";
import { Box, Typography, Divider, Chip } from "@mui/material";
import { Button, Avatar, Sheet, Grid } from "vortex-ui";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

export default function ViewProfileExample() {
  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", py: 4 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button variant="outlined">Edit Profile</Button>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Sheet
            variant="sm"
            sx={{ p: 4, borderRadius: 2, textAlign: "center" }}
          >
            <Avatar
              src="/static/images/avatar/2.jpg"
              sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
            />
            <Typography variant="h5" color="text.primary" fontWeight={700}>
              Jane Smith
            </Typography>
            <Typography color="primary.main" fontWeight={500} mb={3}>
              Senior Software Engineer
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              gap={1.5}
              alignItems="flex-start"
            >
              <Box display="flex" gap={1.5} alignItems="center">
                <Email color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  jane.smith@example.com
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="center">
                <Phone color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box display="flex" gap={1.5} alignItems="center">
                <LocationOn color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  San Francisco, CA
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box display="flex" justifyContent="center" gap={2}>
              <LinkedIn
                color="action"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              />
              <GitHub
                color="action"
                sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              />
            </Box>
          </Sheet>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Sheet variant="sm" sx={{ p: 4, borderRadius: 2, mb: 4 }}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight={600}
              mb={2}
            >
              About
            </Typography>
            <Typography color="text.secondary" paragraph>
              Passionate software engineer with over 8 years of experience in
              building scalable web applications. Specializes in React, Next.js,
              and Node.js ecosystems. Strong advocate for clean code,
              accessibility, and user-centric design.
            </Typography>
            <Typography color="text.secondary">
              Previously worked at TechNova and CloudScale, leading frontend
              teams to deliver high-performance dashboards and e-commerce
              platforms.
            </Typography>
          </Sheet>

          <Sheet variant="sm" sx={{ p: 4, borderRadius: 2 }}>
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight={600}
              mb={3}
            >
              Skills
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              <Chip label="React" color="primary" variant="outlined" />
              <Chip label="Next.js" color="primary" variant="outlined" />
              <Chip label="TypeScript" color="primary" variant="outlined" />
              <Chip label="Node.js" color="primary" variant="outlined" />
              <Chip label="GraphQL" color="primary" variant="outlined" />
              <Chip label="PostgreSQL" color="primary" variant="outlined" />
              <Chip label="AWS" color="primary" variant="outlined" />
              <Chip label="Figma" color="primary" variant="outlined" />
            </Box>
          </Sheet>
        </Grid>
      </Grid>
    </Box>
  );
}
