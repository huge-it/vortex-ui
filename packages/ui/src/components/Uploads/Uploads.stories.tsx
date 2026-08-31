import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { DragDropUpload } from "./DragDropUpload";
import { UploadButton } from "./UploadButton";
import { FileItem } from "./Uploads.types";
import { Box, Typography } from "@mui/material";

const meta = {
  title: "Components/Uploads",
  component: DragDropUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DragDropUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper to manage state in stories
const DragDropUploadStateWrapper = (args: any) => {
  const [files, setFiles] = useState<FileItem[]>(args.value || []);
  return (
    <Box sx={{ width: 400 }}>
      <DragDropUpload {...args} value={files} onChange={setFiles} />
    </Box>
  );
};

const UploadButtonStateWrapper = (args: any) => {
  const [files, setFiles] = useState<FileItem[]>(args.value || []);
  return (
    <Box sx={{ width: 400 }}>
      <UploadButton {...args} value={files} onChange={setFiles} />
    </Box>
  );
};

export const DefaultDragDropUpload: Story = {
  render: (args) => <DragDropUploadStateWrapper {...args} />,
  args: {
    label: "Upload Documents",
    helperText: "Supports PDF, DOCX, etc. Max 10MB.",
    multiple: true,
  },
};

export const ImageDragDropPreview: Story = {
  render: (args) => <DragDropUploadStateWrapper {...args} />,
  args: {
    label: "Upload Images",
    fileTypes: "image",
    imgPreview: true,
    multiple: true,
    helperText: "Upload photos to see the grid preview.",
  },
};

export const SingleDragDropUpload: Story = {
  render: (args) => <DragDropUploadStateWrapper {...args} />,
  args: {
    label: "Profile Picture",
    multiple: false,
    maxFiles: 1,
    fileTypes: "image",
    imgPreview: true,
  },
};

export const DragDropUploadWithError: Story = {
  render: (args) => <DragDropUploadStateWrapper {...args} />,
  args: {
    label: "Upload Resume",
    error: "This field is required.",
    required: true,
  },
};

export const DefaultUploadButton: Story = {
  render: (args) => <UploadButtonStateWrapper {...args} />,
  args: {
    label: "Upload File",
    multiple: true,
  },
};

export const UploadButtonImagePreview: Story = {
  render: (args) => <UploadButtonStateWrapper {...args} />,
  args: {
    label: "Upload Photos",
    fileTypes: "image",
    imgPreview: true,
    multiple: true,
    variant: "contained",
    color: "primary",
  },
};

export const UploadButtonDisabled: Story = {
  render: (args) => <UploadButtonStateWrapper {...args} />,
  args: {
    label: "Upload Disabled",
    disabled: true,
  },
};
