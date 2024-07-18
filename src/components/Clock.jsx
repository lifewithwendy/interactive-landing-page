import React, { useState, useEffect } from 'react';
import { StyledTime } from '../styles'; // Adjust the import path based on your file structure

export const Clock = ({theme}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  

  useEffect(() => {
    console.log('Clock component mounted');
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);
    // Cleanup function
    return () => {
      clearInterval(intervalId); // Clear interval on component unmount or dependency change
    };
  }, []); // No dependencies, runs only once on mount

  return (
      <StyledTime theme={theme}>{currentTime.toLocaleTimeString()}</StyledTime>
  );
};
