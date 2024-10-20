// src/components/SecretMessages.js
import React, { useState } from 'react';
import styled from 'styled-components';

const messages = [
  { passcode: 'iloveyou', text: 'You make my world brighter every day 💖' },
  { passcode: 'kaya', text: 'Every moment with you feels like a fairytale 🌹' },
  { passcode: 'arora', text: 'I’ll never forget our first kiss at Bandstand 💋' },
  // Add more secret messages here
];

const SecretMessages = () => {
  const [inputPasscode, setInputPasscode] = useState('');
  const [unlockedMessage, setUnlockedMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUnlock = () => {
    const foundMessage = messages.find((message) => message.passcode === inputPasscode);
    if (foundMessage) {
      setUnlockedMessage(foundMessage.text);
      setErrorMessage('');
    } else {
      setUnlockedMessage(null);
      setErrorMessage('Invalid passcode. Try again.');
    }
  };

  return (
    <SecretContainer>
      <h2>Unlock Secret Messages</h2>
      <InputContainer>
        <PasscodeInput
          type="password"
          placeholder="Enter the passcode"
          value={inputPasscode}
          onChange={(e) => setInputPasscode(e.target.value)}
        />
        <UnlockButton onClick={handleUnlock}>Unlock</UnlockButton>
      </InputContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {unlockedMessage && <SecretText>{unlockedMessage}</SecretText>}
    </SecretContainer>
  );
};

export default SecretMessages;

const SecretContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fff5f8;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  margin: 20px 0;
`;

const PasscodeInput = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #ff6f61;
  width: 60%;
  margin-right: 10px;
`;

const UnlockButton = styled.button`
  padding: 10px 15px;
  font-size: 1.2rem;
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff4f4f;
  }
`;

const SecretText = styled.p`
  font-size: 1.4rem;
  color: #ff6f61;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
`;
