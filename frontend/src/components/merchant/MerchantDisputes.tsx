import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Dispute {
  id: string;
  date: string;
  amount: number;
  reason: string;
  status: string;
}

export const MerchantDisputes: React.FC = () => {
  const [disputes] = React.useState<Dispute[]>([
    { id: '1', date: '2025-12-01', amount: 250, reason: 'Customer Complaint', status: 'Open' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Disputes & Chargebacks
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Reason</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {disputes.map((d) => (
                <TableRow key={d.id}>
                  <TableCell>{d.date}</TableCell>
                  <TableCell>${d.amount}</TableCell>
                  <TableCell>{d.reason}</TableCell>
                  <TableCell>{d.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default MerchantDisputes;
