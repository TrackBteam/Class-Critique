'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField, Card, CardContent, CardActions, CircularProgress, Container, Stack } from '@mui/material';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../library/firebase'; // Adjust path as needed

export default function Dashboard() {
  const router = useRouter();
  const [professors, setProfessors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Chat state
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm the Rate My Professor support assistant. How can I help you today?`,
    },
  ]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/signin');
      }
    });

    const fetchProfessors = async () => {
      try {
        const response = await fetch('/api/professors');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProfessors(data);
      } catch (error) {
        setError('Error fetching professors');
        console.error('Error fetching professors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessors();

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Sign Out Error', error);
    }
  };

  const handleSearch = () => {
    if (search.trim() === '') {
      fetchProfessors(); // Refetch the data if search is cleared
      return;
    }
    const filteredProfessors = professors.filter((professor) =>
      professor.name.toLowerCase().includes(search.toLowerCase())
    );
    setProfessors(filteredProfessors);
  };

  const sendMessage = async () => {
    setMessage('');
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ]);

    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: 'user', content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = '';

      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), { stream: true });
        setMessages((prevMessages) => {
          let lastMessage = prevMessages[prevMessages.length - 1];
          let otherMessages = prevMessages.slice(0, prevMessages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        mt: 4,
        p: 2,
        bgcolor: '#EDE7F6',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        height: 'calc(100vh - 16px)', // Adjusted for less white space
        position: 'relative',
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignOut}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontSize: '0.875rem', // Smaller font size
          fontWeight: 'bold', // Bold font weight
        }}
      >
        Sign Out
      </Button>

      <Box
        width="100%"
        maxWidth="600px" // Reduced width for less white space
        sx={{ mr: 2, flex: 2 }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#333333' }}>
          Welcome to Your Dashboard!
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            label="Search Professors"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: '100%' }}
          >
            Search
          </Button>
        </Stack>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error" variant="body1" sx={{ mb: 2 }}>
            {error}
          </Typography>
        ) : (
          <Box width="100%">
            {professors.length === 0 ? (
              <Typography>No professors found.</Typography>
            ) : (
              professors.map((professor) => (
                <Card key={professor.id} sx={{ mb: 2, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{professor.name}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{professor.description}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>Rating: {professor.rating}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="secondary">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Box>
        )}
      </Box>

      <Box
        width="280px" // Reduced width for less white space
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', p: 2, border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} // Added box shadow
      >
        <Typography variant="h6" sx={{ mb: 1 }}>Chat with Us</Typography>
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          overflow="auto"
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}
            >
              <Box
                bgcolor="transparent" // Set the box to be transparent
                color="black"
                borderRadius={16}
                p={1.5}
                maxWidth="80%"
                sx={{ wordBreak: 'break-word' }} // Keep word break to ensure long messages are handled well
              >
                {msg.content}
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" spacing={1} mt={1}>
          <TextField
            label="Type a message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant="contained" onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
