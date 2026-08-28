import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { History } from "./History";
import { HistoryItemData } from "./History.types";

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

const meta: Meta<typeof History> = {
  title: "Components/History",
  component: History,
  tags: ["autodocs"],
  argTypes: {
    isHorizontal: { control: "boolean" },
    lineVariant: {
      control: "select",
      options: ["solid", "dashed", "dotted", "none"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof History>;

export const Vertical: Story = {
  args: {
    data: mockHistoryData,
    isHorizontal: false,
    lineVariant: "solid",
  },
};

export const Horizontal: Story = {
  args: {
    data: mockHistoryData,
    isHorizontal: true,
    lineVariant: "solid",
  },
};

export const DashedLine: Story = {
  args: {
    data: mockHistoryData,
    isHorizontal: false,
    lineVariant: "dashed",
  },
};

export const DottedLine: Story = {
  args: {
    data: mockHistoryData,
    isHorizontal: false,
    lineVariant: "dotted",
  },
};
