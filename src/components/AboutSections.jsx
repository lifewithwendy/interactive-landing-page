import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyleSec } from '../styles';
import MemberCard from './MemberCard';

const History = () => {
  const { theme } = useContext(ThemeContext);

  const h2Style = { 
    color: theme === "light" ? "#008AE0" : "white" , 
    marginTop: '-20px'
  };

  const pStyle = { 
    color: theme === "light" ? "#008AE0" : "white",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center aligns items horizontally
    textAlign: 'center',
    margin: '0 auto', // Centers the entire block horizontally
    maxWidth: '800px' // Adjust as per your design
  };

  useEffect(() => {
    console.log('History component mounted');  
  }, []);

  return (
    <StyleSec theme={theme} id="history">
      <h2 style={h2Style}>History</h2>
      <div style={pStyle}>
        <div>
          <h3>Early Web Design</h3>
          <p>
            In the beginning, websites were mostly text-based with minimal styling. Basic HTML and inline CSS provided limited visual customization, and dynamic theming was not a concept yet.
          </p>
        </div>
        <div>
          <h3>Introduction of CSS</h3>
          <p>
            The introduction of CSS in the mid-1990s separated content from design, allowing more consistent theming. However, these themes were still static and hardcoded.
          </p>
        </div>
        <div>
          <h3>JavaScript and Dynamic Styling</h3>
          <p>
            JavaScript's emergence in the late 1990s allowed dynamic changes to web pages, enabling basic theming based on user interactions.
          </p>
        </div>
      </div>
    </StyleSec>
  );
};

const Team = () => {
  const { theme } = useContext(ThemeContext);

  const h2Style = { 
    color: theme === "light" ? "#008AE0" : "white" , 
    marginTop: '-20px'
  };

  const pStyle = { 
    color: theme === "light" ? "#008AE0" : "white" 
  };

  useEffect(() => {
    console.log('Team component mounted');  
  }, []);

  return (
    <StyleSec theme={theme} id="team" xs={{width: '100%'}}>
      <h2 style={h2Style}>Team</h2>
      <p style={pStyle}>Meet our team...</p>
      <MemberCard theme={theme} />
    </StyleSec>
  );
};

const Values = () => {
  const { theme } = useContext(ThemeContext);

  const h2Style = { 
    color: theme === "light" ? "#008AE0" : "white" , 
    marginTop: '-20px'
  };

  const pStyle = { 
    color: theme === "light" ? "#008AE0" : "white" 
  };

  useEffect(() => {
    console.log('Values component mounted');  
  }, []);

  return (
    <StyleSec theme={theme} id="values">
      <h2 style={h2Style}>Values</h2>
      <p style={pStyle}>Our values are...</p>
    </StyleSec>
  );
};

export { History, Team, Values };
