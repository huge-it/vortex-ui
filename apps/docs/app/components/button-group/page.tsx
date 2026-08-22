import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";

export default function ButtonGroupDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Button Group"
        description={<>Documentation for Button Group is coming soon.</>}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        This component is currently being migrated to Vortex UI.
      </Typography>
    </Box>
  );
}
