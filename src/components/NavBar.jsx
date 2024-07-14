import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Styled NavBarContainer component for the NavBar using mui
const NavBarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position="static">
        <Toolbar>
          <NavBarContainer>
            <Box>
              <Button
                color="inherit"
                component={NavLink}
                to="/"
                sx={{ marginRight: 2 }}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={NavLink}
                to="/about"
                sx={{ marginRight: 2 }}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                About
              </Button>
              <Button
                color="inherit"
                component={NavLink}
                to="/contact/1"
                sx={{ marginRight: 2 }}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Contact Us
              </Button>
            </Box>
            <IconButton color="inherit" onClick={toggleTheme}>
              {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </NavBarContainer>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
