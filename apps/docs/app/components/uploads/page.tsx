import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";

export default function UploadsDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Uploads"
        description={<>Documentation for Uploads is coming soon.</>}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        This component is currently being migrated to Vortex UI.
      </Typography>
    </Box>
  );
}
