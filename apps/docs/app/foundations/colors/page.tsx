"use client";
import { Box, Divider, Typography } from "@mui/material";

export default function ColorsPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Colors
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4
        }}>
        Our color system helps create a consistent, accessible experience across
        the application.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4
        }}>
        Vortex UI uses standard MUI color palettes (primary, secondary, error,
        warning, info, success) customized to our brand guidelines. Use the sx
        prop or styled components to access theme.palette.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {["primary", "secondary", "error", "warning", "info", "success"].map(
          (color) => (
            <Box
              key={color}
              sx={{
                width: 100,
                height: 100,
                bgcolor: `${color}.main`,
                color: `${color}.contrastText`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {color}
            </Box>
          ),
        )}
      </Box>
    </Box>
  );
}
