import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../Button/Button";
import { Box, Typography } from "@mui/material";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    open: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    type: { control: "text" },
    anchor: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    width: { control: "number" },
    showFooter: { control: "boolean" },
    showHeaderActions: { control: "boolean" },
    requireConfirmOnClose: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Wrapper to manage the drawer state since it needs to be opened/closed
const DrawerWithState = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="filled" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {
          console.log("Submitted");
          setOpen(false);
        }}
      >
        <Box
          sx={{
            p: 3,
            textAlign: "center",
            border: "1px dashed #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Custom drawer content goes here.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export const CreateModeHeaderActions: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Settings",
    subtitle: "Manage your preferences",
    type: "Edit",
    anchor: "right",
    width: 500,
    showFooter: true,
    showHeaderActions: true,
  },
};

export const CreateModeFooterActions: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Settings",
    subtitle: "Manage your preferences",
    type: "Edit",
    anchor: "right",
    width: 500,
    showFooter: true,
    showHeaderActions: false, // Pushes actions to the footer
  },
};

export const ViewModeFooterClose: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "User Details",
    subtitle: "View only mode",
    type: "View",
    anchor: "right",
    width: 500,
    showFooter: true,
    showHeaderActions: false, // Close button in footer
  },
};

export const ViewModeHeaderIconOnly: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "User Details",
    subtitle: "View only mode",
    type: "View",
    anchor: "right",
    width: 500,
    showHeaderActions: true, // Shows only the CloseIcon in the header for View mode
  },
};

export const TopAnchor: Story = {
  render: (args) => <DrawerWithState {...args} />,
  args: {
    title: "Quick Actions",
    anchor: "top",
  },
};
