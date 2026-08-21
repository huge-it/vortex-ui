'use client';

import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  name: string;
  href: string;
}

const componentItems: SidebarItem[] = [
  { name: 'Button', href: '/components/button' },
  { name: 'Input', href: '/components/input' },
  { name: 'Select', href: '/components/select' },
  { name: 'Modal', href: '/components/modal' },
  { name: 'DataTable', href: '/components/table' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: 260,
        flexShrink: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        height: 'calc(100vh - 64px)',
        position: 'sticky',
        top: 64,
        backgroundColor: 'background.paper',
        overflowY: 'auto',
        p: 2,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          textTransform: 'uppercase',
          color: 'text.secondary',
          letterSpacing: '0.05em',
          px: 2,
          mb: 1,
        }}
      >
        Components
      </Typography>
      <List>
        {componentItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={isActive}
                sx={{
                  borderRadius: '8px',
                  color: isActive ? 'primary.main' : 'text.primary',
                  fontWeight: isActive ? 600 : 500,
                  backgroundColor: isActive ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                  '&:hover': {
                    backgroundColor: isActive
                      ? 'rgba(99, 102, 241, 0.12)'
                      : 'rgba(241, 245, 249, 0.6)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(99, 102, 241, 0.08)',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    },
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  slotProps={{
                    primary: {
                      style: {
                        fontWeight: isActive ? 600 : 500,
                        fontSize: '0.875rem',
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
