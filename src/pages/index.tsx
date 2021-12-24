import React, { useRef } from 'react';
import Layout from '@/layout';
import { AutoScrollSection } from '@/components/templates/section';

const IndexPage = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  return (
    <Layout title="main">
      <AutoScrollSection forwardedRef={firstSectionRef} index={0}>
        <div style={{ paddingBlock: 60 }}>
          <h3>hi 안녕</h3>
        </div>
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={secondSectionRef} index={1}>
        <div style={{ paddingBlock: 60 }}>
          <h3>bye 안녕</h3>
        </div>
      </AutoScrollSection>
    </Layout>
  );
};

export default IndexPage;
