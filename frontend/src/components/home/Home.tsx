import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Stack,
  Paper,
  IconButton,
} from '@mui/material';
import {
  AccountBalance,
  Security,
  TrendingUp,
  CreditCard,
  Phone,
  LocationOn,
  Email,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Security sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Bank-Level Security',
      description: '256-bit encryption and multi-factor authentication to keep your money safe.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Smart Investments',
      description: 'Grow your wealth with our AI-powered investment recommendations.',
    },
    {
      icon: <CreditCard sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: 'Zero-Fee Banking',
      description: 'No monthly fees, no minimum balance, no hidden charges. Ever.',
    },
    {
      icon: <Phone sx={{ fontSize: 48, color: '#1976d2' }} />,
      title: '24/7 Support',
      description: 'Real human support available round the clock, whenever you need us.',
    },
  ];

  const stats = [
    { value: '2M+', label: 'Active Users' },
    { value: '$50B+', label: 'Assets Secured' },
    { value: '150+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Navigation Bar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#1976d2' }}>
        <Toolbar>
          <AccountBalance sx={{ mr: 2, fontSize: 32 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            SimpleBank
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')} sx={{ mr: 1 }}>
            Sign In
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/signup')}
            sx={{ bgcolor: '#1976d2', '&:hover': { bgcolor: '#1565c0' } }}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Banking Made Simple
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, lineHeight: 1.8 }}>
                Experience the future of banking with zero fees, instant transfers, and
                AI-powered insights. Join over 2 million users who trust SimpleBank.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/signup')}
                  sx={{
                    bgcolor: 'white',
                    color: '#1976d2',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': { bgcolor: '#f5f5f5' },
                  }}
                >
                  Open Account
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  Sign In
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 400,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <AccountBalance sx={{ fontSize: 200, opacity: 0.3 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.05)',
            transform: 'translate(50%, -50%)',
          }}
        />
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 1 }}>
        <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Grid container>
            {stats.map((stat, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={index}
                sx={{
                  textAlign: 'center',
                  py: 4,
                  borderRight: index < 3 ? { md: '1px solid #e0e0e0' } : 'none',
                  borderBottom: index < 2 ? { xs: '1px solid #e0e0e0', md: 'none' } : 'none',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}
        >
          Why Choose SimpleBank?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          We're reimagining banking from the ground up with cutting-edge technology and
          customer-first approach.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  bgcolor: 'white',
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              color: 'white',
              p: 6,
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Open your account in minutes. No paperwork, no hassle.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{
                bgcolor: 'white',
                color: '#1976d2',
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': { bgcolor: '#f5f5f5' },
              }}
            >
              Create Free Account
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: '#263238', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalance sx={{ mr: 1, fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  SimpleBank
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Modern banking for the digital age. FDIC insured up to $250,000.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Us
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">1-800-SIMPLE-BANK</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">support@simplebank.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2">123 Banking St, New York, NY 10001</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                  About Us
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                  Security
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                  Privacy Policy
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                  Terms of Service
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2025 SimpleBank. All rights reserved. Member FDIC. Equal Housing Lender.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
