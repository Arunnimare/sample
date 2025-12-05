import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import { AccountBalance, Info } from '@mui/icons-material';

interface AccountDetail {
  accountNumber: string;
  type: string;
  balance: number;
  interest: number;
  openDate: string;
}

export const AccountDetails: React.FC = () => {
  const [account] = React.useState<AccountDetail>({
    accountNumber: '1234567890',
    type: 'Savings',
    balance: 15000.50,
    interest: 2.5,
    openDate: '2020-05-15',
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Account Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalance sx={{ fontSize: 32, mr: 2, color: 'primary.main' }} />
                <Typography variant="h6">Account Information</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Account Number" value={account.accountNumber} disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Account Type" value={account.type} disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Current Balance" value={`$${account.balance.toFixed(2)}`} disabled />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Interest Rate" value={`${account.interest}%`} disabled />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Account Open Date" value={account.openDate} disabled />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountDetails;
