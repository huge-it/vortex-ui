import React from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";

interface ComponentStatesProps {
  states: {
    name: string;
    element: React.ReactNode;
  }[];
  display?: "flex" | "grid";
  containerSx?: SxProps<Theme>;
}

export function ComponentStates({
  states,
  display = "flex",
  containerSx,
}: ComponentStatesProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={4}>
      <Typography
        color="text.secondary"
        variant="h5"
        sx={{ fontWeight: 600, mb: 1, fontSize: "1.25rem" }}
      >
        States
      </Typography>
      <Box
        display={display}
        gap={3}
        flexWrap={display === "flex" ? "wrap" : undefined}
        alignItems={display === "flex" ? "start" : undefined}
        sx={{
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          backgroundColor: "background.paper",
          display: "flex",
          justifyContent: "center",
          minWidth: "120px",
          width: "100%",
          height: "100%",
          ...containerSx,
        }}
      >
        {states.map((s) => (
          <Box key={s.name} display="flex" gap={1} flexDirection="column">
            {s.name && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {s.name}
              </Typography>
            )}
            <Box display="flex" alignItems="center" justifyContent="center">
              {s.element}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
