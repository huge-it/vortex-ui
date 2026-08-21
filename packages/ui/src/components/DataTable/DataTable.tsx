import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography
} from '@mui/material';
import { DataTableProps } from './DataTable.types';

export const DataTable = React.forwardRef<HTMLDivElement, DataTableProps>(
  ({ columns, data, isLoading = false, emptyMessage = 'No data available' }, ref) => {
    return (
      <TableContainer ref={ref} component={Paper} variant="outlined" sx={{ overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'background.default' }}>
              {columns.map((col) => (
                <TableCell key={col.key} align={col.align || 'left'} sx={{ fontWeight: 600 }}>
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 6 }}>
                  <CircularProgress size={32} />
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {emptyMessage}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, idx) => (
                <TableRow key={row.id || idx} hover sx={{ transition: 'background-color 0.2s' }}>
                  {columns.map((col) => {
                    const val = row[col.key];
                    return (
                      <TableCell key={col.key} align={col.align || 'left'}>
                        {col.render ? col.render(row) : val}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);

DataTable.displayName = 'DataTable';
export type { DataTableProps };
