"use client";

import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { componentCategories } from "./Sidebar";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 5 },
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 6,
          mb: 8,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {componentCategories?.map((category) => (
          <Box key={category.title}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "text.primary", mb: 2 }}
            >
              {category.title
                .replace(
                  /[\u{1F300}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]/gu,
                  "",
                )
                .trim()}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {category.items.map((item) => (
                <MuiLink
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.name}
                </MuiLink>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          VortexUI by <b>Huge IT Solutions</b>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
