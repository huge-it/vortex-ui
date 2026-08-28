import React from "react";
import { Box, Typography, Alert } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentVariants } from "@docs/ComponentVariants";
import { ComponentCode } from "@docs/ComponentCode";
import { Sheet } from "vortex-ui";

export default function SheetDocs() {
  return (
    <Box>
      <ComponentHeader
        title="Sheet"
        description={
          <>
            The Sheet component is a flexible container that provides a raised,
            shadow-styled box with multiple elevation variants, similar to Card
            but often used for different layout contexts.
          </>
        }
      />

      <Alert severity="info" sx={{ mb: 4 }}>
        <strong>Sheet vs. Card:</strong> While both components provide a
        bordered container with shadows, they are conceptually different. A{" "}
        <strong>Card</strong> is typically used to display a distinct,
        self-contained piece of content (like a product or an article). A{" "}
        <strong>Sheet</strong> is a broader structural element used as a
        foundational surface for layouts, side panels, or grouping multiple
        components together.
      </Alert>

      <ComponentVariants
        title="Variants (Shadows)"
        description="The component supports various shadow variants from none to xl."
        variants={[
          {
            name: "None",
            element: (
              <Sheet variant="none" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  No Shadow (variant=&quot;none&quot;)
                </Typography>
              </Sheet>
            ),
          },
          {
            name: "Small (sm)",
            element: (
              <Sheet variant="sm" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Small Shadow (variant=&quot;sm&quot;)
                </Typography>
              </Sheet>
            ),
          },
          {
            name: "Medium (md)",
            element: (
              <Sheet variant="md" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Medium Shadow (variant=&quot;md&quot;)
                </Typography>
              </Sheet>
            ),
          },
          {
            name: "Large (lg)",
            element: (
              <Sheet variant="lg" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Large Shadow (variant=&quot;lg&quot;)
                </Typography>
              </Sheet>
            ),
          },
          {
            name: "Extra Large (xl)",
            element: (
              <Sheet variant="xl" sx={{ width: 300 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1F2A40", fontWeight: 500 }}
                >
                  Extra Large Shadow (variant=&quot;xl&quot;)
                </Typography>
              </Sheet>
            ),
          },
        ]}
      />

      <ComponentCode
        title="Usage"
        code={`import { Typography } from "@mui/material";
import { Sheet } from "vortex-ui";

function Example() {
  return (
    <Sheet variant="md" sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Module Settings</Typography>
      <Typography variant="body2" color="text.secondary">
        Adjust your module preferences and configurations here.
      </Typography>
    </Sheet>
  );
}`}
      />
    </Box>
  );
}
