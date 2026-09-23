import React from "react";
import { Box } from "@mui/material";

export const InlineCode = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      component="code"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        px: "6px",
        py: "2px",
        borderRadius: 1,
        fontFamily: "monospace",
        fontSize: "0.85em",
        fontWeight: 600,
      }}
    >
      {children}
    </Box>
  );
};
