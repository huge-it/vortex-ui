import React from "react";
import { Box, Typography } from "@mui/material";
import { ComponentCode } from "./ComponentCode";

export function ComponentInstallation() {
  return (
    <Box display="flex" flexDirection="column" gap={1} mb={4}>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, fontSize: "1.25rem" }}
      >
        Installation
      </Typography>
      <ComponentCode code="npm install vortex-ui" />
    </Box>
  );
}
