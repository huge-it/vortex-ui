import React from "react";
import { Box, Paper } from "@mui/material";

interface ComponentPreviewProps {
  children: React.ReactNode;
}

export function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <Paper
      className="toc-ignore"
      variant="outlined"
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.paper",
        borderRadius: "12px",
        borderColor: "divider",
        minHeight: "200px",
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
}
