import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { CreditCard } from '@mui/icons-material';

interface AccountCardProps {
  accountNumber: string;
  accountType: string;
  balance: number;
  holderName: string;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  accountNumber,
  accountType,
  balance,
  holderName,
}) => {
  return (
    <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="body2">{accountType}</Typography>
          <CreditCard />
        </Box>
        <Typography variant="h6" sx={{ mb: 3, fontFamily: 'monospace', letterSpacing: 2 }}>
          {accountNumber}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="body2" opacity={0.8}>
              Card Holder
            </Typography>
            <Typography variant="body1">{holderName}</Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" opacity={0.8}>
              Balance
            </Typography>
            <Typography variant="h6">${balance.toFixed(2)}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountCard;
