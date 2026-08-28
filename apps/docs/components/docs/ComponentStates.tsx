import React from "react";
import { Box, Typography, SxProps, Theme, Divider } from "@mui/material";

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
        className="toc-ignore"
        display={display}
        gap={3}
        flexWrap={display === "flex" ? "wrap" : undefined}
        alignItems={display === "flex" ? "start" : undefined}
        justifyContent={display === "flex" ? "center" : undefined}
        sx={{
          p: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "8px",
          backgroundColor: "background.paper",
          minWidth: "120px",
          width: "100%",
          height: "100%",
          ...containerSx,
        }}
      >
        {states.map((s, index) => (
          <React.Fragment key={s.name}>
            {index > 0 && display !== "grid" && <Divider orientation="vertical" flexItem />}
            <Box display="flex" gap={1} flexDirection="column">
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
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
