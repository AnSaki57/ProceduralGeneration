import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar left-sidebar">
      </div>
      <div className="main-content">
        <header className="main-header">
          <h1>A brief tour of Procedural Generation</h1>
        </header>
        {children}
      </div>
      <div className="sidebar right-sidebar">
      </div>
    </div>
  );
};

export default Layout;
