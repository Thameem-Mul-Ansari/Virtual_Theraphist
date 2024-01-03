// CardFlipComponent.tsx

import React, { useState } from 'react';
import './CardFlipComponent.css'; // Import your CSS file

const CardFlipComponent: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div >

    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="card-inner">
        <div className="card-front">
          {/* Content for the front of the card */}
          Front Content
        </div>
        <div className="card-back">
          {/* Content for the back of the card */}
          Back Content
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardFlipComponent;
