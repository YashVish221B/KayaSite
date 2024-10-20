// src/components/LoveNotesCarousel.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const loveNotes = [
  { date: "May 8, 2024", note: "I still remember the way you smiled the first time we met. That smile lit up my world." },
  { date: "August 12, 2024", note: "You are the love of my life, and I promise to cherish every moment with you forever." },
  { date: "September 15, 2024", note: "Every day with you feels like a dream come true. I'm so lucky to have you by my side." },
  { date: "October 20, 2024", note: "I love you my Kaya, My princess Arora" },
  // Add more love notes here
];

const LoveNotesCarousel = () => {
  return (
    <CarouselContainer>
      <h2>Our Love Notes</h2>
      <Carousel>
        {loveNotes.map((note, index) => (
          <motion.div 
            className="note-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="note-content">
              <p>"{note.note}"</p>
              <span>{note.date}</span>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default LoveNotesCarousel;

const CarouselContainer = styled.div`
  padding: 50px 20px;
  background-color: #ffe4e1;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ff6f61;
    font-family: 'Great Vibes', cursive;
  }
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 30px;
  
  .note-card {
    width: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    .note-content {
      padding: 20px;
      font-family: 'Dancing Script', cursive;
      
      p {
        font-size: 1.3rem;
        color: #ff6f61;
      }
      
      span {
        display: block;
        margin-top: 10px;
        font-size: 0.9rem;
        color: #9e9e9e;
      }
    }
  }
`;
