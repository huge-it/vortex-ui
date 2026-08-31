"use client";

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ComponentHeader } from "@docs/ComponentHeader";
import { ComponentPreview } from "@docs/ComponentPreview";
import { ComponentCode } from "@docs/ComponentCode";
import { ComponentProps } from "@docs/ComponentProps";
import { ComponentInstallation } from "@docs/ComponentInstallation";
import { Divider } from "@mui/material";
import { ToggleSwitch } from "vortex-ui";
import { DragDropUpload, UploadButton, FileItem } from "vortex-ui";

const uploadPropsList = [
  {
    name: "value",
    type: "FileItem[]",
    default: "[]",
    description: "Array of file objects.",
  },
  {
    name: "onChange",
    type: "(files: FileItem[]) => void",
    default: "undefined",
    description: "Callback fired when files change.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "If true, the upload is disabled.",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "true",
    description: "If true, multiple files can be selected.",
  },
  {
    name: "maxFiles",
    type: "number",
    default: "undefined",
    description: "Maximum number of files allowed.",
  },
  {
    name: "maxSizeMB",
    type: "number",
    default: "10",
    description: "Maximum size per file in MB.",
  },
  {
    name: "label",
    type: "string",
    default: "undefined",
    description: "Label for the upload component.",
  },
  {
    name: "fileTypes",
    type: "'all' | 'image' | 'document'",
    default: "'all'",
    description: "Allowed file types.",
  },
  {
    name: "imgPreview",
    type: "boolean",
    default: "false",
    description: "If true, shows an image preview grid instead of a list for images.",
  },
];

export default function UploadsDocs() {
  const [imgPreview, setImgPreview] = useState(false);

  // States for each variant
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([]);
  const [uploadedFilesSingle, setUploadedFilesSingle] = useState<FileItem[]>([]);
  const [uploadedFilesMulti, setUploadedFilesMulti] = useState<FileItem[]>([]);
  const [uploadedFilesDocs, setUploadedFilesDocs] = useState<FileItem[]>([]);

  return (
    <Box>
      <ComponentHeader
        title="Uploads"
        description={
          <>
            A set of components for handling file uploads, including
            drag-and-drop and button triggers.
          </>
        }
      />

      <Stack spacing={4} sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ToggleSwitch
            checked={imgPreview}
            onChange={setImgPreview}
            variant="md"
            label="Image Preview"
          />
        </Box>

        {/* FileUpload (Drag & Drop) */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Drag & Drop Upload
          </Typography>
          <ComponentPreview>
            <DragDropUpload
              label="Attachments"
              value={uploadedFiles}
              onChange={setUploadedFiles}
              multiple={true}
              maxSizeMB={50}
              fileTypes="image"
              imgPreview={imgPreview}
            />
          </ComponentPreview>
        </Box>

        {/* UploadButton (Single) */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Upload (Single)
          </Typography>
          <ComponentPreview>
            <UploadButton
              label="Upload"
              value={uploadedFilesSingle}
              onChange={setUploadedFilesSingle}
              multiple={false}
              maxSizeMB={10}
              fileTypes="image"
              imgPreview={imgPreview}
            />
          </ComponentPreview>
        </Box>

        {/* UploadButton (Multiple) */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Upload (Multiple)
          </Typography>
          <ComponentPreview>
            <UploadButton
              label="Upload"
              value={uploadedFilesMulti}
              onChange={setUploadedFilesMulti}
              multiple={true}
              maxSizeMB={10}
              fileTypes="image"
              imgPreview={imgPreview}
            />
          </ComponentPreview>
        </Box>

        {/* UploadButton (Documents) */}
        <Box>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
          >
            Upload (Documents)
          </Typography>
          <ComponentPreview>
            <DragDropUpload
              label="Upload Documents"
              value={uploadedFilesDocs}
              onChange={setUploadedFilesDocs}
              multiple={true}
              maxSizeMB={20}
              fileTypes="document"
            />
          </ComponentPreview>
        </Box>
      </Stack>

      <ComponentCode
        title="Usage"
        code={`import { useState } from "react";
import { Box } from "@mui/material";
import { DragDropUpload, UploadButton, FileItem } from "vortex-ui";

function Example() {
  const [files, setFiles] = useState<FileItem[]>([]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <DragDropUpload
        label="Upload Documents"
        value={files}
        onChange={setFiles}
        multiple={true}
        maxSizeMB={20}
      />
      
      <UploadButton
        label="Upload Images"
        value={files}
        onChange={setFiles}
        fileTypes="image"
        imgPreview={true}
      />
    </Box>
  );
}`}
      />

      <ComponentProps propsList={uploadPropsList} />

      <Divider sx={{ my: 4 }} />

      <ComponentInstallation />
    </Box>
  );
}
