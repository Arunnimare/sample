import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  result: string;
}

export const AuditTrail: React.FC = () => {
  const [logs] = React.useState<AuditLog[]>([
    { id: '1', timestamp: '2025-12-05 10:30:00', user: 'admin', action: 'CREATE', resource: 'User', result: 'SUCCESS' },
    { id: '2', timestamp: '2025-12-05 10:25:00', user: 'admin', action: 'UPDATE', resource: 'Account', result: 'SUCCESS' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Audit Trail
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Timestamp</strong></TableCell>
                <TableCell><strong>User</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
                <TableCell><strong>Resource</strong></TableCell>
                <TableCell><strong>Result</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.resource}</TableCell>
                  <TableCell>{log.result}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AuditTrail;
