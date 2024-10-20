// src/components/MemoriesTimeline.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Import images directly
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';

const timelineData = [
  { date: "Kaya", title: "You're ", description: "Always Keep", image: photo4 },
  { date: "Kaya", title: "So", description: "Smiling", image: photo5 },
  { date: "Kaya", title: "Adoreable", description: "I love you, Kaya", image: photo6 },
  // More memories can be added here
];

const MemoriesTimeline = () => {
  return (
    <TimelineContainer>
      <h2>Our Special Moments</h2>
      <Timeline>
        {timelineData.map((memory, index) => (
          <motion.div 
            className="memory-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={memory.image} alt={memory.title} />
            <div className="memory-info">
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
              <span>{memory.date}</span>
            </div>
          </motion.div>
        ))}
      </Timeline>
    </TimelineContainer>
  );
};

export default MemoriesTimeline;

const TimelineContainer = styled.div`
  padding: 50px 20px;
  background-color: #f7f7f7;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ff6f61;
    font-family: 'Great Vibes', cursive;
  }
`;

const Timeline = styled.div`
  display: flex;
  overflow-x: auto; /* Allow horizontal scrolling */
  padding-bottom: 30px;
  
  .memory-card {
    width: 250px; /* Adjust width for better portrait layout */
    background: white;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
    transition: transform 0.3s ease;
    cursor: pointer;
    
    img {
      width: 100%; /* Full width of the card */
      height: 300px; /* Fixed height for portrait images */
      object-fit: cover; /* Cover the area without stretching */
      border-radius: 10px 10px 0 0; /* Round corners on top */
    }

    .memory-info {
      padding: 15px;
      h3 {
        font-size: 1.5rem;
        color: #ff6f61;
      }
      p {
        font-size: 1rem;
        margin-top: 10px;
        color: #4a4a4a;
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
