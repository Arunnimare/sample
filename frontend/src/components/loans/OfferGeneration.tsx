import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

export const OfferGeneration: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Loan Offer Generation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6">Auto-Generated Offer</Typography>
              </Box>
              <Typography color="textSecondary">Loan Amount: $50,000</Typography>
              <Typography color="textSecondary">Interest Rate: 4.5% - 6.2%</Typography>
              <Typography color="textSecondary">Term: 12-60 months</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OfferGeneration;
