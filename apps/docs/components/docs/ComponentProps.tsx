import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface ComponentPropsProps {
  propsList: PropDefinition[];
}

export function ComponentProps({ propsList }: ComponentPropsProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={4}>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, fontSize: "1.25rem" }}
      >
        Props / API
      </Typography>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "background.default" }}>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                Type
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                Default
              </TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propsList.map((p) => (
              <TableRow key={p.name} hover>
                <TableCell
                  sx={{
                    fontFamily: "Consolas, Monaco, monospace",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "0.8125rem",
                  }}
                >
                  {p.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Consolas, Monaco, monospace",
                    color: "text.primary",
                    fontSize: "0.8125rem",
                  }}
                >
                  {p.type}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Consolas, Monaco, monospace",
                    color: "text.secondary",
                    fontSize: "0.8125rem",
                  }}
                >
                  {p.default}
                </TableCell>
                <TableCell sx={{ color: "text.primary", fontSize: "0.875rem" }}>
                  {p.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
