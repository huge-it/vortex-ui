"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Tooltip } from "vortex-ui";

const tooltipPropsList = [
  {
    name: "title",
    type: "ReactNode",
    default: "-",
    description:
      "Tooltip title. Zero-length titles string are never displayed.",
  },
  {
    name: "children",
    type: "ReactElement",
    default: "-",
    description: "Tooltip reference element. Must be able to hold a ref.",
  },
  {
    name: "placement",
    type: "string",
    default: '"top"',
    description: "Tooltip placement (e.g., 'top', 'bottom', 'left', 'right').",
  },
  {
    name: "bgColor",
    type: "string",
    default: '"#fff"',
    description: "Background color of the tooltip and its arrow.",
  },
  {
    name: "textColor",
    type: "string",
    default: '"#1F2937"',
    description: "Text color of the tooltip.",
  },
];

export default function TooltipDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Tooltip"
        description={
          <>
            Tooltips display informative text when users hover over, focus on,
            or tap an element.
          </>
        }
      />

      <Stack spacing={6} sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Basic Tooltip
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Hover over the button to see the tooltip.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              p: 4,
              bgcolor: "background.paper",
            }}
          >
            <Tooltip title="Delete">
              <Button variant="contained">Hover me</Button>
            </Tooltip>
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Custom Colors
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            You can customize the tooltip background and text colors.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
              p: 4,
              bgcolor: "background.paper",
            }}
          >
            {(
              [
                { placement: "left", bgColor: "#EF4444", textColor: "#fff" },
                { placement: "top", bgColor: "#4772FF", textColor: "#fff" },
                { placement: "bottom", bgColor: "#F59E0B", textColor: "#fff" },
                { placement: "right", bgColor: "#10B981", textColor: "#fff" },
              ] as const
            ).map((item) => (
              <Tooltip
                key={item.placement}
                title={`Tooltip on ${
                  item.placement.charAt(0).toUpperCase() +
                  item.placement.slice(1)
                }`}
                placement={item.placement}
                bgColor={item.bgColor}
                textColor={item.textColor}
              >
                <span>
                  <Button variant="outlined" sx={{ width: "100px" }}>
                    {item.placement.charAt(0).toUpperCase() +
                      item.placement.slice(1)}
                  </Button>
                </span>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Stack>

      <ComponentCode
        title="Usage"
        code={`import { Tooltip } from "vortex-ui";
import { Button } from "@mui/material";

function Example() {
  return (
    <Tooltip title="This is a tooltip" placement="top">
      <Button>Hover me</Button>
    </Tooltip>
  );
}`}
      />

      <ComponentProps propsList={tooltipPropsList} />
    </Box>
  );
}
