import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, LineChart, BarChart } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

export const UsageAnalytics: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Usage Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                <Typography variant="h6">API Calls This Month</Typography>
              </Box>
              <Typography variant="h5">45,230</Typography>
              <Typography color="textSecondary">+12% from last month</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />
                <Typography variant="h6">Average Response Time</Typography>
              </Box>
              <Typography variant="h5">145ms</Typography>
              <Typography color="textSecondary">Within SLA</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UsageAnalytics;
