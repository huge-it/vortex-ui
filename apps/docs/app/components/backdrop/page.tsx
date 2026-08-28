"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { Backdrop } from "vortex-ui";

const backdropPropsList = [
  {
    name: "open",
    type: "boolean",
    default: "false",
    description: "If true, the backdrop is open and visible.",
  },
  {
    name: "onClick",
    type: "function",
    default: "-",
    description: "Callback fired when the backdrop is clicked.",
  },
  {
    name: "zIndex",
    type: "number",
    default: "1300",
    description: "The z-index of the backdrop.",
  },
  {
    name: "color",
    type: "string",
    default: '"#4772FF"',
    description: "The color of the loading spinner.",
  },
  {
    name: "absolute",
    type: "boolean",
    default: "false",
    description:
      "If true, positions the backdrop absolutely within its container instead of using a full-screen portal.",
  },
  {
    name: "size",
    type: "number",
    default: "45",
    description: "The size of the loading spinner in pixels.",
  },
];

export default function BackdropDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Backdrop"
        description={
          <>
            The backdrop component is used to provide emphasis on a particular
            element or parts of it.
          </>
        }
      />

      <Stack spacing={6} sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Default Backdrop (Container-Bound)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Using the <code>absolute</code> prop traps the backdrop inside its
            parent container.
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              height: 200,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
            }}
          >
            <Typography color="text.secondary">
              Default size (relative to container)
            </Typography>
            <Backdrop open={true} absolute />
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Custom Color
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            You can customize the color of the spinner using the{" "}
            <code>color</code> prop.
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 400,
              height: 200,
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.paper",
            }}
          >
            <Typography color="text.secondary">Custom color spinner</Typography>
            <Backdrop open={true} absolute color="#9c27b0" />
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Spinner Size Variants
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            You can customize the size of the loading spinner using the{" "}
            <code>size</code> prop.
          </Typography>

          <Box
            sx={{
              display: "flex",
              bgcolor: "background.paper",
              gap: 4,
              flexWrap: "wrap",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              height: 200,
            }}
          >
            <Box
              sx={{
                position: "relative",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                24px Spinner
              </Typography>
              <Backdrop open={true} absolute size={24} color="#e91e63" />
            </Box>

            <Box
              sx={{
                position: "relative",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                45px Spinner
              </Typography>
              <Backdrop open={true} absolute size={45} color="#4772FF" />
            </Box>

            <Box
              sx={{
                position: "relative",
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                80px Spinner
              </Typography>
              <Backdrop open={true} absolute size={80} color="#4caf50" />
            </Box>
          </Box>
        </Box>
      </Stack>

      <ComponentCode
        title="Usage"
        code={`import { Backdrop } from "vortex-ui";
import { Button } from "@mui/material";
import { useState } from "react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Stack spacing={4}>
      {/* Absolute backdrop inside a container */}
      <Box sx={{ position: "relative", width: 300, height: 200, border: "1px solid #ccc" }}>
        <Backdrop open={true} absolute color="#4772FF" />
      </Box>

      {/* Custom size and color */}
      <Box sx={{ position: "relative", width: 150, height: 150, border: "1px solid #ccc" }}>
        <Backdrop open={true} absolute size={32} color="#9c27b0" />
      </Box>
    </Stack>
  );
}`}
      />

      <ComponentProps propsList={backdropPropsList} />
    </Box>
  );
}
