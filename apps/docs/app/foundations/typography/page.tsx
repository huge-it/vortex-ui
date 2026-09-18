"use client";
import { Box, Typography } from "@mui/material";
import { ComponentHeader } from "@comp/docs/ComponentHeader";
import { ComponentPreview } from "@comp/docs/ComponentPreview";

export default function TypographyPage() {
  return (
    <Box>
      <ComponentHeader
        title="Typography"
        description="Typography is used to create clear hierarchies and organize information. We rely on the MUI Typography component. It provides standard variants like h1-h6, body1, body2, caption, etc."
      />

      <ComponentPreview>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography variant="caption">caption text</Typography>
        </Box>
      </ComponentPreview>
    </Box>
  );
}
