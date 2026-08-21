import React from 'react';
import { Box, Typography } from '@mui/material';

interface ComponentVariantsProps {
  variants: {
    name: string;
    element: React.ReactNode;
  }[];
}

export function ComponentVariants({ variants }: ComponentVariantsProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={4}>
      <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 1, fontSize: '1.25rem' }}>
        Variants
      </Typography>
      <Box display="flex" gap={3} flexWrap="wrap" alignItems="center">
        {variants.map((v) => (
          <Box key={v.name} display="flex" flexDirection="column" alignItems="center" gap={1}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px',
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '120px',
              }}
            >
              {v.element}
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              {v.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
