import React from 'react';
import { Box, Typography } from '@mui/material';

interface ComponentStatesProps {
  states: {
    name: string;
    element: React.ReactNode;
  }[];
}

export function ComponentStates({ states }: ComponentStatesProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={4}>
      <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 600, mb: 1, fontSize: '1.25rem' }}>
        States
      </Typography>
      <Box display="flex" gap={3} flexWrap="wrap" alignItems="center">
        {states.map((s) => (
          <Box key={s.name} display="flex" flexDirection="column" alignItems="center" gap={1}>
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
              {s.element}
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
              {s.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
