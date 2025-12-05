import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
  Card,
  CardContent,
  Avatar,
  Divider,
} from '@mui/material';
import { Edit, Save, Cancel } from '@mui/icons-material';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export const SamPersonal: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: 'Sam',
    lastName: 'Johnson',
    email: 'sam.johnson@simplebank.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  });

  const [editData, setEditData] = useState<PersonalInfo>(personalInfo);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(personalInfo);
  };

  const handleSave = () => {
    setPersonalInfo(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    setEditData({ ...editData, [field]: value });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          Personal Information
        </Typography>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ width: 80, height: 80, mr: 2, fontSize: '2rem' }}>
              {personalInfo.firstName[0]}{personalInfo.lastName[0]}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5">
                {personalInfo.firstName} {personalInfo.lastName}
              </Typography>
              <Typography color="textSecondary">{personalInfo.email}</Typography>
            </Box>
            {!isEditing && (
              <Button
                variant="contained"
                startIcon={<Edit />}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            )}
          </Box>
          <Divider />
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            value={isEditing ? editData.firstName : personalInfo.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            value={isEditing ? editData.lastName : personalInfo.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={isEditing ? editData.email : personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            value={isEditing ? editData.phone : personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            type="date"
            value={isEditing ? editData.dateOfBirth : personalInfo.dateOfBirth}
            onChange={(e) => handleChange('dateOfBirth', e.target.value)}
            disabled={!isEditing}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            value={isEditing ? editData.address : personalInfo.address}
            onChange={(e) => handleChange('address', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            value={isEditing ? editData.city : personalInfo.city}
            onChange={(e) => handleChange('city', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="State"
            value={isEditing ? editData.state : personalInfo.state}
            onChange={(e) => handleChange('state', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Zip Code"
            value={isEditing ? editData.zipCode : personalInfo.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            disabled={!isEditing}
          />
        </Grid>
      </Grid>

      {isEditing && (
        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<Save />}
            onClick={handleSave}
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            startIcon={<Cancel />}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default SamPersonal;
