import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Card, CardContent, Grid } from '@mui/material';

interface Account {
  id: string;
  number: string;
  type: string;
  balance: number;
  status: string;
}

export const AccountsList: React.FC = () => {
  const [accounts] = React.useState<Account[]>([
    { id: '1', number: '1234567890', type: 'Checking', balance: 5420.50, status: 'Active' },
    { id: '2', number: '1234567891', type: 'Savings', balance: 15000.00, status: 'Active' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        My Accounts
      </Typography>
      <Grid container spacing={2}>
        {accounts.map((account) => (
          <Grid item xs={12} sm={6} key={account.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {account.type}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Account: {account.number}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                  ${account.balance.toFixed(2)}
                </Typography>
                <Typography color="success.main">{account.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccountsList;
