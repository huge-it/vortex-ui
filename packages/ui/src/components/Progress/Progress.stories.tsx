import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    showValue: { control: "boolean" },
    valuePosition: {
      control: "select",
      options: ["right", "top", "inside"],
    },
    variant: {
      control: "select",
      options: ["default", "stepper"],
    },
    height: { control: "number" },
    steps: { control: "number" },
    stepJump: { control: "number" },
    animationDuration: { control: "number" },
    bgColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    showValue: true,
  },
};

export const Stepper: Story = {
  args: {
    value: 60,
    variant: "stepper",
    steps: 5,
    showValue: true,
  },
};

export const InsideValue: Story = {
  args: {
    value: 75,
    showValue: true,
    valuePosition: "inside",
    height: 16,
  },
};

export const StepJump: Story = {
  args: {
    value: 80,
    stepJump: 20,
    showValue: true,
    valuePosition: "right"
  },
};
