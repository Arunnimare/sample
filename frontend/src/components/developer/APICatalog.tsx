import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import { Code } from '@mui/icons-material';

export const APICatalog: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        API Catalog
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                <Typography variant="h6">Banking APIs</Typography>
              </Box>
              <Typography color="textSecondary" sx={{ mb: 1 }}>Accounts API</Typography>
              <Typography color="textSecondary">Transactions API</Typography>
              <Button variant="text" sx={{ mt: 1 }}>Explore</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />
                <Typography variant="h6">Payment APIs</Typography>
              </Box>
              <Typography color="textSecondary" sx={{ mb: 1 }}>Payments API</Typography>
              <Typography color="textSecondary">Transfers API</Typography>
              <Button variant="text" sx={{ mt: 1 }}>Explore</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default APICatalog;
