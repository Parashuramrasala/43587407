// src/GreetingCard.js

import React from 'react';
import './GreetingCard.css';
import backgroundImage from './birthday-background.webp';

function GreetingCard() {
  return (
    <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Happy Birthday!</h1>
        <p>Wishing you a day filled with love, joy, and lots of cake!</p>
        <p>May all your dreams come true.</p>
      </div>
    </div>
  );
}

export default GreetingCard;
