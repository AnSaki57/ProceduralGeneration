import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar left-sidebar">
        <div className="sidebar-text">
          PG<br/>carcas-<br/>sonne<br/>line of<br/>tiles<br/>|<br/>|<br/>V
        </div>
      </div>
      <div className="main-content">
        <header className="main-header">
          <h1>Title: “A brief tour of Procedural Generation”</h1>
        </header>
        {children}
      </div>
      <div className="sidebar right-sidebar">
        <div className="sidebar-text">
          PG<br/>carcas-<br/>sonne<br/>line of<br/>tiles<br/>|<br/>|<br/>V
        </div>
      </div>
    </div>
  );
};

export default Layout;
