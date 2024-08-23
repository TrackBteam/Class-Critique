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
      bgcolor="#f5f5f5"
    >
      <Typography variant="h2" gutterBottom>Welcome to Class Critique</Typography>
      <Typography variant="h5" gutterBottom>Get authentic reviews and feedback on your professors.</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => router.push('/signup')}>Sign Up</Button>
        <Button variant="outlined" onClick={() => router.push('/signin')}>Sign In</Button>
      </Stack>
    </Box>
  );
}
