"use client";
import React from "react";

import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Button } from "vortex-ui";

const CHANGELOG_DATA = [
  {
    version: "v0.1.19",
    date: "September 21, 2026",
    changes: [
      {
        type: "fixed",
        description:
          "Tooltip: Upgraded internal componentsProps usage to MUI v5 standard slotProps and removed explicit custom arrow styling to fix an issue where the arrow position misaligned for all placements.",
      },
      {
        type: "fixed",
        description:
          "Docs: Updated Tooltip component showcase docs to import Button, Box, Stack, and Typography directly from vortex-ui instead of @mui/material.",
      },
    ],
  },
  {
    version: "v0.1.18",
    date: "September 18, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Provider: Merged AppRouterCacheProvider directly into VortexUIProvider to eliminate boilerplate code for Next.js App Router consumers.",
      },
      {
        type: "changed",
        description:
          "Dependencies: Added @mui/material-nextjs as a standard dependency to automatically provide Next.js App Router compatibility.",
      },
    ],
  },
  {
    version: "v0.1.17",
    date: "September 18, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Build/Publishing: Version bump for testing NPM registry publication.",
      },
    ],
  },
  {
    version: "v0.1.16",
    date: "September 18, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Build/Publishing: Version bump for testing NPM registry publication.",
      },
    ],
  },
  {
    version: "v0.1.15",
    date: "September 17, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Build/Publishing: Configured package for NPM public distribution (exports, module mapping, TypeScript definitions).",
      },
      {
        type: "changed",
        description:
          "Dependencies: Moved MUI and Emotion to standard dependencies so they auto-install for consumers.",
      },
      {
        type: "changed",
        description:
          "Docs: Rewrote the installation guide in both HOW_TO_USE.md and the documentation homepage to reflect the transition from Git Submodule installation to standard NPM package installation.",
      },
      {
        type: "fixed",
        description:
          "Bundling: Prevented Next.js internal code from being bundled into the UI library, resolving dynamic require (Turbopack) errors.",
      },
    ],
  },
  {
    version: "v0.1.14",
    date: "September 17, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Build/Publishing: Version bump for NPM registry publication.",
      },
    ],
  },
  {
    version: "v0.1.13",
    date: "September 17, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Build/Publishing: Version bump for NPM registry publication.",
      },
    ],
  },
  {
    version: "v0.1.12",
    date: "September 15, 2026",
    changes: [
      {
        type: "changed",
        description:
          "Theme: Enabled CSS Variables in the MUI theme configuration to leverage MUI v6 performance improvements.",
      },
      {
        type: "changed",
        description:
          "Dependencies: Verified and updated component compatibility with MUI v6.",
      },
      {
        type: "fixed",
        description:
          "NumberField: Fixed a TypeScript compilation error by removing a duplicate width property in the sx prop.",
      },
    ],
  },
  {
    version: "v0.1.11",
    date: "September 7, 2026",
    changes: [
      {
        type: "feat",
        description: "Card: Added fullHeight prop.",
      },
      {
        type: "changed",
        description:
          "VortexTable: Fixed rendering of nested data arrays and custom action icons. Improved table wrapper styling by using Box instead of Paper and removing default borders/padding for better integration.",
      },
      {
        type: "changed",
        description: "Docs: Updated table component examples and layout.",
      },
    ],
  },
  {
    version: "v0.1.10",
    date: "September 7, 2026",
    changes: [
      {
        type: "fix",
        description:
          "ButtonGroup: Removed custom MUI variant/sx overrides on the internal TextField to properly inherit Vortex UI's native styling.",
      },
      {
        type: "feat",
        description:
          "Sidebar (Docs): Alphabetized component categories and items, removed emojis, and updated styling (spacing & typography) to look more professional and visually match the standard frontend.",
      },
      {
        type: "fix",
        description:
          "Docs: Fixed a typescript any type warning in the ButtonGroup example.",
      },
    ],
  },
  {
    version: "v0.1.9",
    date: "September 3, 2026",
    changes: [
      {
        type: "feat",
        description: "Added new VortexTable component.",
      },
      {
        type: "feat",
        description:
          "Added advanced sub-components for DataTable: ColumnHeaderMenu, CustomFilterDropdown, DataTableContainer, SearchFilter, StyledCheckbox, and TableToolbar.",
      },
    ],
  },
  {
    version: "v0.1.8",
    date: "September 2, 2026",
    changes: [
      {
        type: "docs",
        description:
          "Added and updated documentation for Avatar and Table components.",
      },
      {
        type: "docs",
        description:
          "Added and updated application examples for Project List and User Profile (Create, List, View).",
      },
      {
        type: "docs",
        description: "Updated README.md with workspace filter commands.",
      },
    ],
  },
  {
    version: "v0.1.7",
    date: "September 1, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Added Service Worker scaffolding (sw.js) and offline PWA support configuration.",
      },
      {
        type: "feat",
        description:
          "Added User Profile application example pages (create and view user profile pages).",
      },
      {
        type: "changed",
        description:
          "Enhanced Select component with fullWidth prop support across variants.",
      },
      {
        type: "changed",
        description:
          "Improved Textarea component layout, border styling, and focus handling.",
      },
      {
        type: "changed",
        description:
          "Updated package build process and distribution bundle configuration for vortex-ui.",
      },
    ],
  },
  {
    version: "v0.1.6",
    date: "August 31, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Added comprehensive application examples demonstrating how to use components in real-world scenarios.",
      },
      {
        type: "feat",
        description:
          "Refactored Date/Time pickers into standalone components: DatePicker, DateRangePicker, DateTimePicker, and TimePicker.",
      },
      {
        type: "feat",
        description:
          "Updated Uploads components, adding DragDropUpload and UploadButton functionalities.",
      },
      {
        type: "changed",
        description:
          "Refactored generic input documentation into specific TextField documentation.",
      },
      {
        type: "changed",
        description:
          "Updated layout components (Header, Footer, Sidebar) and global styles.",
      },
      {
        type: "changed",
        description:
          "Improvements and fixes across various UI components including Button, CheckboxGroup, RadioGroup, Select, Stepper, and Snackbar.",
      },
    ],
  },
  {
    version: "v0.1.5",
    date: "August 28, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Added new components to the library: Breadcrumbs, Avatar, Dialog, Drawer, History, Pipeline Stepper, Stepper, and Tooltip.",
      },
      {
        type: "changed",
        description:
          "Removed the Modal component and its associated documentation.",
      },
      {
        type: "fix",
        description:
          "Fixed a bug where internal component headings (like Accordion panels in previews) were incorrectly bleeding into the global 'On this page' table of contents.",
      },
      {
        type: "changed",
        description:
          "Refactored the AutoPopulate component to use standard MUI theme color tokens (instead of hardcoded hex values) for full light/dark mode compatibility, and migrated scrollbar CSS to standard sx props.",
      },
      {
        type: "changed",
        description:
          "Renamed CustomAccordionProps to AccordionProps for cleaner and more standard typing.",
      },
      {
        type: "docs",
        description:
          "Standardized the documentation page layouts across multiple components (Table, TextAreas, ToggleSwitch, Tooltip, Accordion) by consolidating section titles.",
      },
      {
        type: "fix",
        description:
          "Fixed layout styling in ComponentStates to prevent rendering vertical dividers when the display mode is set to grid.",
      },
    ],
  },
  {
    version: "v0.1.4",
    date: "August 27, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Added the Tooltip component to the library with support for custom bgColor and textColor.",
      },
      {
        type: "feat",
        description:
          "Added a massive suite of new components to the library: Accordion, Backdrop, Badge, Card, CheckboxGroup, Grid, Link, Progress, RadioGroup, Sheet, Skeleton, Slider, and ToggleSwitch.",
      },
      {
        type: "fix",
        description:
          "Fixed Backdrop component typing issues for Storybook compatibility.",
      },
      {
        type: "fix",
        description:
          "Added a circular track/trailer to the Backdrop component's spinner to make the loading path visible.",
      },
      {
        type: "fix",
        description:
          "Resolved various TypeScript and component type errors across the newly migrated components (including Link).",
      },
    ],
  },
  {
    version: "v0.1.3",
    date: "August 26, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Added new components to the library: AutoPopulate, ButtonGroup, ChipInput, IconButton, NumberField, and TextAreas.",
      },
      {
        type: "changed",
        description:
          "Improved the ButtonGroup component UI by making button widths dynamic (auto instead of fixed 80px), increasing horizontal padding, and increasing gap spacing between icons and text to prevent label congestion.",
      },
    ],
  },
  {
    version: "v0.1.2",
    date: "August 22, 2026",
    changes: [
      {
        type: "fix",
        description:
          'Added "use client" directive to the compiled output bundle so that Next.js App Router treats the library as Client Components.',
      },
    ],
  },
  {
    version: "v0.1.1",
    date: "August 22, 2026",
    changes: [
      {
        type: "feat",
        description:
          "Implemented tsup bundler to pre-compile the React components into standard, minified JavaScript (CommonJS and ESModules).",
      },
      {
        type: "feat",
        description:
          "Added automatic generation of TypeScript declaration files (.d.ts).",
      },
      { type: "feat", description: "Added a build script to package.json." },
      {
        type: "changed",
        description:
          "Pointed the main and types fields in package.json to the compiled /dist/ folder instead of raw source files.",
      },
      {
        type: "changed",
        description:
          "Updated the .github/workflows/publish.yml GitHub Action to automatically run the pnpm build step before publishing.",
      },
      {
        type: "changed",
        description:
          "Upgraded the GitHub Action runner to use Node.js 22.x (LTS) to resolve deprecation warnings and ensure build stability.",
      },
      {
        type: "fix",
        description:
          "Fixed an issue where consuming applications (like Next.js) had to manually add transpilePackages to compile the library. The package is now plug-and-play.",
      },
    ],
  },
  {
    version: "v0.1.0",
    date: "August 22, 2026",
    changes: [
      {
        type: "feat",
        description: "Initial release of the vortex-ui component library.",
      },
      {
        type: "feat",
        description:
          "Created publish.yml GitHub Action to automatically publish the package to the private GitHub Packages registry (npm.pkg.github.com).",
      },
      {
        type: "feat",
        description:
          "Exported core components (Button, Modal, Input, Select, DataTable) and the VortexUIProvider.",
      },
      {
        type: "feat",
        description:
          "Added a README.md detailing installation and usage instructions for the library.",
      },
    ],
  },
];

const getChipColor = (type: string) => {
  switch (type) {
    case "feat":
      return { bg: "#EEF2FF", text: "#4772FF" }; // Primary Blue
    case "fix":
      return { bg: "#FEF2F2", text: "#EF4444" }; // Red
    case "docs":
      return { bg: "#F0FDF4", text: "#10B981" }; // Green
    case "changed":
      return { bg: "#FFFBEB", text: "#F59E0B" }; // Yellow/Orange
    default:
      return { bg: "#F3F4F6", text: "#374151" }; // Gray
  }
};

export default function ChangelogPage() {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        py: 6,
        px: 3,
        display: "flex",
        gap: { xs: 0, md: 6 },
        alignItems: "flex-start",
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "text.primary",
                fontWeight: 800,
                fontSize: "2.5rem",
                mb: 1,
              }}
            >
              Changelog
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
              }}
            >
              All notable changes to VortexUI will be documented here.
            </Typography>
          </Box>
          <Button variant="outlined" component={Link} href="/publication-log">
            Publication log
          </Button>
        </Stack>

        <Divider sx={{ mb: 6 }} />

        <Stack spacing={8}>
          {CHANGELOG_DATA.map((release) => (
            <Box key={release.version} id={release.version}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "baseline",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "text.primary",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                  }}
                >
                  {release.version}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {release.date}
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {release.changes.map((change, idx) => {
                  const colors = getChipColor(change.type);
                  return (
                    <Stack
                      key={idx}
                      direction="row"
                      spacing={2}
                      sx={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Chip
                        label={change.type}
                        size="small"
                        sx={{
                          bgcolor: colors.bg,
                          color: colors.text,
                          fontWeight: 600,
                          textTransform: "uppercase",
                          fontSize: "0.7rem",
                          borderRadius: "6px",
                          minWidth: "60px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary" }}
                      >
                        {change.description}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Floating Legend */}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 32 },
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 8,
          py: 1,
          px: { xs: 2, md: 3 },
          display: "flex",
          gap: 1.5,
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          zIndex: 1000,
        }}
      >
        {/* <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            mr: 1,
            color: "text.secondary",
            letterSpacing: "0.5px",
          }}
        >
          TAGS:
        </Typography> */}
        {[
          { type: "feat", label: "New Feature" },
          { type: "fix", label: "Bug Fix" },
          { type: "changed", label: "Update" },
          { type: "docs", label: "Documentation" },
        ].map(({ type, label }) => {
          const colors = getChipColor(type);
          return (
            <Stack
              key={type}
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Chip
                label={type}
                size="small"
                sx={{
                  bgcolor: colors.bg,
                  color: colors.text,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                  borderRadius: "6px",
                  height: "22px",
                  minWidth: "unset",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
}
