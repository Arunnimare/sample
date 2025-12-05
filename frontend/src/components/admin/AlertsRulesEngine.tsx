import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

interface AlertRule {
  id: string;
  name: string;
  condition: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  enabled: boolean;
}

export const AlertsRulesEngine: React.FC = () => {
  const [rules] = useState<AlertRule[]>([
    { id: '1', name: 'High Transaction Volume', condition: 'Volume > $100k', severity: 'high', enabled: true },
    { id: '2', name: 'Failed Login Attempts', condition: 'Failures > 5', severity: 'critical', enabled: true },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Alert Rules Engine
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Rule Name</strong></TableCell>
                <TableCell><strong>Condition</strong></TableCell>
                <TableCell><strong>Severity</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell>{rule.name}</TableCell>
                  <TableCell>{rule.condition}</TableCell>
                  <TableCell>{rule.severity}</TableCell>
                  <TableCell>{rule.enabled ? 'Enabled' : 'Disabled'}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small">Edit</Button>
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

export default AlertsRulesEngine;
