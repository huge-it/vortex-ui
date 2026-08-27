import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import React from "react";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular", "rounded", "card", "list-item", "table-row", "profile", "cascading"],
    },
    animation: {
      control: "select",
      options: ["pulse", "wave", false],
    },
    rounded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "text",
    width: 210,
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 60,
    height: 60,
  },
};

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 210,
    height: 118,
  },
};

export const RectangularRounded: Story = {
  args: {
    variant: "rectangular",
    width: 210,
    height: 118,
    rounded: true,
  },
};

export const Card: Story = {
  args: {
    variant: "card",
    width: 300,
  },
};

export const CardHorizontal: Story = {
  args: {
    variant: "card",
    orientation: "horizontal",
    width: 400,
  },
};

export const Profile: Story = {
  args: {
    variant: "profile",
    width: 300,
  },
};

export const ListItem: Story = {
  args: {
    variant: "list-item",
    width: 300,
  },
};

export const TableRow: Story = {
  args: {
    variant: "table-row",
    rows: 3,
    cols: 4,
    sx: { width: 500 },
  },
};

export const Cascading: Story = {
  args: {
    variant: "cascading",
    width: 300,
  },
};
