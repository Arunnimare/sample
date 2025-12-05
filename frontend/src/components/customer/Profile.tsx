import React from 'react';
import { Container, Typography, Box, Paper, Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { Person } from '@mui/icons-material';

export const Profile: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        My Profile
      </Typography>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Person sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography variant="h6">Profile Information</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" defaultValue="John" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" defaultValue="Doe" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" defaultValue="john@example.com" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone" defaultValue="+1 (555) 123-4567" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Update Profile</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
