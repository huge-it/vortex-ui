"use client";
import { Box, Typography, Divider } from "@mui/material";

export default function TypographyPage() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Typography
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Typography is used to create clear hierarchies and organize information.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        We rely on the MUI Typography component. It provides standard variants like h1-h6, body1, body2, caption, etc.
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
    </Box>
  );
}
