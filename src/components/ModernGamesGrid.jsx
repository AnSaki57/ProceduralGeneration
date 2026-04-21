import React, { useState } from 'react';

const ModernGamesGrid = ({ games }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getNeighborIndex = (index) => {
    // 0 <-> 1 (Top row)
    // 2 <-> 3 (Bottom row)
    if (index === 0) return 1;
    if (index === 1) return 0;
    if (index === 2) return 3;
    if (index === 3) return 2;
    return null;
  };

  return (
    <div className="modern-games-grid">
      {games.map((game, i) => {
        const isHovered = hoveredIndex === i;
        const neighborHovered = hoveredIndex === getNeighborIndex(i);
        
        return (
          <div 
            key={i} 
            className={`game-box ${isHovered ? 'is-hovered' : ''} ${neighborHovered ? 'neighbor-hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Initial State View */}
            <div className="initial-view">
              <img src={game.initialImage} alt={game.heading} className="game-img" />
              <div className="game-content">
                <h3>{game.heading}</h3>
                <p>{game.initialText}</p>
              </div>
            </div>

            {/* Hover State View (Current Box) */}
            <div className="hover-view-self">
              <img src={game.hoverImage} alt={`${game.heading} Details`} className="game-img-hover" />
            </div>

            {/* Hover State View (Neighbor Box Overlay) */}
            <div className="neighbor-overlay">
              <div className="neighbor-content">
                <h3>{hoveredIndex !== null ? games[hoveredIndex].hoverHeading : ''}</h3>
                <p>{hoveredIndex !== null ? games[hoveredIndex].hoverText : ''}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModernGamesGrid;
