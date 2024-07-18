import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledDiv, StyledTopic } from '../styles';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';

const About = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'About';
    console.log('About component mounted');  
  },[])

  const navLinkStyles = {
    width: '200px',
    textDecoration: 'none',
    color: theme === 'light' ? '#008AE0' : 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    '&.active-link': {
      backgroundColor: theme === 'light' ? '#C5E7FA' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
    },
    '&:hover': {
      backgroundColor: theme === 'light' ? '#C5E7FA' : '#444',
    },
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    height: '450px', // Adjusted height to 500px
    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <StyledDiv theme={theme}>
      <StyledTopic theme={theme}>About Us</StyledTopic>
      <Box component="nav" sx={{ marginBottom: '20px' }}>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            component={NavLink}
            to="history"
            sx={navLinkStyles}
          >
            History
          </Button>
          <Button
            component={NavLink}
            to="team"
            sx={navLinkStyles}
          >
            Team
          </Button>
          <Button
            component={NavLink}
            to="values"
            sx={navLinkStyles}
          >
            Values
          </Button>
        </Stack>
      </Box>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          component="div"
          sx={formContainerStyle}
        >
          <Outlet />
        </Box>
      </div>
    </StyledDiv>
  );
};

export default About;
