import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, Button, Grid } from '@mui/material';
import { Code } from '@mui/icons-material';

export const SDKExamples: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        SDK Examples
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                <Typography variant="h6">JavaScript</Typography>
              </Box>
              <Typography color="textSecondary" sx={{ mb: 2 }}>npm install simplebank-sdk</Typography>
              <Button variant="text">View Docs</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />
                <Typography variant="h6">Python</Typography>
              </Box>
              <Typography color="textSecondary" sx={{ mb: 2 }}>pip install simplebank</Typography>
              <Button variant="text">View Docs</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ fontSize: 32, color: 'info.main', mr: 2 }} />
                <Typography variant="h6">Java</Typography>
              </Box>
              <Typography color="textSecondary" sx={{ mb: 2 }}>maven: simplebank-java</Typography>
              <Button variant="text">View Docs</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SDKExamples;
