import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AnimatedElement, StyledDiv, StyledH1, StyledP, StyledButton } from '../styles.js'
import { Clock } from './Clock';
import { Box, TextField } from '@mui/material';


const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState('');

  const style = {
    '& .MuiTextField-root': { m: 1, width: '100%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
    maxWidth: '50vw',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }

  useEffect(() => {
    const hours = new Date().getHours();
    const message =
      hours < 12 ? 'Good Morning'
      : hours < 18 ? 'Good Afternoon'
      : 'Good Evening';
    setWelcomeMessage(message);
    document.title = 'Home';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name} !`);
    setWelcomeMessage(`Hello ${name}!`);
  }

  return (
    <StyledDiv theme={theme}>
      <AnimatedElement>
      <StyledH1 theme={theme}>{welcomeMessage}</StyledH1>
      <div style={{width: '80%' , marginBottom: '20px'}}>
        <StyledP theme={theme}>Welcome to our website!</StyledP>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={style}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: theme === 'light' ? '#000' : 'black',
                '& fieldset': {
                  borderColor: theme === 'light' ? '#000' : 'black',
                },
                '&:hover fieldset': {
                  borderColor: theme === 'light' ? '#000' : 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme === 'light' ? '#000' : 'black',
                },
              },
              '& .MuiInputLabel-root': {
                color: theme === 'light' ? '#000' : 'black',
              },
            }}
          />
        <StyledButton>Click me!</StyledButton>
        </Box>
      </div>
      </AnimatedElement>
      <Clock theme={theme}/>
    </StyledDiv>
  );
};

export default Home;
