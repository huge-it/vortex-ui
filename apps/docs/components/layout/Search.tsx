'use client';

import React from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export function Search() {
  return (
    <Box sx={{ width: 220 }}>
      <TextField
        placeholder="Search docs..."
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ color: 'text.disabled', fontSize: '11px', fontWeight: 600 }}>
                <kbd style={{ fontFamily: "monospace", padding: "2px 6px", borderRadius: "4px", backgroundColor: "var(--mui-palette-action-hover)" }}>Ctrl K</kbd>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: 'action.hover',
            border: 'none',
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid',
              borderColor: 'primary.main',
            },
          },
        }}
      />
    </Box>
  );
}
