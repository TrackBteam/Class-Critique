'use client';
import { Box, Button, Typography, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#e3f2fd" // A lighter, calming background color
      p={3}
      sx={{
        backgroundImage: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#212121' }}>
        Welcome to Class Critique
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: '#424242', mb: 4 }}>
        Get authentic reviews and feedback on your professors.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => router.push('/signup')}
          sx={{
            backgroundColor: '#1e88e5',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            borderRadius: '20px',
            padding: '10px 20px',
          }}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          onClick={() => router.push('/signin')}
          sx={{
            borderColor: '#1e88e5',
            color: '#1e88e5',
            borderRadius: '20px',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1565c0',
            },
          }}
        >
          Sign In
        </Button>
      </Stack>
    </Box>
  );
}
