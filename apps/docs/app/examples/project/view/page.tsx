"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Divider,
  Chip,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { Button } from "vortex-ui";
import {
  CalendarToday,
  FolderOpen,
  Link as LinkIcon,
} from "@mui/icons-material";

export default function ViewProjectExample() {
  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", py: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        mb={4}
      >
        <Box>
          <Box display="flex" alignItems="center" gap={1.5} mb={1}>
            <Typography variant="h4" color="text.primary" fontWeight={700}>
              E-Commerce Platform Redesign
            </Typography>
            <Chip label="In Progress" color="primary" size="small" />
          </Box>
          <Typography color="text.secondary">
            Project ID: #PRJ-8392 • Web Application
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Button variant="outlined">Edit Project</Button>
          <Button variant="filled">Complete</Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Overview
            </Typography>
            <Typography color="text.secondary" paragraph>
              A complete overhaul of the existing e-commerce frontend to improve
              conversion rates and accessibility. The project includes migrating
              to a modern tech stack (Next.js), implementing a new design
              system, and integrating with a headless CMS.
            </Typography>
            <Typography color="text.secondary">
              Key objectives:
              <ul>
                <li>Decrease page load time by 40%</li>
                <li>Improve mobile checkout experience</li>
                <li>Implement dark mode support</li>
              </ul>
            </Typography>
          </Paper>

          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Recent Activity
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
              {[1, 2, 3].map((i) => (
                <Box key={i} display="flex" gap={2}>
                  <Avatar
                    sx={{ width: 32, height: 32, bgcolor: "primary.main" }}
                  >
                    J
                  </Avatar>
                  <Box>
                    <Typography variant="body2">
                      <strong>Jane Doe</strong> uploaded new design assets.
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      2 hours ago
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Details
            </Typography>

            <Box display="flex" gap={1.5} mb={2}>
              <CalendarToday color="action" fontSize="small" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Timeline
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  Oct 1, 2026 - Dec 15, 2026
                </Typography>
              </Box>
            </Box>

            <Box display="flex" gap={1.5} mb={2}>
              <FolderOpen color="action" fontSize="small" />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Budget
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  $45,000
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle2" fontWeight={600} mb={1}>
              Team
            </Typography>
            <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Paper>

          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={2}>
              Attachments
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <Box display="flex" alignItems="center" gap={1}>
                <LinkIcon color="primary" fontSize="small" />
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Architecture_Diagram.pdf
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LinkIcon color="primary" fontSize="small" />
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Design_System_v2.fig
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
