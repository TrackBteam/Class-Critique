'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Card, CardContent, CardActions } from '@mui/material';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../library/firebase'; // Adjust path as needed

export default function Dashboard() {
  const router = useRouter();
  const [professors, setProfessors] = useState([]); // Example state for professor data
  const [search, setSearch] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/signin'); // Redirect to sign-in if not authenticated
      }
    });

    // Fetch initial professor data here if needed
    const fetchProfessors = async () => {
      try {
        const response = await fetch('/api/professors');
        const data = await response.json();
        setProfessors(data);
      } catch (error) {
        console.error('Error fetching professors:', error);
      }
    };

    fetchProfessors();

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Use signOut function from Firebase
      router.push('/'); // Redirect to home page after sign-out
    } catch (error) {
      console.error('Sign Out Error', error);
    }
  };

  const handleSearch = () => {
    // Implement search logic here
    const filteredProfessors = professors.filter(professor =>
      professor.name.toLowerCase().includes(search.toLowerCase())
    );
    setProfessors(filteredProfessors);
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#EDE7F6" // Light purple background
      p={3}
    >
      <Typography variant="h3" gutterBottom>Welcome to your Dashboard!</Typography>
      <TextField
        label="Search Professors"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        sx={{ mb: 2, width: '300px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSignOut} sx={{ mb: 3 }}>
        Sign Out
      </Button>
      <Box width="100%" maxWidth="1200px">
        {professors.length === 0 ? (
          <Typography>No professors found.</Typography>
        ) : (
          professors.map((professor) => (
            <Card key={professor.id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h5">{professor.name}</Typography>
                <Typography variant="body2">{professor.description}</Typography>
                <Typography variant="body2">Rating: {professor.rating}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
              </CardActions>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
}
