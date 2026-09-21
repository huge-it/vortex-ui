"use client";

import { LightMode, DarkMode, Menu as MenuIcon } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useColorMode } from "vortex-ui";
import { Search } from "./Search";
import { SearchModal } from "./SearchModal";

const NAV_LINKS = [
  { label: "Home", href: "/", matchPrefix: null },
  {
    label: "Foundations",
    href: "/foundations/themes",
    matchPrefix: "/foundations",
  },
  {
    label: "Components",
    href: "/components/button",
    matchPrefix: "/components",
  },
  {
    label: "Examples",
    href: "/examples/project/create",
    matchPrefix: "/examples",
  },
  { label: "Changelog", href: "/changelog", matchPrefix: "/changelog" },
];

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { mode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        color: "text.primary",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "primary.main",
              cursor: "pointer",
            }}
          >
            VortexUI
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              ml: 4,
            }}
          >
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box onClick={() => setSearchOpen(true)} sx={{ cursor: "pointer" }}>
            <Search />
          </Box>
          <SearchModal
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
            variant="split-icons"
          />
          <IconButton
            onClick={toggleColorMode}
            sx={{ color: "text.primary" }}
            aria-label="Toggle light/dark mode"
          >
            {mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
