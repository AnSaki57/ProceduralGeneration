import React, { useState } from 'react';
import Layout from './components/Layout';
import IntroSection from './components/IntroSection';
import ContentBlock from './components/ContentBlock';
import { contentData } from './contentData';
import './index.css';

const TABS = [
  { name: "Intro: Carcassonne", ids: [1, 2, 3] },
  { name: "Early procedural generation", ids: [4, 5, 6, 7, 8, 9, 10] },
  { name: "L-systems and cellular automata", ids: [11, 12, 13, 14, 15, 16, 17] },
  { name: "Procedural generation in modern games", ids: [18, 19, 20, 21, 22, 23, 24, 25] },
  { name: "More with procedural generation", ids: [26, 27, 28] },
  { name: "In summary", ids: [29, 30] }
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {filteredData.map((data, index) => (
          <ContentBlock
            key={data.id}
            heading={data.heading}
            imageSrc={data.imageSrc}
            caption={data.caption}
            funFacts={data.funFacts}
          >
            <p>{data.textContent}</p>
          </ContentBlock>
        ))}
      </div>
    </Layout>
  );
}

export default App;
