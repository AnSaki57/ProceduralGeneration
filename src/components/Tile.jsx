import React, { useMemo } from 'react';

const Tile = ({ type, rotation }) => {
  // Generate a random delay between 0 and 150ms to offset the generation within the same row
  const randomDelay = useMemo(() => Math.floor(Math.random() * 150), []);

  return (
    <div 
      className="tile tile-animated"
      style={{ animationDelay: `${randomDelay}ms` }}
    >
      {type ? (
        <img 
          src={type} 
          alt="Carcassonne Tile" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `rotate(${rotation || 0}deg)`
          }} 
        />
      ) : (
        "insert tile"
      )}
    </div>
  );
};

export default Tile;
