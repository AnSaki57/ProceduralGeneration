import React from 'react';

const ContentBlock = ({ imageSrc, heading, caption, children }) => {
  return (
    <div className="content-section">
      <div className="buffer-space">
      </div>
      {heading && (
        <div className="content-heading-wrapper">
          <div className="content-heading">
            <h2>{heading}</h2>
          </div>
        </div>
      )}
      <div className="content-text">
        {children}
      </div>
      <div className="content-image-wrapper">
        {imageSrc ? (
          <>
            <img src={imageSrc} alt={heading} className="content-image" />
            {caption && <div className="image-caption">{caption}</div>}
          </>
        ) : (
          <p className="image-placeholder">Image #n</p>
        )}
      </div>
    </div>
  );
};

export default ContentBlock;
