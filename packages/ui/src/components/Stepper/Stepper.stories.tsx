import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    connectorStyle: {
      control: "radio",
      options: ["solid", "dashed"],
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const STEPS = [
  { label: "Select Campaign", description: "Choose objective", value: 1 },
  { label: "Create an Ad", description: "Design visuals", value: 2 },
  { label: "Verification", description: "Review and submit", value: 3 },
];

export const Horizontal: Story = {
  args: {
    steps: STEPS,
    value: 2,
    variant: "horizontal",
    size: "md",
  },
};

export const Vertical: Story = {
  args: {
    steps: STEPS,
    value: 2,
    variant: "vertical",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    steps: STEPS,
    value: 3,
    variant: "horizontal",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    steps: STEPS,
    value: 1,
    variant: "horizontal",
    size: "lg",
  },
};

export const DashedConnector: Story = {
  args: {
    steps: STEPS,
    value: 2,
    variant: "horizontal",
    connectorStyle: "dashed",
  },
};

export const WithoutLabels: Story = {
  args: {
    steps: STEPS,
    value: 2,
    variant: "horizontal",
    showLabels: false,
  },
};
