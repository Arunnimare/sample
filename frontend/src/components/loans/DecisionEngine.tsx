import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';

export const DecisionEngine: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Loan Decision Engine
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Credit Score: 750</Typography>
              <Typography color="textSecondary" sx={{ mb: 1 }}>Risk Level: Low</Typography>
              <Typography color="textSecondary">Max Loan: $100,000</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>Approve</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DecisionEngine;
