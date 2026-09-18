"use client";
import { Box } from "@mui/material";
import { ComponentCode } from "@comp/docs/ComponentCode";
import { ComponentHeader } from "@comp/docs/ComponentHeader";

export default function BreakpointsPage() {
  return (
    <Box>
      <ComponentHeader
        title="Breakpoints"
        description="Breakpoints are customizable widths that determine how your responsive layout behaves across devices. Vortex UI uses standard MUI breakpoints. Use the sx prop to apply responsive styles."
      />

      <Box sx={{ mb: 4, pl: 2 }}>
        <ul>
          <li><strong>xs:</strong> 0px (extra small)</li>
          <li><strong>sm:</strong> 600px (small)</li>
          <li><strong>md:</strong> 900px (medium)</li>
          <li><strong>lg:</strong> 1200px (large)</li>
          <li><strong>xl:</strong> 1536px (extra large)</li>
        </ul>
      </Box>

      <ComponentCode 
        title="Usage Example"
        code={`<Box \n  sx={{\n    width: { xs: "100%", sm: "50%", md: "25%" },\n    display: { xs: "none", md: "block" }\n  }}\n>\n  Responsive Content\n</Box>`} 
      />
    </Box>
  );
}
