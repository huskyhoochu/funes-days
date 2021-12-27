import React, { useRef } from 'react';
import { AutoScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';

const IndexPage: React.FC = () => {
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);

  return (
    <HomeLayout title="main">
      <Header backgroundColor="transparent" />
      <AutoScrollSection forwardedRef={firstSectionRef} index={0}>
        <Intro />
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={secondSectionRef} index={1}>
        <div
          style={{
            paddingBlock: 60,
            height: '100%',
            backgroundColor: 'yellow',
          }}
        >
          <h3>2 Section 안녕</h3>
        </div>
      </AutoScrollSection>
      <AutoScrollSection forwardedRef={thirdSectionRef} index={2}>
        <div
          style={{ paddingBlock: 60, height: '100%', backgroundColor: 'green' }}
        >
          <h3>3 Section 끝이야</h3>
        </div>
      </AutoScrollSection>
    </HomeLayout>
  );
};

export default IndexPage;
