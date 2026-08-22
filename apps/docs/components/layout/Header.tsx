"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "vortex-ui";
import { Search } from "./Search";
import { LightbulbCircle } from "@mui/icons-material";

export function Header() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor:
          mode === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        color: "text.primary",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={3}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
            }}
          >
            VortexUI
          </Typography>
          <Box display="flex" gap={2}>
            <Link
              href="/"
              color="inherit"
              underline="none"
              sx={{ fontWeight: 500, fontSize: "0.875rem" }}
            >
              Home
            </Link>
            <Link
              href="/components/button"
              color="inherit"
              underline="none"
              sx={{ fontWeight: 500, fontSize: "0.875rem" }}
            >
              Components
            </Link>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Search />
          <IconButton onClick={toggleColorMode} color="inherit">
            <LightbulbCircle />
            {/* {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />} */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
