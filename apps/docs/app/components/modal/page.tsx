"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  Typography as MuiTypography,
} from "@mui/material";
import { Modal, Button } from "vortex-ui";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentStates } from "../../../components/docs/ComponentStates";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentInstallation } from "../../../components/docs/ComponentInstallation";

const modalPropsList = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "Determines whether the modal dialog is visible.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Header text displayed at the top of the dialog.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "undefined",
    description: "Callback function triggered when clicking closing elements.",
  },
  {
    name: "actions",
    type: "ReactNode",
    default: "undefined",
    description: "Buttons or components displayed in the footer action bar.",
  },
  {
    name: "maxWidth",
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'sm'",
    description: "The maximum width constraints of the dialog.",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "true",
    description: "If true, expand the dialog container to fit max-width.",
  },
];

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <ComponentHeader
        title="Modal"
        description={<>An overlay dialog component for focusing user tasks, wrapping MUI&apos;s Dialog.</>}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Preview
      </Typography>
      <ComponentPreview>
        <Button variant="filled" onClick={() => setIsOpen(true)}>
          Open Live Modal
        </Button>
        <Modal
          open={isOpen}
          title="Account Disconnection"
          onClose={() => setIsOpen(false)}
          actions={
            <>
              <Button variant="text" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="filled"
                severity="error"
                onClick={() => setIsOpen(false)}
              >
                Disconnect
              </Button>
            </>
          }
        >
          <MuiTypography variant="body2" color="text.secondary">
            Are you sure you want to disconnect this database source? Connecting
            it again will require manual credentials entering.
          </MuiTypography>
        </Modal>
      </ComponentPreview>

      <ComponentStates
        states={[
          {
            name: "With Footer Actions",
            element: (
              <Box
                sx={{
                  border: "1px solid #e2e8f0",
                  p: 2,
                  borderRadius: "8px",
                  width: "250px",
                  backgroundColor: "#f8fafc",
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Dialog Footer Example
                </Typography>
                <Box display="flex" gap={1}>
                  <Button variant="text" size="sm">
                    Cancel
                  </Button>
                  <Button variant="filled" size="sm">
                    Save
                  </Button>
                </Box>
              </Box>
            ),
          },
        ]}
      />

      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
      >
        Usage
      </Typography>
      <ComponentCode
        code={`import React, { useState } from 'react';
import { Modal, Button } from "vortex-ui";
import { Typography } from "@mui/material";

function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal
        open={open}
        title="Settings Saved"
        onClose={() => setOpen(false)}
        actions={
          <Button variant="filled" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <Typography variant="body2">
          Your profiles configurations have been synchronized successfully.
        </Typography>
      </Modal>
    </>
  );
}`}
      />

      <ComponentProps propsList={modalPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
