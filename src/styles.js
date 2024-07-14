import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const StyledDiv = styled('div')(({ theme }) => ({
backgroundImage: theme === 'light'
? 'url("./lightBackground.jpg")'
: 'url("/darkBackground.avif")',
backgroundSize: 'fit',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'space-evenly',
minHeight: '91vh',
// paddingTop: '150px',
}));

export const StyledH1 = styled('h1')(({ theme }) => ({
color: theme === 'light' ? 'black' : 'white', 
fontSize: '10rem',
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
marginBottom: '-10px',
marginTop: '-10px',

}));

export const StyledP = styled('p')(({ theme }) => ({
color: theme === 'light' ? 'black' : 'white',
fontSize: '4rem',
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
`;

export const StyledTime = styled('h2')(({ theme }) => ({
    color: theme === 'light' ? 'black' : 'white', 
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    marginBottom: '0',
    maxHeight: '10vh',	
    fontSize: '2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    
    }));

export const StyledTopic = styled('h1')(({ theme }) => ({
    color: theme === 'light' ? 'black' : 'white', 
    fontSize: '5rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '0 -15px 0 -15px',
    }));

export const StyleSec = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    }));

export const StyledButton = styled('button')(({ theme }) => ({
    backgroundColor: theme === 'light' ? 'black' : 'white',
    color: theme === 'light' ? 'white' : 'black',
    padding: '10px 20px',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    '&:hover': {
      backgroundColor: theme === 'light' ? 'gray' : 'lightgray',
    }
    }));