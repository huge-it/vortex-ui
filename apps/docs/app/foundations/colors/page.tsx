"use client";
import { Box } from "@mui/material";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentPreview } from "@comp/docs/ComponentPreview";

export default function ColorsPage() {
  return (
    <Box>
      <ComponentHeader
        title="Colors"
        description="Our color system helps create a consistent, accessible experience across the application. Vortex UI uses standard MUI color palettes (primary, secondary, error, warning, info, success) customized to our brand guidelines. Use the sx prop or styled components to access theme.palette."
      />

      <ComponentPreview>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
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
      </ComponentPreview>
    </Box>
  );
}
