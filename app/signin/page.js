'use client';
import { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Alert, Grid } from '@mui/material';
import { auth, signInWithEmailAndPassword } from '../../library/firebase'; // Ensure path is correct
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        mt: 8, 
        p: 3, 
        backgroundColor: '#ffffff', 
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333333' }}>
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSignIn}
        sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ 
            borderRadius: '4px', 
            backgroundColor: '#f5f5f5',
            '& .MuiInputBase-input': {
              padding: '12px',
            }
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{ 
            borderRadius: '4px', 
            backgroundColor: '#f5f5f5',
            '& .MuiInputBase-input': {
              padding: '12px',
            }
          }}
        />
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ 
            mt: 2, 
            padding: '12px', 
            borderRadius: '20px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
            '&:hover': {
              backgroundColor: '#1565c0',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            }
          }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
