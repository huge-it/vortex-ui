import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost", "text"],
    },
    severity: {
      control: "select",
      options: ["primary", "error", "success", "info", "warning"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text Button",
  },
};

export const ErrorSeverity: Story = {
  args: {
    severity: "error",
    children: "Error Button",
  },
};

export const Loading: Story = {
  args: {
    severity: "info",
    loading: true,
    children: "Loading Button",
  },
};

export const Disabled: Story = {
  args: {
    severity: "success",
    disabled: true,
    children: "Disabled Button",
  },
};
