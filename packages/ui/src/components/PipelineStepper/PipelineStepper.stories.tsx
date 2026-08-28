import type { Meta, StoryObj } from "@storybook/react";
import { PipelineStepper } from "./PipelineStepper";

const meta = {
  title: "Components/PipelineStepper",
  component: PipelineStepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PipelineStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stages: [
      { label: "Draft", value: 1 },
      { label: "New", value: 2 },
      { label: "Open", value: 3 },
      { label: "Proposal", value: 4 },
      { label: "Won", value: 5 },
    ],
    value: 3,
    width: 600,
  },
};

export const FirstStage: Story = {
  args: {
    stages: [
      { label: "Draft", value: 1 },
      { label: "New", value: 2 },
      { label: "Open", value: 3 },
      { label: "Proposal", value: 4 },
      { label: "Won", value: 5 },
    ],
    value: 1,
    width: 600,
  },
};

export const Completed: Story = {
  args: {
    stages: [
      { label: "Draft", value: 1 },
      { label: "New", value: 2 },
      { label: "Open", value: 3 },
      { label: "Proposal", value: 4 },
      { label: "Won", value: 5 },
    ],
    value: 6, // A value greater than the last stage to show all as completed? Or just 5 to show the last one as active/completed (which are the same color now)
    width: 600,
  },
};
