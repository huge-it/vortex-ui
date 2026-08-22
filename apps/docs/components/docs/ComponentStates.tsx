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
        alignItems={display === "flex" ? "center" : undefined}
        sx={containerSx}
      >
        {states.map((s) => (
          <Box
            key={s.name}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
            width={"100%"}
          >
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "8px",
                backgroundColor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "120px",
                width: "100%",
              }}
            >
              {s.element}
            </Box>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {s.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
