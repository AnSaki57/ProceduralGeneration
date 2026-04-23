import React from 'react';
import MultiImage from './MultiImage';

const ContentBlock = ({ imageSrc, videoSrc, multiImages, heading, caption, funFacts, children }) => {
  return (
    <div className="content-section">
      {funFacts && funFacts.map((fact, index) => (
        <div key={index} className="fun-fact" style={{ top: fact.yAxis || '100px' }}>
          <strong>Fun Fact</strong><br />
          {fact.content}
        </div>
      ))}
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
      
      {multiImages ? (
        <MultiImage images={multiImages} />
      ) : videoSrc ? (
        <div className="content-video-wrapper">
          {videoSrc.includes('.mp4') || videoSrc.includes('v.redd.it') ? (
            <video 
              src={videoSrc} 
              className="content-video"
              controls
              muted
              autoPlay
              loop
              playsInline
            />
          ) : (
            <iframe 
              src={videoSrc} 
              title={heading}
              className="content-video"
              allowFullScreen
              scrolling="no"
            />
          )}
          {caption && <div className="image-caption">{caption}</div>}
        </div>
      ) : imageSrc ? (
        <div className="content-image-wrapper">
          <img src={imageSrc} alt={heading} className="content-image" />
          {caption && <div className="image-caption">{caption}</div>}
        </div>
      ) : null}
    </div>
  );
};

export default ContentBlock;
