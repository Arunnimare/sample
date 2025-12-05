import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Grid, Button, Stepper, Step, StepLabel } from '@mui/material';

export const LoanApplication: React.FC = () => {
  const steps = ['Personal Info', 'Financial Info', 'Verification', 'Approval'];
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Loan Application
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Step {activeStep + 1}: {steps[activeStep]}
          </Typography>
          <Typography color="textSecondary">Fill in the required information</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoanApplication;
