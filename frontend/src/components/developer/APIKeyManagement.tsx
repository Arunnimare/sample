import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Button, TextField, Grid } from '@mui/material';
import { Key } from '@mui/icons-material';

export const APIKeyManagement: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        API Key Management
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Key sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
            <Typography variant="h6">Your API Keys</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Public Key"
                value="pk_live_51234567890"
                disabled
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Secret Key"
                value="sk_live_98765432100"
                disabled
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Regenerate Keys</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default APIKeyManagement;
