import React, { useRef, useState, useEffect } from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const eventsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (eventsRef.current) {
        setTotalWidth(eventsRef.current.scrollWidth);
      }
    };

    updateDimensions();
    // Use a small delay to ensure rendering is complete
    const timer = setTimeout(updateDimensions, 100);

    window.addEventListener('resize', updateDimensions);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Calculate progress through the section
      // rect.top goes from 0 (at start) to -(sectionHeight - viewHeight) (at end)
      const scrolled = -rect.top / (sectionHeight - viewHeight);
      const progress = Math.min(Math.max(scrolled, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [events]);

  // Translate from 0 (start) to -(totalWidth - containerWidth) (end)
  const translateX = -scrollProgress * Math.max(0, totalWidth - containerWidth);

  return (
    <div 
      className="timeline-sticky-wrapper" 
      ref={sectionRef} 
      style={{ height: `${events.length * 60}vh` }}
    >
      <div className="timeline-sticky-content">
        <div className="timeline-header">
          <h2>Milestones in Procedural Generation</h2>
        </div>
        
        <div className="timeline-window" ref={containerRef}>
          <div 
            className="timeline-horizontal-container" 
            ref={eventsRef}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div className="timeline-line"></div>
            <div className="timeline-events">
              {events.map((event, index) => (
                <div key={index} className="timeline-event-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-text">{event.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
