import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

export const InteractiveSandbox: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Interactive Sandbox
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PlayArrow sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h6">Test APIs Here</Typography>
          </Box>
          <Typography color="textSecondary" sx={{ mb: 2 }}>
            Use our sandbox environment to test and develop
          </Typography>
          <Button variant="contained">Open Sandbox</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InteractiveSandbox;
