// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MemoriesTimeline from './components/MemoriesTimeline';
import LoveNotesCarousel from './components/LoveNotesCarousel';
import PolaroidWall from './components/PolaroidWall';
import SecretMessages from './components/SecretMessages'; // Optional
import Countdown from './components/Countdown'; // Optional
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/memories" element={<MemoriesTimeline />} />
        <Route path="/notes" element={<LoveNotesCarousel />} />
        <Route path="/gallery" element={<PolaroidWall />} />
        <Route path="/secrets" element={<SecretMessages />} /> {/* Optional */}
        <Route path="/countdown" element={<Countdown />} /> {/* Optional */}
      </Routes>
    </Router>
  );
}

export default App;
