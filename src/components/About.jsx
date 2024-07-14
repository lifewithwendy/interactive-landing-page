import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyledDiv, StyledTopic } from '../styles';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Button, Stack } from '@mui/material';

const About = () => {
  const { theme } = useContext(ThemeContext);

  const navLinkStyles = {
    width: '100px',
    textDecoration: 'none',
    color: theme === 'light' ? 'black' : 'white',
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

  return (
    <StyledDiv theme={theme}>
      <StyledTopic theme={theme}>About Us</StyledTopic>
      <Box component="nav" sx={{ marginBottom: '20px' }}>
        <Stack direction="row" spacing={10} justifyContent="center">
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
      <Outlet />
    </StyledDiv>
  );
};

export default About;
