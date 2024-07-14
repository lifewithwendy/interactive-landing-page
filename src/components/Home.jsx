import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AnimatedElement, StyledDiv, StyledH1, StyledP, StyledButton } from '../styles.js'
import { Clock } from './Clock';


const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const hours = new Date().getHours();
    const message =
      hours < 12 ? 'Good Morning'
      : hours < 18 ? 'Good Afternoon'
      : 'Good Evening';
    setWelcomeMessage(message);
    document.title = 'Home';
  }, []);

  return (
    <StyledDiv theme={theme}>
      <AnimatedElement>
      <StyledH1 theme={theme}>{welcomeMessage}</StyledH1>
        <StyledP theme={theme}>Welcome to our website!</StyledP>
        <StyledButton onClick={() => alert('Hello!')}>Click me!</StyledButton>
      </AnimatedElement>
      <Clock theme={theme}/>
    </StyledDiv>
  );
};

export default Home;
