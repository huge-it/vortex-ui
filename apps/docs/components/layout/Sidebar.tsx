"use client";

import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItem {
  name: string;
  href: string;
}

interface SidebarCategory {
  title: string;
  items: SidebarItem[];
}

export const componentCategories: SidebarCategory[] = [
  {
    title: "🖱️ Buttons & Actions",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "IconButton", href: "/components/icon-button" },
      { name: "Button Group", href: "/components/button-group" },
      { name: "Link", href: "/components/link" },
    ],
  },
  {
    title: "⌨️ Inputs & Text Fields",
    items: [
      { name: "TextField", href: "/components/input" },
      { name: "NumberField", href: "/components/number-field" },
      { name: "ChipInputField", href: "/components/chip-input" },
      { name: "Text Areas", href: "/components/text-areas" },
      { name: "SimpleEditor", href: "/components/editor" },
    ],
  },
  {
    title: "☑️ Selections & Toggles",
    items: [
      { name: "AutoPopulate", href: "/components/auto-populate" },
      { name: "Select", href: "/components/select" },
      { name: "Checkbox Group", href: "/components/checkbox-group" },
      { name: "Radio Group", href: "/components/radio-group" },
      { name: "Toggle Switch", href: "/components/toggle-switch" },
    ],
  },
  {
    title: "📅 Pickers & Uploads",
    items: [
      { name: "Date & Time Pickers", href: "/components/date-time-pickers" },
      { name: "Uploads", href: "/components/uploads" },
    ],
  },
  {
    title: "📐 Layout & Data Display",
    items: [
      { name: "Card", href: "/components/card" },
      { name: "Sheet", href: "/components/sheet" },
      { name: "Grid", href: "/components/grid" },
      { name: "Accordion", href: "/components/accordion" },
      { name: "Avatar", href: "/components/avatar" },
      { name: "DataTable", href: "/components/table" },
    ],
  },
  {
    title: "🧭 Navigation & Steppers",
    items: [
      { name: "Breadcrumbs", href: "/components/breadcrumbs" },
      { name: "Stepper", href: "/components/stepper" },
      { name: "PipelineStepper", href: "/components/pipeline-stepper" },
      { name: "History", href: "/components/history" },
    ],
  },
  {
    title: "💬 Modals, Drawers & Feedback",
    items: [
      { name: "Dialog", href: "/components/modal" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Tooltip", href: "/components/tooltip" },
      { name: "Snackbar / Toast", href: "/components/snackbar" },
    ],
  },
  {
    title: "⏳ Status, Loading & Progress",
    items: [
      { name: "Badge", href: "/components/badge" },
      { name: "Slider", href: "/components/slider" },
      { name: "LinearProgress", href: "/components/progress" },
      { name: "Skeleton", href: "/components/skeleton" },
      { name: "Backdrop", href: "/components/backdrop" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        borderRight: "1px solid",
        borderColor: "divider",
        height: "calc(100vh - 64px)",
        position: "sticky",
        top: 64,
        backgroundColor: "background.paper",
        overflowY: "auto",
        p: 2,
        // Hide scrollbar but keep functionality
        "&::-webkit-scrollbar": { width: "0.4em" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "divider",
          borderRadius: "4px",
        },
      }}
    >
      {componentCategories?.map((category) => (
        <Box key={category.title} sx={{ mb: 3 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              color: "text.secondary",
              letterSpacing: "0.05em",
              px: 2,
              mb: 1,
              fontSize: "0.75rem",
            }}
          >
            {category.title}
          </Typography>
          <List disablePadding>
            {category.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    selected={isActive}
                    sx={{
                      borderRadius: "8px",
                      color: isActive ? "primary.main" : "text.primary",
                      fontWeight: isActive ? 600 : 500,
                      backgroundColor: isActive
                        ? "rgba(99, 102, 241, 0.08)"
                        : "transparent",
                      "&:hover": {
                        backgroundColor: isActive
                          ? "rgba(99, 102, 241, 0.12)"
                          : "rgba(241, 245, 249, 0.6)",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "rgba(99, 102, 241, 0.08)",
                        color: "primary.main",
                        "&:hover": {
                          backgroundColor: "rgba(99, 102, 241, 0.12)",
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      slotProps={{
                        primary: {
                          style: {
                            fontWeight: isActive ? 600 : 500,
                            fontSize: "0.875rem",
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      ))}
    </Box>
  );
}
