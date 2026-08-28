import React from "react";
import { Box } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentVariants } from "@docs/ComponentVariants";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { CountBadge } from "vortex-ui";

const badgePropsList = [
  {
    name: "count",
    type: "React.ReactNode",
    default: "-",
    description:
      "The count or content to display in the badge. If null or undefined, the badge will not render.",
  },
  {
    name: "maxCount",
    type: "number",
    default: "9",
    description:
      "The maximum number to display. If count is a number and exceeds maxCount, it renders as {maxCount}+",
  },
  {
    name: "active",
    type: "boolean",
    default: "false",
    description: "Whether the badge is in an active state.",
  },
  {
    name: "activeBg",
    type: "string",
    default: '"#4772FF"',
    description: "The background color of the badge when active.",
  },
  {
    name: "activeColor",
    type: "string",
    default: '"#fff"',
    description: "The text color of the badge when active.",
  },
  {
    name: "inactiveBg",
    type: "string",
    default: '"#D6DEEA"',
    description: "The background color of the badge when inactive.",
  },
  {
    name: "inactiveColor",
    type: "string",
    default: '"#313952"',
    description: "The text color of the badge when inactive.",
  },
  {
    name: "fontSize",
    type: "number | string",
    default: "11",
    description: "The font size of the text within the badge.",
  },
  {
    name: "fontWeight",
    type: "number | string",
    default: "500",
    description: "The font weight of the text within the badge.",
  },
  {
    name: "size",
    type: "number | string",
    default: "17",
    description: "The minimum width and exact height of the circular badge.",
  },
  {
    name: "sx",
    type: "SxProps<Theme>",
    default: "{}",
    description: "Additional custom styles applied to the badge.",
  },
];

export default function BadgeDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Badge (CountBadge)"
        description={
          <>
            CountBadge is a small circular element used to display a number,
            count, or small bit of information, typically associated with an
            item or action. It supports active and inactive states.
          </>
        }
      />

      <ComponentVariants
        title="CountBadge States"
        description="The component can be toggled between active and inactive states."
        variants={[
          {
            name: "Default",
            element: <CountBadge count={5} />,
          },
          {
            name: "Active",
            element: <CountBadge count={12} active />,
          },
          {
            name: "Custom Colors",
            element: (
              <CountBadge
                count="New"
                active
                activeBg="#FF4750"
                fontSize={9}
                size={20}
              />
            ),
          },
          {
            name: "Max Count (maxCount=99)",
            element: <CountBadge count={150} maxCount={99} active />,
          },
        ]}
      />

      <ComponentCode
        code={`import { CountBadge } from "vortex-ui";

function Example() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {/* Inactive state */}
      <CountBadge count={5} />
      
      {/* Active state */}
      <CountBadge count={12} active />
      
      {/* Max count state */}
      <CountBadge count={150} maxCount={99} active />
    </div>
  );
}`}
      />

      <ComponentProps propsList={badgePropsList} />
    </Box>
  );
}
