import React, { useMemo } from 'react';
import Tile from './Tile';
import gggg from '../assets/tiles/gggg.png';
import ggrg from '../assets/tiles/ggrg.png';
import tggt from '../assets/tiles/tggt.png';
import ttgt from '../assets/tiles/ttgt.png';
import ttrt from '../assets/tiles/ttrt.png';
import tttt from '../assets/tiles/tttt.png';

const tileImages = [gggg, ggrg, tggt, ttgt, ttrt, tttt];
const rotations = [0, 90, 180, 270];

const TileGrid = () => {
  // Generate tiles once per mount to avoid re-rendering layout changes
  const tiles = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => {
      const randomTile = tileImages[Math.floor(Math.random() * tileImages.length)];
      const randomRot = rotations[Math.floor(Math.random() * rotations.length)];
      return <Tile key={i} type={randomTile} rotation={randomRot} />;
    });
  }, []);

  return (
    <div className="tile-grid">
      {tiles}
    </div>
  );
};

export default TileGrid;
