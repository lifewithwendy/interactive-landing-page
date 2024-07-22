import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';


export const StyledDiv = styled('div')(({ theme }) => ({
  backgroundImage: theme === 'light'
  ? 'url("/lightBackground.jpg")'
  : 'url("/darkBackground.avif")',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  minHeight: '92vh',
  marginBottom: '0px',
// paddingTop: '150px',
}));

export const StyledH1 = styled('h1')(({ theme }) => ({
color: theme === 'light' ? '#1976d2' : 'white', 
fontSize: '10rem',
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
marginBottom: '-10px',
marginTop: '-10px',
textAlign: 'center',
}));

export const StyledP = styled('p')(({ theme }) => ({
color: theme === 'light' ? '#1976d2' : 'white',
fontSize: '4rem',
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
textAlign: 'center',
height : '20%'
}));

// Define the keyframes for the animation
const slideInAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  
`;

// Styled component with animation
export const AnimatedElement = styled.div`
  animation: ${slideInAnimation} 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTime = styled('h2')(({ theme }) => ({
    color: theme === 'light' ? '#1976d2' : 'white', 
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    marginBottom: '0',
    maxHeight: '10vh',	
    fontSize: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    
    }));

export const StyledTopic = styled('h1')(({ theme }) => ({
    color: theme === 'light' ? '#1976d2' : 'white', 
    fontSize: '5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '0 -10px 0 -10px',
    textAlign: 'center',
    height: '20%',
    }));

export const StyleSec = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    width : '100%'
    }));

export const StyledButton = styled('button')(({ theme }) => ({
    backgroundColor: theme === 'light' ? '#1976d2' : 'white',
    color: theme === 'light' ? 'white' : 'black' ,
    padding: '10px 20px',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    // boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: theme === 'light' ? '#92B3D3' : 'lightgray',
    },
    alignSelf: 'center',
    }));