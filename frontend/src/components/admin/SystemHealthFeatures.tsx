import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { Storage, Wifi, Activity, Clock } from '@mui/icons-material';

export const SystemHealthFeatures: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        System Health Features
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Storage sx={{ fontSize: 32, mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Storage</Typography>
              </Box>
              <Typography variant="body2">256 GB / 1 TB</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Activity sx={{ fontSize: 32, mr: 1, color: 'success.main' }} />
                <Typography variant="h6">CPU</Typography>
              </Box>
              <Typography variant="body2">45% Usage</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Wifi sx={{ fontSize: 32, mr: 1, color: 'info.main' }} />
                <Typography variant="h6">Network</Typography>
              </Box>
              <Typography variant="body2">Optimal</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Clock sx={{ fontSize: 32, mr: 1, color: 'warning.main' }} />
                <Typography variant="h6">Uptime</Typography>
              </Box>
              <Typography variant="body2">99.9%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SystemHealthFeatures;
