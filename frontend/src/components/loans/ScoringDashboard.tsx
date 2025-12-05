import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { BarChart, BarChartIcon } from '@mui/icons-material';

export const ScoringDashboard: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Scoring Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">Credit Score</Typography>
              <Typography variant="h5">750</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">Debt-to-Income</Typography>
              <Typography variant="h5">32%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">Employment Score</Typography>
              <Typography variant="h5">85/100</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">Overall Rating</Typography>
              <Typography variant="h5">A+</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScoringDashboard;
