"use client";

import React, { useState } from "react";
import { Box, IconButton, Typography, alpha } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Tooltip } from "vortex-ui";

interface CodeBlockProps {
  children: string;
  title?: string;
  language?: string;
}

export function CodeBlock({ children, title, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        mb: 3,
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {(title || language) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? alpha(theme.palette.primary.main, 0.15)
                : alpha(theme.palette.primary.main, 0.1),
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontSize: "0.7rem",
            }}
          >
            {title || language}
          </Typography>
          <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
            <IconButton
              size="small"
              onClick={handleCopy}
              sx={{
                color: copied ? "success.main" : "text.secondary",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              {copied ? (
                <CheckIcon sx={{ fontSize: 16 }} />
              ) : (
                <ContentCopyIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )}
      {!title && !language && (
        <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: copied ? "success.main" : "text.secondary",
              "&:hover": {
                color: "primary.main",
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.12),
              },
            }}
          >
            {copied ? (
              <CheckIcon sx={{ fontSize: 16 }} />
            ) : (
              <ContentCopyIcon sx={{ fontSize: 16 }} />
            )}
          </IconButton>
        </Tooltip>
      )}
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? alpha(theme.palette.primary.main, 0.06)
              : alpha(theme.palette.primary.main, 0.04),
          p: 3,
          overflowX: "auto",
          fontFamily: "monospace",
          fontSize: "0.85rem",
          color: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.primary.light
              : theme.palette.primary.dark,
          lineHeight: 1.8,
        }}
      >
        <pre style={{ margin: 0 }}>{children}</pre>
      </Box>
    </Box>
  );
}
