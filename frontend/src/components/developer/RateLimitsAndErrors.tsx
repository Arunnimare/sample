import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid } from '@mui/material';
import { Speed, Error } from '@mui/icons-material';

export const RateLimitsAndErrors: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Rate Limits & Error Handling
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Speed sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                <Typography variant="h6">Rate Limits</Typography>
              </Box>
              <Typography color="textSecondary">100 requests / minute</Typography>
              <Typography color="textSecondary">10,000 requests / day</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Error sx={{ fontSize: 32, color: 'error.main', mr: 2 }} />
                <Typography variant="h6">Error Codes</Typography>
              </Box>
              <Typography color="textSecondary">400: Bad Request</Typography>
              <Typography color="textSecondary">429: Too Many Requests</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RateLimitsAndErrors;
