import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CountBadge } from "./CountBadge";

const meta: Meta<typeof CountBadge> = {
  title: "Components/Badge/CountBadge",
  component: CountBadge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    active: { control: "boolean" },
    activeBg: { control: "color" },
    activeColor: { control: "color" },
    inactiveBg: { control: "color" },
    inactiveColor: { control: "color" },
    count: { control: "number" },
    maxCount: { control: "number" },
    size: { control: "number" },
    fontSize: { control: "number" },
    fontWeight: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof CountBadge>;

export const Inactive: Story = {
  args: {
    count: 5,
    active: false,
  },
};

export const Active: Story = {
  args: {
    count: 12,
    active: true,
  },
};

export const ExceedingMaxCount: Story = {
  args: {
    count: 15,
    maxCount: 9,
    active: true,
  },
};

export const CustomColors: Story = {
  args: {
    count: 3,
    active: true,
    activeBg: "#FF4750",
    activeColor: "#FFFFFF",
  },
};
