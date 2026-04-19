import React, { useMemo, useState, useEffect } from 'react';
import Tile from './Tile';
import gggg from '../assets/tiles/gggg.png';
import ggrg from '../assets/tiles/ggrg.png';
import ggrr from '../assets/tiles/ggrr.png';
import grrr from '../assets/tiles/grrr.png';
import gtgt from '../assets/tiles/gtgt.png';
import rgrg from '../assets/tiles/rgrg.png';
import rrrr from '../assets/tiles/rrrr.png';
import tggg from '../assets/tiles/tggg.png';
import tggt from '../assets/tiles/tggt.png';
import tggt_2 from '../assets/tiles/tggt_2.png';
import tgrr from '../assets/tiles/tgrr.png';
import tgtg_2 from '../assets/tiles/tgtg_2.png';
import trgr from '../assets/tiles/trgr.png';
import trrg from '../assets/tiles/trrg.png';
import trrr from '../assets/tiles/trrr.png';
import trrt from '../assets/tiles/trrt.png';
import ttgt from '../assets/tiles/ttgt.png';
import ttrt from '../assets/tiles/ttrt.png';
import tttt from '../assets/tiles/tttt.png';

const tileData = [
  { img: gggg, edges: 'gggg' },
  { img: ggrg, edges: 'ggrg' },
  { img: ggrr, edges: 'ggrr' },
  { img: grrr, edges: 'grrr' },
  { img: gtgt, edges: 'gtgt' },
  { img: rgrg, edges: 'rgrg' },
  { img: rrrr, edges: 'rrrr' },
  { img: tggg, edges: 'tggg' },
  { img: tggt, edges: 'tggt' },
  { img: tggt_2, edges: 'tggt' },
  { img: tgrr, edges: 'tgrr' },
  { img: tgtg_2, edges: 'tgtg' },
  { img: trgr, edges: 'trgr' },
  { img: trrg, edges: 'trrg' },
  { img: trrr, edges: 'trrr' },
  { img: trrt, edges: 'trrt' },
  { img: ttgt, edges: 'ttgt' },
  { img: ttrt, edges: 'ttrt' },
  { img: tttt, edges: 'tttt' },
];

const allTiles = [];
tileData.forEach((tile) => {
  const e = tile.edges;
  // 0 deg: top, right, bottom, left
  allTiles.push({ img: tile.img, rotation: 0, top: e[0], right: e[1], bottom: e[2], left: e[3] });
  // 90 deg: left becomes top, top becomes right, etc.
  allTiles.push({ img: tile.img, rotation: 90, top: e[3], right: e[0], bottom: e[1], left: e[2] });
  // 180 deg
  allTiles.push({ img: tile.img, rotation: 180, top: e[2], right: e[3], bottom: e[0], left: e[1] });
  // 270 deg
  allTiles.push({ img: tile.img, rotation: 270, top: e[1], right: e[2], bottom: e[3], left: e[0] });
});

const TileGrid = () => {
  // Use state to prevent blocking the initial render while computing the grid
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    // We compute this asynchronously so it doesn't freeze the page mount
    const computeGrid = () => {
      const rows = 100;
      const cols = 3;
      const total = rows * cols;
      const resultGrid = new Array(total).fill(null);

      const getShuffledTiles = () => {
        const copy = [...allTiles];
        for (let i = copy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };

      const solve = (index) => {
        if (index === total) return true;
        
        const r = Math.floor(index / cols);
        const c = index % cols;
        
        const validTiles = getShuffledTiles().filter(t => {
          if (r > 0 && t.top !== resultGrid[index - cols].bottom) return false;
          if (c > 0 && t.left !== resultGrid[index - 1].right) return false;
          return true;
        });
        
        for (const t of validTiles) {
          resultGrid[index] = t;
          if (solve(index + 1)) return true;
        }
        
        resultGrid[index] = null;
        return false;
      };

      if (solve(0)) {
        setGrid(resultGrid);
      } else {
        console.error("Failed to generate a valid Carcassonne grid.");
        setGrid(new Array(total).fill(allTiles[0]));
      }
    };

    // Use setTimeout to allow the browser to paint first
    setTimeout(computeGrid, 0);
  }, []);

  if (!grid) {
    return (
      <div className="tile-grid">
        {/* Placeholder skeleton while generating */}
        {Array.from({ length: 300 }).map((_, i) => (
          <div key={i} className="tile" style={{ backgroundColor: '#eee' }}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="tile-grid">
      {grid.map((tileConfig, i) => (
        <Tile 
          key={i} 
          type={tileConfig.img} 
          rotation={tileConfig.rotation} 
        />
      ))}
    </div>
  );
};

export default TileGrid;
