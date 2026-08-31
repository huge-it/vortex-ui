"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import {
  Snackbar,
  Select,
  TextField,
  ToggleSwitch,
  Button,
  Grid,
} from "vortex-ui";

const snackbarPropsList = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "If true, the component is shown.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "undefined",
    description: "Callback fired when the component requests to be closed.",
  },
  {
    name: "severity",
    type: "'success' | 'info' | 'warning' | 'error'",
    default: "'success'",
    description: "The severity of the snackbar (used for icons and colors).",
  },
  {
    name: "message",
    type: "string",
    default: "''",
    description: "The main message to display.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "The bold title above the message (enables two-line variant).",
  },
  {
    name: "variant",
    type: "'filled' | 'light' | 'cookie'",
    default: "'filled'",
    description: "The visual variant of the snackbar.",
  },
  {
    name: "showUndo",
    type: "boolean",
    default: "false",
    description: "If true, shows an UNDO button.",
  },
  {
    name: "onAction",
    type: "() => void",
    default: "undefined",
    description: "Callback fired when the UNDO button is clicked.",
  },
  {
    name: "autoHideDuration",
    type: "number | null",
    default: "5000",
    description:
      "The number of milliseconds to wait before automatically calling the onClose function.",
  },
  {
    name: "position",
    type: "'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'",
    default: "'top-right'",
    description: "The position of the snackbar.",
  },
  {
    name: "topOffset",
    type: "number",
    default: "64",
    description: "Pixel offset from the top of the viewport.",
  },
  {
    name: "bottomOffset",
    type: "number",
    default: "16",
    description: "Pixel offset from the bottom of the viewport.",
  },
  {
    name: "actionButtons",
    type: "SnackbarAction[]",
    default: "[]",
    description: "Array of custom action buttons to display.",
  },
  {
    name: "hideCloseIcon",
    type: "boolean",
    default: "false",
    description: "If true, hides the close icon button.",
  },
];

const POSITION_OPTIONS = {
  "top-right": { label: "Top Right", value: "top-right", color: "info.main" },
  "top-left": { label: "Top Left", value: "top-left", color: "info.main" },
  "top-center": {
    label: "Top Center",
    value: "top-center",
    color: "info.main",
  },
  "bottom-right": {
    label: "Bottom Right",
    value: "bottom-right",
    color: "info.main",
  },
  "bottom-left": {
    label: "Bottom Left",
    value: "bottom-left",
    color: "info.main",
  },
  "bottom-center": {
    label: "Bottom Center",
    value: "bottom-center",
    color: "info.main",
  },
};

const SEVERITY_OPTIONS = {
  success: { label: "Success", value: "success", color: "success.main" },
  info: { label: "Info", value: "info", color: "info.main" },
  warning: { label: "Warning", value: "warning", color: "warning.main" },
  error: { label: "Error", value: "error", color: "error.main" },
};

const VARIANT_OPTIONS = {
  filled: { label: "Filled", value: "filled", color: "info.main" },
  light: { label: "Light", value: "light", color: "info.main" },
  cookie: { label: "Cookie", value: "cookie", color: "info.main" },
};

const DURATION_OPTIONS = {
  3000: { label: "3 Seconds", value: 3000, color: "info.main" },
  5000: { label: "5 Seconds", value: 5000, color: "info.main" },
  8000: { label: "8 Seconds", value: 8000, color: "info.main" },
  10000: { label: "10 Seconds", value: 10000, color: "info.main" },
};

export default function SnackbarDocs() {
  const [openBasic, setOpenBasic] = useState(false);
  const [openTitle, setOpenTitle] = useState(false);
  const [openCookie, setOpenCookie] = useState(false);

  const [demoState, setDemoState] = useState<{
    open: boolean;
    severity: "success" | "info" | "warning" | "error";
    variant: "filled" | "light";
  }>({ open: false, severity: "success", variant: "filled" });

  const showDemo = (
    severity: "success" | "info" | "warning" | "error",
    variant: "filled" | "light",
  ) => {
    setDemoState({ open: true, severity, variant });
  };

  type PlaygroundState = {
    open: boolean;
    severity: "success" | "info" | "warning" | "error";
    variant: "filled" | "light" | "cookie";
    position:
      | "top-right"
      | "top-left"
      | "top-center"
      | "bottom-right"
      | "bottom-left"
      | "bottom-center";
    autoHide: boolean;
    duration: number;
  };
  const [pg, setPg] = useState<PlaygroundState>({
    open: false,
    severity: "success",
    variant: "filled",
    position: "bottom-right",
    autoHide: true,
    duration: 5000,
  });

  return (
    <Box>
      <ComponentHeader
        title="Snackbar"
        description="A lightweight and customizable component for displaying brief messages, notifications, or cookie banners."
      />

      <Stack spacing={4} sx={{ mt: 4 }}>
        {/* Interactive Playground */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Interactive Playground
          </Typography>
          <ComponentPreview>
            <Stack spacing={3} width={"100%"}>
              <Grid container spacing={2} alignItems="center" columns={5}>
                <Grid size={1}>
                  <Select
                    label="Position"
                    recordId="dummy"
                    fullWidth
                    value={pg.position}
                    options={POSITION_OPTIONS}
                    onUpdate={(_, val) =>
                      setPg({
                        ...pg,
                        position: val as PlaygroundState["position"],
                      })
                    }
                  />
                </Grid>{" "}
                <Grid size={1}>
                  <Select
                    label="Severity"
                    recordId="dummy"
                    fullWidth
                    value={pg.severity}
                    options={SEVERITY_OPTIONS}
                    onUpdate={(_, val) =>
                      setPg({
                        ...pg,
                        severity: val as PlaygroundState["severity"],
                      })
                    }
                  />
                </Grid>{" "}
                <Grid size={1}>
                  <Select
                    label="Variant"
                    recordId="dummy"
                    fullWidth
                    value={pg.variant}
                    options={VARIANT_OPTIONS}
                    onUpdate={(_, val) =>
                      setPg({
                        ...pg,
                        variant: val as PlaygroundState["variant"],
                      })
                    }
                  />
                </Grid>{" "}
                <Grid size={1}>
                  <Select
                    label="Duration"
                    recordId="dummy"
                    fullWidth
                    disabled={!pg.autoHide}
                    value={pg.duration}
                    options={DURATION_OPTIONS}
                    onUpdate={(_, val) =>
                      setPg({ ...pg, duration: Number(val) })
                    }
                  />
                </Grid>{" "}
                <Grid size={1}>
                  <ToggleSwitch
                    label="Auto Hide"
                    checked={pg.autoHide}
                    onChange={(val) => setPg({ ...pg, autoHide: val })}
                  />
                </Grid>
              </Grid>
              <Box>
                <Button
                  variant="filled"
                  onClick={() => setPg({ ...pg, open: true })}
                >
                  Show Toast
                </Button>
              </Box>
            </Stack>

            <Snackbar
              open={pg.open}
              onClose={() => setPg({ ...pg, open: false })}
              message={`Interactive Toast!`}
              title={
                pg.variant === "cookie" ? "We value your privacy" : undefined
              }
              severity={pg.severity}
              variant={pg.variant}
              position={pg.position}
              autoHideDuration={pg.autoHide ? pg.duration : null}
            />
          </ComponentPreview>
        </Box>

        {/* Basic Snackbar */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Basic Usage
          </Typography>
          <ComponentPreview>
            <Button variant="filled" onClick={() => setOpenBasic(true)}>
              Show Snackbar
            </Button>
            <Snackbar
              open={openBasic}
              onClose={() => setOpenBasic(false)}
              message="This is a basic success snackbar"
              severity="success"
              position="bottom-right"
            />
          </ComponentPreview>
        </Box>

        {/* Severities & Variants */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Severities & Variants
          </Typography>
          <ComponentPreview>
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Filled Variant
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="filled"
                    severity="success"
                    onClick={() => showDemo("success", "filled")}
                  >
                    Success
                  </Button>
                  <Button
                    variant="filled"
                    severity="info"
                    onClick={() => showDemo("info", "filled")}
                  >
                    Info
                  </Button>
                  <Button
                    variant="filled"
                    severity="warning"
                    onClick={() => showDemo("warning", "filled")}
                  >
                    Warning
                  </Button>
                  <Button
                    variant="filled"
                    severity="error"
                    onClick={() => showDemo("error", "filled")}
                  >
                    Error
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Light Variant
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="outlined"
                    severity="success"
                    onClick={() => showDemo("success", "light")}
                  >
                    Success
                  </Button>
                  <Button
                    variant="outlined"
                    severity="info"
                    onClick={() => showDemo("info", "light")}
                  >
                    Info
                  </Button>
                  <Button
                    variant="outlined"
                    severity="warning"
                    onClick={() => showDemo("warning", "light")}
                  >
                    Warning
                  </Button>
                  <Button
                    variant="outlined"
                    severity="error"
                    onClick={() => showDemo("error", "light")}
                  >
                    Error
                  </Button>
                </Stack>
              </Box>
            </Stack>

            <Snackbar
              open={demoState.open}
              onClose={() => setDemoState((prev) => ({ ...prev, open: false }))}
              message={`This is a ${demoState.severity} ${demoState.variant} snackbar`}
              severity={demoState.severity}
              variant={demoState.variant}
              position="top-center"
            />
          </ComponentPreview>
        </Box>

        {/* With Title and Custom Actions */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            With Title and Custom Actions
          </Typography>
          <ComponentPreview>
            <Button variant="filled" onClick={() => setOpenTitle(true)}>
              Show Advanced Snackbar
            </Button>
            <Snackbar
              open={openTitle}
              onClose={() => setOpenTitle(false)}
              title="Notification Title"
              message="Detailed information about this notification goes here."
              severity="info"
              variant="light"
              position="top-right"
              actionButtons={[
                { label: "Action", onClick: () => alert("Action clicked!") },
              ]}
            />
          </ComponentPreview>
        </Box>

        {/* Cookie Banner Variant */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Cookie Banner Variant
          </Typography>
          <ComponentPreview>
            <Button variant="filled" onClick={() => setOpenCookie(true)}>
              Show Cookie Banner
            </Button>
            <Snackbar
              open={openCookie}
              onClose={() => setOpenCookie(false)}
              title="We value your privacy"
              message="We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic."
              variant="cookie"
              position="bottom-center"
              autoHideDuration={null} // Don't auto-hide cookie banner
              actionButtons={[
                {
                  label: "Decline All",
                  variant: "text",
                  onClick: () => setOpenCookie(false),
                },
                {
                  label: "Accept All",
                  variant: "contained",
                  onClick: () => setOpenCookie(false),
                },
              ]}
            />
          </ComponentPreview>
        </Box>
      </Stack>

      <ComponentCode
        title="Usage"
        code={`import { useState } from "react";
import { Button } from "@mui/material";
import { Snackbar } from "vortex-ui";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="This is a basic snackbar"
        severity="success"
      />
    </>
  );
}`}
      />

      <ComponentProps propsList={snackbarPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
