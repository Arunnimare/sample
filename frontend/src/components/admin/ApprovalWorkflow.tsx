import React from 'react';
import { Container, Typography, Box, Paper, Stepper, Step, StepLabel } from '@mui/material';

export const ApprovalWorkflow: React.FC = () => {
  const steps = ['Submitted', 'Under Review', 'Approved', 'Processed'];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Approval Workflow
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Stepper>
          {steps.map((label, index) => (
            <Step key={label} active={index === 1}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Container>
  );
};

export default ApprovalWorkflow;
