import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

export const FraudInvestigation: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Fraud Investigation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">
                Suspicious Transactions
              </Typography>
              <Typography variant="h6">142</Typography>
              <Button variant="text" size="small" startIcon={<Search />}>
                Investigate
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">
                Cases Under Review
              </Typography>
              <Typography variant="h6">34</Typography>
              <Button variant="text" size="small">View</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">
                Resolved Cases
              </Typography>
              <Typography variant="h6">287</Typography>
              <Button variant="text" size="small">Details</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" variant="body2">
                Amount Recovered
              </Typography>
              <Typography variant="h6">$89.2K</Typography>
              <Button variant="text" size="small">Report</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FraudInvestigation;
