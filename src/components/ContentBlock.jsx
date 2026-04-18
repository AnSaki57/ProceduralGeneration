import React from 'react';

const ContentBlock = ({ imageSrc, heading, children }) => {
  return (
    <div className="content-section">
      <div className="buffer-space">
        <span className="buffer-text">Buffer space</span>
      </div>
      <div className="content-heading-wrapper">
        <div className="content-heading">
          <h2>{heading}</h2>
        </div>
      </div>
      <div className="content-text">
        {children}
      </div>
      <div className="content-image-wrapper">
        {imageSrc ? (
          <img src={imageSrc} alt={heading} className="content-image" />
        ) : (
          <p className="image-placeholder">Image #n</p>
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
