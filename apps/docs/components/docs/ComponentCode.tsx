"use client";

import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

interface ComponentCodeProps {
  code: string;
  title?: string;
}

const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export function ComponentCode({ title, code }: ComponentCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {title && (
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ fontWeight: 600, mb: 2, fontSize: "1.25rem" }}
        >
          {title}
        </Typography>
      )}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "background.paper",
          color: "text.primary",
          p: 2.5,
          borderRadius: "12px",
          fontFamily:
            'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
          fontSize: "0.875rem",
          overflowX: "auto",
          whiteSpace: "pre",
          mb: 4,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Tooltip title={copied ? "Copied!" : "Copy Code"} placement="top">
          <IconButton
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
                backgroundColor: "action.hover",
              },
            }}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </IconButton>
        </Tooltip>
        <code style={{ fontFamily: "inherit" }}>{code}</code>
      </Box>
    </>
  );
}
