import React from 'react';
import { Typography } from '@mui/material';

export interface ComponentHeaderProps {
  title: string;
  description: React.ReactNode;
}

export function ComponentHeader({ title, description }: ComponentHeaderProps) {
  return (
    <>
      <Typography
        variant="h1"
        color="text.primary"
        sx={{
          fontWeight: 800,
          mb: 1,
          fontSize: '2.5rem',
          letterSpacing: '-0.03em',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, fontSize: '1.1rem' }}
      >
        {description}
      </Typography>
    </>
  );
}
