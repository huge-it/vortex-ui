"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Typography as MuiTypography,
} from "@mui/material";
import { Dialog, Button } from "vortex-ui";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentStates } from "@docs/ComponentStates";
import { ComponentProps } from "@docs/ComponentProps";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";

const dialogPropsList = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Determines whether the dialog is visible.",
  },
  {
    name: "variant",
    type: "'default' | 'error' | 'success' | 'info'",
    default: "'default'",
    description: "Defines the semantic styling and color of the dialog.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Header text displayed at the top of the dialog.",
  },
  {
    name: "notes",
    type: "ReactNode",
    default: "undefined",
    description: "Descriptive body text displayed below the title.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "undefined",
    description: "Callback function triggered when clicking the cancel button.",
  },
  {
    name: "onSubmit",
    type: "() => void",
    default: "undefined",
    description:
      "Callback function triggered when clicking the primary action button.",
  },
  {
    name: "closeText",
    type: "string",
    default: "'Cancel'",
    description: "Text label for the dismissive action button.",
  },
  {
    name: "actionText",
    type: "string",
    default: "'Submit'",
    description: "Text label for the primary action button.",
  },
  {
    name: "maxWidth",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'sm'",
    description: "The maximum width constraints of the dialog.",
  },
];

export default function DialogDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<
    "default" | "error" | "success" | "info"
  >("default");

  return (
    <Box>
      <ComponentHeader
        title="Dialog"
        description={
          <>
            An overlay dialog component for focusing user tasks, wrapping
            MUI&apos;s Dialog.
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
        <Box display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="outlined"
            onClick={() => {
              setVariant("default");
              setIsOpen(true);
            }}
          >
            Default Dialog
          </Button>
          <Button
            variant="outlined"
            severity="error"
            onClick={() => {
              setVariant("error");
              setIsOpen(true);
            }}
          >
            Error Dialog
          </Button>
          <Button
            variant="outlined"
            severity="success"
            onClick={() => {
              setVariant("success");
              setIsOpen(true);
            }}
          >
            Success Dialog
          </Button>
          <Button
            variant="outlined"
            severity="info"
            onClick={() => {
              setVariant("info");
              setIsOpen(true);
            }}
          >
            Info Dialog
          </Button>
        </Box>
        <Dialog
          open={isOpen}
          variant={variant}
          title={
            variant === "error"
              ? "Delete account?"
              : variant === "success"
                ? "Payment successful"
                : variant === "info"
                  ? "System update"
                  : "Standard action"
          }
          notes={
            variant === "error"
              ? "Are you sure you want to delete your account? All of your data will be permanently removed."
              : variant === "success"
                ? "Your payment has been processed successfully. A receipt has been sent to your email."
                : variant === "info"
                  ? "A new system update is available. It includes performance improvements and bug fixes."
                  : "This is a standard dialog for general actions and confirmations."
          }
          onClose={() => setIsOpen(false)}
          onSubmit={() => setIsOpen(false)}
          actionText={
            variant === "error"
              ? "Delete"
              : variant === "success"
                ? "Continue"
                : variant === "info"
                  ? "Update"
                  : "Submit"
          }
          closeText="Cancel"
        />
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "With Footer Actions",
            element: (
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "10px",
                  width: "400px",
                  backgroundColor: "background.paper",
                }}
              >
                <Typography
                  color="text.primary"
                  sx={{ fontWeight: 600, fontSize: 18, px: 3, pt: 3, pb: 1.5 }}
                >
                  Dialog Footer Example
                </Typography>
                <Box sx={{ px: 3, pb: 2 }}>
                  <Typography sx={{ color: "text.secondary", fontWeight: 400 }}>
                    Are you sure you want to proceed with this action? This
                    operation cannot be undone.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    px: 3,
                    pb: 3,
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="outlined" size="lg">
                    Cancel
                  </Button>
                  <Button variant="filled" size="lg">
                    Save
                  </Button>
                </Box>
              </Box>
            ),
          },
        ]}
      />
      <ComponentCode
        title="Usage"
        code={`import React, { useState } from 'react';
import { Dialog, Button } from "vortex-ui";

function DialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      
      <Dialog
        open={open}
        variant="error"
        title="Delete Item"
        notes="Are you sure you want to permanently delete this item?"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
        actionText="Delete"
        closeText="Cancel"
      />
    </>
  );
}`}
      />

      <ComponentProps propsList={dialogPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
