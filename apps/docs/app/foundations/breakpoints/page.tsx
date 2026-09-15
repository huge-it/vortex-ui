"use client";
import { Box, Typography, Divider } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";

export default function BreakpointsPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Breakpoints
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 4
        }}>
        Breakpoints are customizable widths that determine how your responsive layout behaves across devices.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          mb: 3
        }}>
        Vortex UI uses standard MUI breakpoints. Use the sx prop to apply responsive styles.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <ul>
          <li><strong>xs:</strong> 0px (extra small)</li>
          <li><strong>sm:</strong> 600px (small)</li>
          <li><strong>md:</strong> 900px (medium)</li>
          <li><strong>lg:</strong> 1200px (large)</li>
          <li><strong>xl:</strong> 1536px (extra large)</li>
        </ul>
      </Box>

      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Usage Example
      </Typography>

      <ComponentCode code={`<Box \n  sx={{\n    width: { xs: "100%", sm: "50%", md: "25%" },\n    display: { xs: "none", md: "block" }\n  }}\n>\n  Responsive Content\n</Box>`} />
    </Box>
  );
}
