import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

interface Role {
  id: string;
  name: string;
  permissions: number;
  users: number;
}

export const RBACManagement: React.FC = () => {
  const [roles] = React.useState<Role[]>([
    { id: '1', name: 'Admin', permissions: 50, users: 5 },
    { id: '2', name: 'Manager', permissions: 30, users: 12 },
    { id: '3', name: 'User', permissions: 10, users: 200 },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        RBAC Management
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>Role Name</strong></TableCell>
                <TableCell><strong>Permissions</strong></TableCell>
                <TableCell><strong>Users</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.permissions}</TableCell>
                  <TableCell>{role.users}</TableCell>
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

export default RBACManagement;
