import React, { useRef } from 'react';
import Layout from '@/layout';
import { AutoScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';

const IndexPage = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  return (
    <Layout title="main">
      <AutoScrollSection forwardedRef={firstSectionRef} index={0}>
        <Intro />
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={secondSectionRef} index={1}>
        <div style={{ paddingBlock: 60 }}>
          <h3>bye 안녕</h3>
        </div>
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={thirdSectionRef} index={2}>
        <div style={{ paddingBlock: 60 }}>
          <h3>bye 안녕</h3>
        </div>
      </AutoScrollSection>
    </Layout>
  );
};

export default IndexPage;
