import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, TextField, Button, Grid, Select, MenuItem } from '@mui/material';
import { Send } from '@mui/icons-material';

export const TransferFunds: React.FC = () => {
  const [toAccount, setToAccount] = React.useState('');
  const [amount, setAmount] = React.useState('');

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Transfer Funds
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Send sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h6">Send Money</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="From Account" defaultValue="Checking - $5,420.50" disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="To Account"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
              >
                <MenuItem value="savings">Savings - $15,000.00</MenuItem>
                <MenuItem value="external">External Account</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Transfer Now
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TransferFunds;
