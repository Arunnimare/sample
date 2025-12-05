import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

export const ESign: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Electronic Signature
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Edit sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h6">Sign Documents</Typography>
          </Box>
          <Typography color="textSecondary" sx={{ mb: 2 }}>
            Securely sign loan documents with e-signature
          </Typography>
          <Button variant="contained">Sign Now</Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ESign;
