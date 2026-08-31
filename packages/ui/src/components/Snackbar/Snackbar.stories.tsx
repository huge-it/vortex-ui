import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Snackbar } from "./Snackbar";
import { SnackbarProps } from "./Snackbar.types";
import { Box, Button, Typography, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Switch, Divider } from "@mui/material";

const meta = {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for the story
const SnackbarInteractiveWrapper = () => {
  const [toast, setToast] = useState<any>({
    open: false,
    position: "top-right",
    autoHideDuration: 5000,
    severity: "success",
    autoHide: true,
    showUndo: false,
    hideCloseIcon: false,
    message: "This is a custom snackbar matching your settings!",
    variant: "filled",
    title: "",
    actionButtons: [],
  });

  const showToast = (
    severity: string,
    message: string,
    variant: string,
    extraProps: any = {}
  ) => {
    setToast((prev: any) => ({
      ...prev,
      open: true,
      severity,
      message,
      variant,
      ...extraProps,
    }));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 800, p: 3, border: "1px solid #eaeaea", borderRadius: 2 }}>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap", mb: 3 }}>
        <FormControl size="small" sx={{ width: 180 }}>
          <InputLabel>Position</InputLabel>
          <Select
            value={toast.position}
            label="Position"
            onChange={(e) => setToast({ ...toast, position: e.target.value })}
          >
            <MenuItem value="top-left">Top Left</MenuItem>
            <MenuItem value="top-center">Top Center</MenuItem>
            <MenuItem value="top-right">Top Right</MenuItem>
            <MenuItem value="bottom-left">Bottom Left</MenuItem>
            <MenuItem value="bottom-center">Bottom Center</MenuItem>
            <MenuItem value="bottom-right">Bottom Right</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ width: 180 }}>
          <InputLabel>Timeout (ms)</InputLabel>
          <Select
            value={toast.autoHideDuration || 5000}
            label="Timeout (ms)"
            onChange={(e) => setToast({ ...toast, autoHideDuration: e.target.value as number })}
            disabled={!toast.autoHide}
          >
            <MenuItem value={3000}>3 Seconds</MenuItem>
            <MenuItem value={5000}>5 Seconds</MenuItem>
            <MenuItem value={10000}>10 Seconds</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ width: 180 }}>
          <InputLabel>Severity</InputLabel>
          <Select
            value={toast.severity}
            label="Severity"
            onChange={(e) => setToast({ ...toast, severity: e.target.value })}
          >
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="error">Error</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Switch checked={toast.autoHide} onChange={(e) => setToast({ ...toast, autoHide: e.target.checked })} />}
          label="Auto Close"
        />
        <FormControlLabel
          control={<Switch checked={toast.showUndo} onChange={(e) => setToast({ ...toast, showUndo: e.target.checked })} />}
          label="Show Undo Action"
        />
        <FormControlLabel
          control={<Switch checked={toast.hideCloseIcon} onChange={(e) => setToast({ ...toast, hideCloseIcon: e.target.checked, autoHide: e.target.checked ? true : toast.autoHide })} />}
          label="Hide Close Icon"
        />
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box display="flex" flexWrap="wrap" gap={4}>
        <Box>
          <Typography variant="h6" mb={1}>Filled Variants</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button variant="contained" color="success" onClick={() => showToast("success", "This is a success filled toast!", "filled", { title: "" })}>Success</Button>
            <Button variant="contained" color="info" onClick={() => showToast("info", "This is an info filled toast!", "filled", { title: "" })}>Info</Button>
            <Button variant="contained" color="warning" onClick={() => showToast("warning", "This is a warning filled toast!", "filled", { title: "" })}>Warning</Button>
            <Button variant="contained" color="error" onClick={() => showToast("error", "This is an error filled toast!", "filled", { title: "" })}>Error</Button>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" mb={1}>Light Variants</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button variant="outlined" color="success" onClick={() => showToast("success", "This is a success light toast!", "light", { title: "" })}>Success</Button>
            <Button variant="outlined" color="info" onClick={() => showToast("info", "This is an info light toast!", "light", { title: "" })}>Info</Button>
            <Button variant="outlined" color="warning" onClick={() => showToast("warning", "This is a warning light toast!", "light", { title: "" })}>Warning</Button>
            <Button variant="outlined" color="error" onClick={() => showToast("error", "This is an error light toast!", "light", { title: "" })}>Error</Button>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" mb={1}>Custom & Cookie</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button variant="contained" sx={{ bgcolor: "#333" }} onClick={() => showToast(toast.severity, "This is a custom snackbar matching your settings!", "filled", { title: "Custom Snackbar" })}>
              Custom Snackbar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => showToast("info", "We use cookies to understand site usage and improve our content. This includes third-party analytics.", "cookie", {
                autoHide: false,
                showUndo: false,
                hideCloseIcon: true,
                title: "Cookie preferences",
                actionButtons: [
                  { label: "Allow analytics", variant: "contained", onClick: () => console.log("Allow") },
                  { label: "Essential only", variant: "text", onClick: () => console.log("Essential") }
                ]
              })}
            >
              Cookie Consent
            </Button>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={toast.open}
        severity={toast.severity}
        message={toast.message}
        title={toast.title}
        variant={toast.variant}
        onClose={() => setToast((t: any) => ({ ...t, open: false }))}
        showUndo={toast.showUndo}
        position={toast.position}
        autoHideDuration={
          toast.hideCloseIcon && (!toast.actionButtons || toast.actionButtons.length === 0)
            ? toast.autoHideDuration || 5000
            : toast.autoHide ? toast.autoHideDuration : null
        }
        actionButtons={toast.actionButtons}
        hideCloseIcon={toast.hideCloseIcon}
      />
    </Box>
  );
};

export const Playground: Story = {
  render: () => <SnackbarInteractiveWrapper />,
};
