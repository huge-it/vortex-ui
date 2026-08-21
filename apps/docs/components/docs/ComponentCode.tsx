'use client';

import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

interface ComponentCodeProps {
  code: string;
}

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export function ComponentCode({ code }: ComponentCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'background.default',
        color: 'text.primary',
        p: 2.5,
        borderRadius: '12px',
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: '0.875rem',
        overflowX: 'auto',
        whiteSpace: 'pre',
        mb: 4,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Tooltip title={copied ? 'Copied!' : 'Copy Code'} placement="top">
        <IconButton
          onClick={handleCopy}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text.secondary',
            '&:hover': {
              color: 'text.primary',
              backgroundColor: 'action.hover',
            },
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
      <code style={{ fontFamily: 'inherit' }}>{code}</code>
    </Box>
  );
}
