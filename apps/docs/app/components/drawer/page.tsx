"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Button, Drawer, ToggleSwitch } from "vortex-ui";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";

const drawerPropsList = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Determines whether the drawer is visible.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "undefined",
    description: "Callback triggered to close the drawer or discard changes.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "The main title displayed in the drawer header.",
  },
  {
    name: "subtitle",
    type: "ReactNode",
    default: "undefined",
    description: "Optional subtitle displayed below the title in the header.",
  },
  {
    name: "anchor",
    type: "'left' | 'right' | 'top' | 'bottom'",
    default: "'right'",
    description: "Which edge of the screen the drawer slides in from.",
  },
  {
    name: "type",
    type: "string",
    default: "''",
    description:
      "Prefix for the title (e.g., 'Create', 'Edit'). Use 'View' for view-only mode.",
  },
  {
    name: "width",
    type: "number | string",
    default: "600",
    description: "Drawer width (only applies to left/right anchors).",
  },
  {
    name: "onSubmit",
    type: "() => void",
    default: "undefined",
    description: "Callback triggered when the submit action is clicked.",
  },
  {
    name: "actionText",
    type: "string",
    default: "'Submit'",
    description: "The label for the primary action button.",
  },
  {
    name: "closeText",
    type: "string",
    default: "'Cancel'",
    description: "The label for the close/cancel button.",
  },
  {
    name: "showFooter",
    type: "boolean",
    default: "true",
    description: "Whether to render the bottom action footer.",
  },
  {
    name: "showHeaderActions",
    type: "boolean",
    default: "true",
    description: "Whether to render the action buttons directly in the header.",
  },
  {
    name: "requireConfirmOnClose",
    type: "boolean",
    default: "true",
    description:
      "If true, prompts the user to confirm before discarding changes.",
  },
];

export default function DrawerDocs() {
  const [demoDrawer, setDemoDrawer] = useState(false);
  const [drawerAnchor, setDrawerAnchor] = useState<
    "left" | "right" | "top" | "bottom"
  >("right");
  const [drawerType, setDrawerType] = useState("Create");
  const [showHeaderActions, setShowHeaderActions] = useState(true);

  return (
    <Box mb={2}>
      <ComponentHeader
        title="Drawer"
        description={
          <>
            A highly customizable Drawer component providing a side/top/bottom
            modal sheet, built over MUI Drawer.
          </>
        }
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Preview
      </Typography>

      <ComponentPreview>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 2 }}>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerAnchor("left");
              setDemoDrawer(true);
            }}
          >
            Left Drawer
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerAnchor("right");
              setDemoDrawer(true);
            }}
          >
            Right Drawer
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerAnchor("top");
              setDemoDrawer(true);
            }}
          >
            Top Drawer
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setDrawerAnchor("bottom");
              setDemoDrawer(true);
            }}
          >
            Bottom Drawer
          </Button>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              Mode
            </Typography>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color:
                    drawerType === "Create" ? "primary.main" : "text.secondary",
                }}
                onClick={() => setDrawerType("Create")}
              >
                Create
              </Typography>
              <ToggleSwitch
                checked={drawerType === "View"}
                onChange={(checked) =>
                  setDrawerType(checked ? "View" : "Create")
                }
              />
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color:
                    drawerType === "View" ? "primary.main" : "text.secondary",
                }}
                onClick={() => setDrawerType("View")}
              >
                View
              </Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={1}
          >
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              Position
            </Typography>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: showHeaderActions ? "primary.main" : "text.secondary",
                }}
                onClick={() => setShowHeaderActions(true)}
              >
                Header
              </Typography>
              <ToggleSwitch
                checked={!showHeaderActions}
                onChange={(checked) => setShowHeaderActions(!checked)}
              />
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  color: !showHeaderActions ? "primary.main" : "text.secondary",
                }}
                onClick={() => setShowHeaderActions(false)}
              >
                Footer
              </Typography>
            </Box>
          </Box>
        </Box>

        <Drawer
          open={demoDrawer}
          onClose={() => setDemoDrawer(false)}
          onSubmit={() => {
            console.log("Drawer Action Triggered!");
            setDemoDrawer(false);
          }}
          title="Customizable Drawer"
          subtitle="Manage your settings and preferences seamlessly."
          anchor={drawerAnchor}
          type={drawerType}
          showHeaderActions={showHeaderActions}
        >
          <Box
            sx={{
              p: 3,
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Your Custom Content Goes Here
            </Typography>
          </Box>
        </Drawer>
      </ComponentPreview>

      <Box sx={{ mt: 4 }}>
        <ComponentProps title="Drawer Props" propsList={drawerPropsList} />
      </Box>
    </Box>
  );
}
