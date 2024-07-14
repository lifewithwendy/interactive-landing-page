import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { StyleSec } from '../styles';

const History = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyleSec theme={theme} id="history">
      <h2 style={{ color: theme === "light" ? "black" : "white" , marginTop: '-20px'}}>History</h2>
      <p style={{ color: theme === "light" ? "black" : "white" }}>Our company was founded...</p>
    </StyleSec>
  );
};

const Team = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyleSec theme={theme} id="team">
      <h2 style={{ color: theme === "light" ? "black" : "white" , marginTop: '-20px'}}>Team</h2>
      <p style={{ color: theme === "light" ? "black" : "white" }}>Meet our team...</p>
    </StyleSec>
  );
};

const Values = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyleSec theme={theme} id="values">
      <h2 style={{ color: theme === "light" ? "black" : "white" , marginTop: '-20px' }}>Values</h2>
      <p style={{ color: theme === "light" ? "black" : "white" }}>Our values are...</p>
    </StyleSec>
  );
};

export { History, Team, Values };
