// src/components/PolaroidWall.js
import React from 'react';
import styled from 'styled-components';

// Import images directly
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';

const photos = [
  {
    src: photo1,
    caption: 'Kissi - Kissi',
  },
  {
    src: photo2,
    caption: 'So do you like me?',
  },
  {
    src: photo3,
    caption: 'A Walk in the Rain',
  },
  // Add more photos here
];

const PolaroidWall = () => {
  return (
    <WallContainer>
      <h2>Our Memories</h2>
      <PolaroidContainer>
        {photos.map((photo, index) => (
          <Polaroid key={index}>
            <img src={photo.src} alt={photo.caption} />
            <Caption>{photo.caption}</Caption>
          </Polaroid>
        ))}
      </PolaroidContainer>
    </WallContainer>
  );
};

export default PolaroidWall;

const WallContainer = styled.div`
  padding: 50px 20px;
  background-color: #fdf5e6;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ff6f61;
    font-family: 'Great Vibes', cursive;
  }
`;

const PolaroidContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Polaroid = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 200px; /* Adjust width for better portrait appearance */
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px; /* Set a fixed height for portrait images */
    object-fit: cover; /* Ensure the image covers the area without stretching */
    border-radius: 5px;
  }
`;

const Caption = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.1rem;
  margin-top: 10px;
  color: #ff6f61;
`;
