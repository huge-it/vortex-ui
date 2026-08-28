import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./index";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    singleOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  args: {
    title: "Accordion Title",
    count: 5,
    items: ["Item 1", "Item 2", "Item 3"],
  },
};

export const Multiple: Story = {
  args: {
    data: [
      {
        title: "Section 1",
        count: 3,
        items: ["First item", "Second item", "Third item"],
      },
      {
        title: "Section 2",
        count: 2,
        items: ["Fourth item", "Fifth item"],
      },
      {
        title: "Section 3 (Empty)",
        items: [],
      },
    ],
  },
};

export const SingleOpen: Story = {
  args: {
    singleOpen: true,
    data: [
      {
        title: "Panel 1",
        items: ["Only one panel can be open at a time in this mode."],
      },
      {
        title: "Panel 2",
        items: ["Opening this panel will close the others."],
      },
      {
        title: "Panel 3",
        items: ["This is the third panel."],
      },
    ],
  },
};

export const CustomChildren: Story = {
  args: {
    title: "Custom Content",
    children: "This is a custom ReactNode content inside the accordion instead of a list of items.",
  },
};
