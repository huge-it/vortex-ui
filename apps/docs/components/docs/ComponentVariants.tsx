import React from "react";
import { Box, Typography } from "@mui/material";

interface ComponentVariantsProps {
  title?: string;
  description?: string;
  direction?: "row" | "column";
  variants: {
    name: string;
    element: React.ReactNode;
  }[];
}

export function ComponentVariants({
  title = "Variants",
  description,
  direction = "row",
  variants,
}: ComponentVariantsProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={4}>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 1, fontSize: "1.25rem" }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, mt: -1 }}
        >
          {description}
        </Typography>
      )}
      <Box
        display="flex"
        gap={3}
        p={2}
        flexDirection={direction}
        flexWrap={direction === "row" ? "wrap" : "nowrap"}
        alignItems={direction === "row" ? "center" : "stretch"}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          backgroundColor: "background.paper",
        }}
      >
        {variants.map((v) => (
          <Box key={v.name} display="flex" flexDirection="column" gap={1}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {v.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "120px",
                width: direction === "column" ? "100%" : "auto",
              }}
            >
              {v.element}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
