import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "neutral", "success", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Primary Link",
    href: "#",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Link",
    href: "#",
    variant: "secondary",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Link with Icons",
    href: "#",
    startIcon: <AddIcon />,
    endIcon: <ArrowForwardIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Link",
    href: "#",
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
      <Link variant="primary">Primary Link</Link>
      <Link variant="secondary">Secondary Link</Link>
      <Link variant="neutral">Neutral Link</Link>
      <Link variant="success">Success Link</Link>
      <Link variant="danger">Danger Link</Link>
    </Box>
  ),
};
