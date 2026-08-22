"use client";

import { Box, Divider, Typography } from "@mui/material";
import { ComponentCode } from "../../../components/docs/ComponentCode";
import { ComponentInstallation } from "../../../components/docs/ComponentInstallation";
import { ComponentPreview } from "../../../components/docs/ComponentPreview";
import { ComponentHeader } from "../../../components/docs/ComponentHeader";
import { ComponentProps } from "../../../components/docs/ComponentProps";
import { ComponentStates } from "../../../components/docs/ComponentStates";
import { Accordion } from "vortex-ui";

const accordionPropsList = [
  {
    name: "data",
    type: "AccordionPanelProps[]",
    default: "undefined",
    description: "Array of data objects to render multiple accordion panels.",
  },
  {
    name: "singleOpen",
    type: "boolean",
    default: "false",
    description: "If true, only one accordion panel can be open at a time.",
  },
  {
    name: "title",
    type: "ReactNode",
    default: "undefined",
    description: "The title of a single accordion panel.",
  },
  {
    name: "count",
    type: "number",
    default: "undefined",
    description: "Optional count to display next to the title.",
  },
  {
    name: "items",
    type: "ReactNode[]",
    default: "[]",
    description: "List of items to display as content inside the panel.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "undefined",
    description:
      "Custom content to display inside the panel, overriding items.",
  },
  {
    name: "expanded",
    type: "boolean",
    default: "undefined",
    description: "Controls the expanded state of a single accordion panel.",
  },
  {
    name: "onChange",
    type: "(event: React.SyntheticEvent, expanded: boolean) => void",
    default: "undefined",
    description: "Callback fired when the expanded state changes.",
  },
];

export default function AccordionDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Accordion"
        description={
          <>
            A vertically stacked set of interactive headings that each reveal a
            section of content.
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
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <Accordion
            data={[
              {
                title: "Accordion Panel 1",
                items: ["First item content", "Second item content"],
              },
              {
                title: "Accordion Panel 2",
                items: ["Third item content", "Fourth item content"],
              },
            ]}
          />
        </Box>
      </ComponentPreview>

      <ComponentStates
        display="grid"
        containerSx={{
          gridTemplateColumns: "1fr",
          width: "100%",
        }}

        states={[
          {
            name: "Single Panel",
            element: (
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Accordion
                  title="Standalone Panel"
                  items={["This is a standalone accordion panel."]}
                />
              </Box>
            ),
          },
          {
            name: "With Count",
            element: (
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Accordion
                  title="Notifications"
                  count={12}
                  items={[
                    "You have 12 new notifications.",
                    "Here is another one.",
                  ]}
                />
              </Box>
            ),
          },
          {
            name: "Single Open Mode",
            element: (
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Accordion
                  singleOpen
                  data={[
                    {
                      title: "Section 1",
                      items: ["Only one section can be open."],
                    },
                    {
                      title: "Section 2",
                      items: ["Opening this closes the other."],
                    },
                  ]}
                />
              </Box>
            ),
          },
          {
            name: "Custom Children",
            element: (
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Accordion title="Custom Content">
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "info.main",
                      color: "info.contrastText",
                      borderRadius: 1,
                    }}
                  >
                    You can put any React components inside the Accordion!
                  </Box>
                </Accordion>
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
        code={`import { Accordion } from "vortex-ui";

function Example() {
  const data = [
    { title: "General Settings", items: ["Account", "Privacy"] },
    { title: "Notifications", count: 3, items: ["Email", "Push", "SMS"] },
  ];

  return (
    <Accordion data={data} singleOpen />
  );
}`}
      />

      <ComponentProps propsList={accordionPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
