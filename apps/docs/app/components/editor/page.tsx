import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";

export default function EditorDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Editor"
        description={<>Documentation for Editor is coming soon.</>}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        This component is currently being migrated to VortexUI.
      </Typography>
    </Box>
  );
}
