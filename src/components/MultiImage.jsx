import React, { useState, useEffect, useRef } from 'react';

const MultiImage = ({ images }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the container has been scrolled past the top of the viewport
      // rect.top is negative when the top of the container is above the viewport
      const scrolled = -rect.top;
      const totalScrollableHeight = rect.height - viewportHeight;
      
      if (totalScrollableHeight <= 0) return;

      const progress = Math.min(Math.max(scrolled / totalScrollableHeight, 0), 1);
      
      // Map progress to image index
      // We divide the progress into equal parts for each image
      const index = Math.floor(progress * images.length);
      const clampedIndex = Math.min(index, images.length - 1);
      
      setActiveIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="multi-image-container" 
      ref={containerRef}
      style={{ height: `${(images.length + 1) * 150}vh` }} // Increased height for longer scroll distance
    >
      <div className="multi-image-sticky">
        {images.map((img, i) => (
          <div 
            key={i} 
            className={`multi-image-slide ${i === activeIndex ? 'active' : ''}`}
          >
            <div className="multi-image-visual">
              <img src={img.src} alt={img.caption} className="multi-image-img" />
              <div className="multi-image-caption-overlay">
                <div className="caption-content">
                   <p>{img.caption}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImage;
