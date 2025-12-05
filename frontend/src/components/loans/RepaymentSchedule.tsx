import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface RepaymentSchedule {
  dueDate: string;
  principal: number;
  interest: number;
  total: number;
  status: string;
}

export const RepaymentSchedule: React.FC = () => {
  const [schedule] = React.useState<RepaymentSchedule[]>([
    { dueDate: '2025-01-15', principal: 500, interest: 25, total: 525, status: 'Paid' },
    { dueDate: '2025-02-15', principal: 500, interest: 20, total: 520, status: 'Upcoming' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Repayment Schedule
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Due Date</strong></TableCell>
                <TableCell><strong>Principal</strong></TableCell>
                <TableCell><strong>Interest</strong></TableCell>
                <TableCell><strong>Total</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedule.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.dueDate}</TableCell>
                  <TableCell>${item.principal}</TableCell>
                  <TableCell>${item.interest}</TableCell>
                  <TableCell>${item.total}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default RepaymentSchedule;
