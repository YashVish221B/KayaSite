// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Countdown = () => {
  const [daysTogether, setDaysTogether] = useState(0);

  // Replace with the actual start date of your relationship
  const startDate = new Date('2024-04-01'); // Example: April 1, 2021

  useEffect(() => {
    const calculateDays = () => {
      const currentDate = new Date();
      const timeDiff = currentDate - startDate;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDaysTogether(days);
    };
    
    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval); // Cleanup on unmount
  }, [startDate]);

  return (
    <CountdownContainer>
      <h2>Days Together</h2>
      <DayCounter>{daysTogether}</DayCounter>
      <p>Days of Love since the first I love You 💕</p>
    </CountdownContainer>
  );
};

export default Countdown;

const CountdownContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fff0f5;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const DayCounter = styled.div`
  font-size: 3rem;
  color: #ff6f61;
  font-family: 'Great Vibes', cursive;
  margin-bottom: 10px;
`;
