import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { accountsApi } from '../../services/api';

interface DashboardData {
  userName: string;
  balance: number;
  recentTransactions: Array<{
    description: string;
    amount: number;
    date: number;
  }>;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const Dashboard = () => {
  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: () => accountsApi.getDashboard().then(res => res.data)
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">Error loading dashboard data</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Section */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              mb: 2,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome back, {data?.userName}!
            </Typography>
            <Typography color="textSecondary">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Typography>
          </Paper>
        </Grid>

        {/* Balance Card */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 200,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Total Balance
            </Typography>
            <Typography component="p" variant="h3">
              {data?.balance ? formatCurrency(data.balance) : '$0.00'}
            </Typography>
          </Paper>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Recent Transactions
            </Typography>
            {data?.recentTransactions?.map((transaction, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1,
                  borderBottom: index < data.recentTransactions.length - 1 ? 1 : 0,
                  borderColor: 'divider',
                }}
              >
                <Box>
                  <Typography variant="body1">{transaction.description}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(transaction.date).toLocaleDateString()}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color={transaction.amount >= 0 ? 'success.main' : 'error.main'}
                >
                  {formatCurrency(transaction.amount)}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};