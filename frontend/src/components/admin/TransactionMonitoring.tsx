import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

interface Transaction {
  id: string;
  timestamp: string;
  type: string;
  amount: number;
  status: 'flagged' | 'normal' | 'blocked';
}

export const TransactionMonitoring: React.FC = () => {
  const [transactions] = React.useState<Transaction[]>([
    { id: '1', timestamp: '2025-12-05 10:30', type: 'Transfer', amount: 5000, status: 'flagged' },
    { id: '2', timestamp: '2025-12-05 10:25', type: 'Deposit', amount: 1000, status: 'normal' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Transaction Monitoring
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Timestamp</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell>{txn.timestamp}</TableCell>
                  <TableCell>{txn.type}</TableCell>
                  <TableCell>${txn.amount}</TableCell>
                  <TableCell>
                    <Chip
                      label={txn.status}
                      color={txn.status === 'flagged' ? 'warning' : txn.status === 'blocked' ? 'error' : 'success'}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default TransactionMonitoring;
