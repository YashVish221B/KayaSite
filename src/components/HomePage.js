// src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <HeroContainer>
      <motion.div
        className="hero-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>Welcome to Our Love Story</h1>
        <p>Take a journey through the moments that brought us closer.</p>
      </motion.div>
    </HeroContainer>
  );
};

export default HomePage;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f3e7e9, #e3eeff);
  color: #4a4a4a;
  
  .hero-text {
    text-align: center;
    h1 {
      font-size: 3rem;
      color: #ff6f61;
      font-family: 'Great Vibes', cursive;
    }
    p {
      font-size: 1.2rem;
      margin-top: 20px;
    }
  }
`;
