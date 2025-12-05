import React from 'react';
import { TableRow, TableCell, Typography, Chip, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

interface TransactionRowProps {
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  status: 'completed' | 'pending' | 'failed';
}

export const TransactionRow: React.FC<TransactionRowProps> = ({
  date,
  description,
  amount,
  type,
  status,
}) => {
  const isCredit = type === 'credit';

  return (
    <TableRow hover>
      <TableCell>
        <Typography variant="body2">{date}</Typography>
      </TableCell>
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {isCredit ? (
            <ArrowDownward sx={{ color: 'success.main' }} />
          ) : (
            <ArrowUpward sx={{ color: 'error.main' }} />
          )}
          <Typography variant="body2">{description}</Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <Typography
          variant="body2"
          sx={{ color: isCredit ? 'success.main' : 'error.main', fontWeight: 'bold' }}
        >
          {isCredit ? '+' : '-'}${amount.toFixed(2)}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Chip
          label={status}
          size="small"
          color={
            status === 'completed'
              ? 'success'
              : status === 'pending'
              ? 'warning'
              : 'error'
          }
          variant="outlined"
        />
      </TableCell>
    </TableRow>
  );
};

export default TransactionRow;
