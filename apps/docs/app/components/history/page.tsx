"use client";

import { ComponentCode } from "@docs/ComponentCode";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentProps } from "@docs/ComponentProps";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { History, HistoryItemData, ToggleSwitch } from "vortex-ui";

const mockHistoryData: HistoryItemData[] = [
  {
    id: 1,
    type: "created",
    title: "Opportunity Created",
    tag: "New",
    tagType: "default",
    date: "12 Oct 2023",
    time: "10:00 AM",
    createdBy: "Alice Johnson",
  },
  {
    id: 2,
    type: "meeting",
    title: "Discovery Call",
    amount: "$50,000",
    date: "14 Oct 2023",
    time: "02:30 PM",
    createdBy: "Bob Smith",
    notes: "Discussed initial requirements and budget constraints.",
  },
  {
    id: 3,
    type: "proposal",
    title: "Proposal Sent",
    tag: "Pending",
    tagType: "default",
    amount: "$55,000",
    date: "18 Oct 2023",
    time: "11:15 AM",
    createdBy: "Alice Johnson",
  },
  {
    id: 4,
    type: "edit",
    title: "Stage Updated",
    notes: "Moved from 'Proposal' to 'Negotiation'.",
    date: "20 Oct 2023",
    time: "09:45 AM",
    createdBy: "Bob Smith",
  },
  {
    id: 5,
    type: "win",
    title: "Closed Won",
    tag: "Won",
    tagType: "success",
    amount: "$52,500",
    date: "25 Oct 2023",
    time: "04:20 PM",
    createdBy: "Alice Johnson",
    notes: "Contract signed, awaiting initial deposit.",
  },
];

const historyPropsList = [
  {
    name: "data",
    type: "HistoryItemData[]",
    default: "[]",
    description: "The array of history event items to render.",
  },
  {
    name: "isHorizontal",
    type: "boolean",
    default: "false",
    description:
      "If true, renders the timeline in a horizontal scrollable view.",
  },
  {
    name: "lineVariant",
    type: "'solid' | 'dashed' | 'dotted' | 'none'",
    default: "'solid'",
    description: "The style of the connecting lines between timeline events.",
  },
];

export default function HistoryDocs() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [lineVariant, setLineVariant] = useState<
    "solid" | "dashed" | "dotted" | "none"
  >("solid");

  return (
    <Box>
      <ComponentHeader
        title="History"
        description={
          <>
            A highly visual timeline component for rendering chronological
            events, audits, and stages. Supports both vertical lists and
            horizontal scrolling.
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
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mb: 4,
            flexWrap: "wrap",
            p: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <ToggleSwitch
            checked={isHorizontal}
            onChange={(checked) => setIsHorizontal(checked)}
            label="Horizontal Layout"
          />
          <ToggleSwitch
            checked={lineVariant === "dashed"}
            onChange={(checked) => setLineVariant(checked ? "dashed" : "solid")}
            label="Dashed Lines"
          />
          <ToggleSwitch
            checked={lineVariant === "dotted"}
            onChange={(checked) => setLineVariant(checked ? "dotted" : "solid")}
            label="Dotted Lines"
          />
        </Box>

        <Box
          sx={{
            maxWidth: isHorizontal ? "100%" : 600,
            margin: "0 auto",
            bgcolor: "background.paper",
            p: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <History
            data={mockHistoryData}
            isHorizontal={isHorizontal}
            lineVariant={lineVariant}
          />
        </Box>
      </ComponentPreview>

      <ComponentCode
        title="Usage"
        code={`import React from 'react';
import { History, HistoryItemData } from "vortex-ui";

const data: HistoryItemData[] = [
  {
    id: 1,
    type: "created",
    title: "Opportunity Created",
    date: "12 Oct 2023",
    time: "10:00 AM",
    createdBy: "Alice",
  },
  {
    id: 2,
    type: "meeting",
    title: "Discovery Call",
    notes: "Discussed initial requirements.",
  },
];

function HistoryExample() {
  return (
    <History 
      data={data} 
      isHorizontal={false} 
      lineVariant="dashed" 
    />
  );
}`}
      />

      <ComponentProps propsList={historyPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
