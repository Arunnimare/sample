import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'debit' | 'credit';
  balance: number;
}

export const Transactions: React.FC = () => {
  const [transactions] = React.useState<Transaction[]>([
    { id: '1', date: '2025-12-05', description: 'Salary Deposit', amount: 3000, type: 'credit', balance: 5420.50 },
    { id: '2', date: '2025-12-04', description: 'Online Purchase', amount: 125.50, type: 'debit', balance: 2420.50 },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        My Transactions
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Balance</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>{txn.description}</TableCell>
                  <TableCell>${txn.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Chip
                      label={txn.type}
                      color={txn.type === 'credit' ? 'success' : 'error'}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>${txn.balance.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Transactions;
