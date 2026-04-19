import React from 'react';
import Tile from './Tile';

const TileGrid = () => {
  // Generate a large number of tiles to ensure infinite scrolling feel
  const tiles = Array.from({ length: 300 }).map((_, i) => (
    <Tile key={i} type="placeholder" />
  ));

  return (
    <div className="tile-grid">
      {tiles}
    </div>
  );
};

export default TileGrid;
