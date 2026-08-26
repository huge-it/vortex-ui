import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AutoPopulate } from "./AutoPopulate";
import { AutoPopulateItem } from "./AutoPopulateItem";

const meta: Meta<typeof AutoPopulate> = {
  title: "Components/AutoPopulate",
  component: AutoPopulate,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
    error: { control: "text" },
  },
};

export default meta;

export const Default: StoryObj<typeof AutoPopulate> = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <AutoPopulate
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <AutoPopulateItem value="samanta" subtitle="ABC Pvt Ltd">
          Samanta
        </AutoPopulateItem>
        <AutoPopulateItem value="samuel" subtitle="TK Solutions">
          Samuel
        </AutoPopulateItem>
        <AutoPopulateItem value="john" subtitle="Doe Enterprises">
          John
        </AutoPopulateItem>
      </AutoPopulate>
    );
  },
  args: {
    label: "Opportunity Name / Title *",
    bgColor: "#ffffff",
    fullWidth: true,
  },
};
