import React from 'react';
import { Container, Typography, Box, Paper, Stepper, Step, StepLabel, Card, CardContent } from '@mui/material';

export const OAuth2Flow: React.FC = () => {
  const steps = ['Request Authorization', 'User Consent', 'Receive Code', 'Exchange for Token', 'Access Resource'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        OAuth 2.0 Flow
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Stepper>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>Documentation</Typography>
          <Typography color="textSecondary">
            Learn how to implement OAuth 2.0 authentication in your application
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OAuth2Flow;
