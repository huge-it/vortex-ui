import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { useState } from "react";
import { Box } from "@mui/material";
import { ButtonGroupValue } from "./ButtonGroup.types";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulButtonGroup = (args: any) => {
  const [value, setValue] = useState<ButtonGroupValue | undefined>();
  
  return (
    <Box sx={{ width: 400, p: 4 }}>
      <ButtonGroup {...args} value={value} onChange={setValue} />
    </Box>
  );
};

export const IconsOnly: Story = {
  render: (args) => <StatefulButtonGroup {...args} />,
  args: {
    variant: "icon",
  },
};

export const TextOnly: Story = {
  render: (args) => <StatefulButtonGroup {...args} />,
  args: {
    variant: "text",
  },
};

export const Both: Story = {
  render: (args) => <StatefulButtonGroup {...args} />,
  args: {
    variant: "both",
  },
};

export const Small: Story = {
  render: (args) => <StatefulButtonGroup {...args} />,
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  render: (args) => <StatefulButtonGroup {...args} />,
  args: {
    disabled: true,
  },
};
