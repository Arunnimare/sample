import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid } from '@mui/material';
import { Warning } from '@mui/icons-material';

export const DisputeResolutionAML: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Dispute Resolution & AML
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Warning sx={{ mr: 1, color: 'warning.main' }} />
                <Typography variant="h6">Active Disputes</Typography>
              </Box>
              <Typography variant="h4">23</Typography>
              <Typography color="textSecondary">Pending Resolution</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Warning sx={{ mr: 1, color: 'error.main' }} />
                <Typography variant="h6">AML Alerts</Typography>
              </Box>
              <Typography variant="h4">7</Typography>
              <Typography color="textSecondary">Requiring Review</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DisputeResolutionAML;
