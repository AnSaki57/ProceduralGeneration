import React from 'react';
import TileGrid from './TileGrid';

const Layout = ({ children, tabsRibbon }) => {
  return (
    <div className="page-container">
      <header className="main-header">
        <h1>A brief tour of Procedural Generation</h1>
      </header>
      {tabsRibbon}
      <div className="layout-container">
        <div className="sidebar left-sidebar">
          <TileGrid />
        </div>
        <div className="main-content">
          {children}
        </div>
        <div className="sidebar right-sidebar">
          <TileGrid />
        </div>
      </div>
    </div>
  );
};

export default Layout;
