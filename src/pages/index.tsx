import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { AutoScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';
import { Gray } from '@/styles/theme';
import activeIndexState from '@/store/activeIndex';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';

const IndexPage: React.FC = () => {
  const activeIndex = useRecoilValue(activeIndexState);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);

  return (
    <HomeLayout title="main">
      <Header
        backgroundColor="transparent"
        homeColor={activeIndex === 0 ? Gray['100'] : ''}
      />
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
    </HomeLayout>
  );
};

export default IndexPage;
