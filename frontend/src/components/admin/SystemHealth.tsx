import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, LinearProgress } from '@mui/material';
import { CheckCircle, AlertCircle } from '@mui/icons-material';

export const SystemHealth: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        System Health
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6">API Services</Typography>
              </Box>
              <LinearProgress variant="determinate" value={100} />
              <Typography variant="body2" color="textSecondary">100% Operational</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircle sx={{ color: 'success.main', mr: 1 }} />
                <Typography variant="h6">Database</Typography>
              </Box>
              <LinearProgress variant="determinate" value={99} />
              <Typography variant="body2" color="textSecondary">99% Operational</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SystemHealth;
