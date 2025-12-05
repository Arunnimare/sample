import React from 'react';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

interface KYCReview {
  id: string;
  userName: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: number;
}

export const KYCReviewQueue: React.FC = () => {
  const [reviews] = React.useState<KYCReview[]>([
    { id: '1', userName: 'John Doe', submissionDate: '2025-12-05', status: 'pending', documents: 3 },
    { id: '2', userName: 'Jane Smith', submissionDate: '2025-12-04', status: 'approved', documents: 4 },
  ]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        KYC Review Queue
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell><strong>User</strong></TableCell>
                <TableCell><strong>Submission Date</strong></TableCell>
                <TableCell><strong>Documents</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>{review.userName}</TableCell>
                  <TableCell>{review.submissionDate}</TableCell>
                  <TableCell>{review.documents}</TableCell>
                  <TableCell>
                    <Chip
                      label={review.status}
                      color={review.status === 'approved' ? 'success' : review.status === 'rejected' ? 'error' : 'warning'}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default KYCReviewQueue;
