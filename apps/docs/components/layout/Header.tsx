"use client";

import { useEffect, useState } from "react";
import { LightbulbCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useColorMode } from "vortex-ui";
import { Search } from "./Search";

const NAV_LINKS = [
  { label: "Home", href: "/", matchPrefix: null },
  {
    label: "Components",
    href: "/components/button",
    matchPrefix: "/components",
  },
  { label: "Changelog", href: "/changelog", matchPrefix: "/changelog" },
];

export function Header() {
  const { mode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

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
          <Box display="flex" gap={3} ml={4}>
            {NAV_LINKS.map((item) => {
              const isActive = mounted
                ? item.matchPrefix
                  ? pathname?.startsWith(item.matchPrefix)
                  : pathname === item.href
                : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  color={isActive ? "primary" : "inherit"}
                  underline="none"
                  sx={{
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                    opacity: isActive ? 1 : 0.8,
                    "&:hover": { opacity: 1, color: "primary.main" },
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Search />
          <IconButton onClick={toggleColorMode} color="inherit">
            <LightbulbCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
