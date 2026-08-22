import React from 'react';
import { Box, Typography } from '@mui/material';
import { ComponentHeader } from '../../../components/docs/ComponentHeader';

export default function IconButtonDocs() {
  return (
    <Box>
      <ComponentHeader
        title="IconButton"
        description={<>Documentation for IconButton is coming soon.</>}
      />
      <Typography variant="body1" sx={{ mt: 4 }}>
        This component is currently being migrated to Vortex UI.
      </Typography>
    </Box>
  );
}
