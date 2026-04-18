import React from 'react';
import Layout from './components/Layout';
import IntroSection from './components/IntroSection';
import ContentBlock from './components/ContentBlock';
import { contentData } from './contentData';
import './index.css';

function App() {
  return (
    <Layout>
      <IntroSection />
      
      <div className="secondary-content-start">
        <p>Secondary content from here on out</p>
        <div className="arrow-down">
          |<br/>|<br/>V
        </div>
      </div>

      <div className="repeating-blocks">
        {contentData.map((data, index) => (
          <ContentBlock 
            key={data.id} 
            heading={data.heading} 
            imageSrc={data.imageSrc}
          >
            <p>{data.textContent}</p>
          </ContentBlock>
        ))}
      </div>
    </Layout>
  );
}

export default App;
