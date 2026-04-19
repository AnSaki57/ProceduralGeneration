import React from 'react';

const Tile = ({ type, rotation }) => {
  return (
    <div className="tile">
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
