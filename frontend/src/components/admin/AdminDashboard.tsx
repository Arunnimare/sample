import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Card,
  CardContent,
  LineChart,
  BarChart,
  PieChart,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import {
  BarChart as BarChartIcon,
  Users,
  TrendingUp,
  AlertCircle,
} from '@mui/icons-material';

export const AdminDashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Admin Dashboard
        </Typography>
        <Typography color="textSecondary">
          System overview and key metrics
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Users sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Total Users
                  </Typography>
                  <Typography variant="h6">2,543</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUp sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Active Sessions
                  </Typography>
                  <Typography variant="h6">487</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AlertCircle sx={{ fontSize: 40, color: 'warning.main', mr: 2 }} />
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Alerts
                  </Typography>
                  <Typography variant="h6">12</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <BarChartIcon sx={{ fontSize: 40, color: 'info.main', mr: 2 }} />
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Transactions
                  </Typography>
                  <Typography variant="h6">$45.2M</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Overview" />
        <Tab label="Detailed Reports" />
        <Tab label="System Health" />
      </Tabs>

      {tabValue === 0 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            System Overview
          </Typography>
          <Typography color="textSecondary">
            Dashboard content will be displayed here
          </Typography>
        </Paper>
      )}

      {tabValue === 1 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Detailed Reports
          </Typography>
          <Typography color="textSecondary">
            Report content will be displayed here
          </Typography>
        </Paper>
      )}

      {tabValue === 2 && (
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            System Health
          </Typography>
          <Typography color="textSecondary">
            Health check content will be displayed here
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default AdminDashboard;
