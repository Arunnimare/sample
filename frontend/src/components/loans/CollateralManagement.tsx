import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { Apartment } from '@mui/icons-material';

export const CollateralManagement: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Collateral Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Apartment sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                <Typography variant="h6">Property</Typography>
              </Box>
              <Typography color="textSecondary">Appraised Value: $350,000</Typography>
              <Typography color="textSecondary">Status: Verified</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CollateralManagement;
