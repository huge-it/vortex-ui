"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TableOfContents } from "./TableOfContents";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(260);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    } else {
      setDrawerWidth((prev) => (prev === 260 ? 56 : 260));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header onMenuClick={toggleSidebar} />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setIsMobileSidebarOpen(false)}
          drawerWidth={drawerWidth}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 3, md: 5 },
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
            minHeight: "calc(100vh - 64px)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          <Footer />
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            width: 240,
            flexShrink: 0,
            position: "sticky",
            top: 64,
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            p: 4,
          }}
        >
          <TableOfContents />
        </Box>
      </Box>
    </Box>
  );
}
