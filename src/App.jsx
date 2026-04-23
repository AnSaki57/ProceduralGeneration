import React, { useState, useRef, useLayoutEffect } from 'react';
import Layout from './components/Layout';
import IntroSection from './components/IntroSection';
import ContentBlock from './components/ContentBlock';
import ModernGamesGrid from './components/ModernGamesGrid';
import { contentData } from './contentData';
import './index.css';

const TABS = [
  { name: "Intro: Carcassonne", ids: [1, 2, 3] },
  { name: "Early procedural generation", ids: [4, 5, 6, 7, 8] },
  { name: "L-systems and cellular automata", ids: [9, 10, 11, 12, 13, 14] },
  { name: "Procedural Gen & modern games", ids: [15, 16] },
  { name: "More with procedural generation", ids: [17, 18, 19] },
  { name: "In summary", ids: [20, 21, 22] }
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollPositions = useRef({});

  const handleTabClick = (index) => {
    // Save the current scroll position of the window for the active tab
    scrollPositions.current[activeTab] = window.scrollY;
    setActiveTab(index);
  };

  useLayoutEffect(() => {
    // Restore the scroll position for the newly active tab, defaulting to 0
    const savedPosition = scrollPositions.current[activeTab] || 0;
    window.scrollTo(0, savedPosition);
  }, [activeTab]);

  const filteredData = contentData.filter(data => TABS[activeTab].ids.includes(data.id));

  const tabsRibbon = (
    <div className="tabs-ribbon">
      {TABS.map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${activeTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );

  return (
    <Layout tabsRibbon={tabsRibbon}>
      {activeTab === 0 && <IntroSection />}

      <div className="repeating-blocks">
        {filteredData.map((data, index) => {
          if (data.isGameGrid) {
            return <ModernGamesGrid key={data.id} games={data.games} />;
          }
          return (
            <ContentBlock
              key={data.id}
              heading={data.heading}
              imageSrc={data.imageSrc}
              videoSrc={data.videoSrc}
              multiImages={data.multiImages}
              caption={data.caption}
              funFacts={data.funFacts}
            >
              <p>{data.textContent}</p>
            </ContentBlock>
          );
        })}
      </div>
    </Layout>
  );
}

export default App;
