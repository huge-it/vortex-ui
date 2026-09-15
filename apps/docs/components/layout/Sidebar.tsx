"use client";

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
    title: "Buttons & Actions",
    items: [
      { name: "Button", href: "/components/button" },
      { name: "Button Group", href: "/components/button-group" },
      { name: "FilterButton", href: "/components/filter-button" },
      { name: "Link", href: "/components/link" },
    ],
  },
  {
    title: "Inputs & Text Fields",
    items: [
      { name: "AutoPopulate", href: "/components/auto-populate" },
      { name: "ChipInputField", href: "/components/chip-input" },
      { name: "NumberField", href: "/components/number-field" },
      { name: "Slider", href: "/components/slider" },
      { name: "Text Areas", href: "/components/text-areas" },
      { name: "TextField", href: "/components/textfield" },
    ],
  },
  {
    title: "Layout & Data Display",
    items: [
      { name: "Accordion", href: "/components/accordion" },
      { name: "Avatar", href: "/components/avatar" },
      { name: "Card", href: "/components/card" },
      { name: "DataTable", href: "/components/table" },
      { name: "Grid", href: "/components/grid" },
      { name: "Sheet", href: "/components/sheet" },
    ],
  },
  {
    title: "Modals, Drawers & Feedback",
    items: [
      { name: "Dialog", href: "/components/dialog" },
      { name: "Drawer", href: "/components/drawer" },
      { name: "Snackbar / Toast", href: "/components/snackbar" },
      { name: "Tooltip", href: "/components/tooltip" },
    ],
  },
  {
    title: "Navigation & Steppers",
    items: [
      { name: "Breadcrumbs", href: "/components/breadcrumbs" },
      { name: "History", href: "/components/history" },
      { name: "PipelineStepper", href: "/components/pipeline-stepper" },
      { name: "Stepper", href: "/components/stepper" },
    ],
  },
  {
    title: "Pickers & Uploads",
    items: [
      { name: "Date Picker", href: "/components/date-picker" },
      { name: "DateRange Picker", href: "/components/date-range-picker" },
      { name: "DateTime Picker", href: "/components/date-time-picker" },
      { name: "Time Picker", href: "/components/time-picker" },
      { name: "Uploads", href: "/components/uploads" },
    ],
  },
  {
    title: "Selections & Toggles",
    items: [
      { name: "Checkbox Group", href: "/components/checkbox-group" },
      { name: "Radio Group", href: "/components/radio-group" },
      { name: "Select", href: "/components/select" },
      { name: "Toggle Switch", href: "/components/toggle-switch" },
    ],
  },
  {
    title: "Status, Loading & Progress",
    items: [
      { name: "Backdrop", href: "/components/backdrop" },
      { name: "Badge", href: "/components/badge" },
      { name: "LinearProgress", href: "/components/progress" },
      { name: "Skeleton", href: "/components/skeleton" },
    ],
  },
];

export const exampleCategories: SidebarCategory[] = [
  {
    title: "Project",
    items: [
      { name: "Create Project", href: "/examples/project/create" },
      { name: "Project Details", href: "/examples/project/view" },
      { name: "Project List", href: "/examples/project/list" },
    ],
  },
  {
    title: "User Profile",
    items: [
      { name: "Create Profile", href: "/examples/user-profile/create" },
      { name: "View Profile", href: "/examples/user-profile/view" },
      { name: "Profile List", href: "/examples/user-profile/list" },
    ],
  },
];

export const foundationCategories: SidebarCategory[] = [
  {
    title: "Design System",
    items: [
      { name: "Themes", href: "/foundations/themes" },
      { name: "Colors", href: "/foundations/colors" },
      { name: "Typography", href: "/foundations/typography" },
      { name: "Breakpoints", href: "/foundations/breakpoints" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const categories = pathname?.startsWith("/examples")
    ? exampleCategories
    : pathname?.startsWith("/foundations")
      ? foundationCategories
      : componentCategories;

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
        px: 1,
        py: 2,
        // Hide scrollbar but keep functionality
        "&::-webkit-scrollbar": { width: "0.4em" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "divider",
          borderRadius: "4px",
        },
      }}
    >
      {categories?.map((category) => (
        <Box key={category.title} sx={{ mb: 2 }}>
          <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              display: "block",
              mb: 1,
              px: 1,
            }}
          >
            {category.title}
          </Typography>
          <List disablePadding>
            {category.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <ListItem key={item.href} disablePadding>
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
