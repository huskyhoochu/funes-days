import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { AutoScrollSection } from '@/components/templates/section';
import Intro from '@/components/pages/home/intro';
import { Gray } from '@/styles/theme';
import activeIndexState from '@/store/activeIndex';
import Header from '@/components/atoms/header';
import HomeLayout from '@/layout/home';
import useScrollProperty from '@/hooks/useScrollProperty';
import radius from '@/styles/radius';

const IndexPage: React.FC = () => {
  const activeIndex = useRecoilValue(activeIndexState);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const getScrollProperty = useScrollProperty(secondSectionRef);
  const [properties, setProperties] = useState({
    scrollTop: 0,
    sectionTop: 0,
    sectionBottom: 0,
    type: '',
  });

  useEffect(() => {
    const watchProperty = (e: Event) => {
      console.log(e);
      const scrollProperty = getScrollProperty();
      setProperties({ ...scrollProperty, type: e.type });
    };

    window.addEventListener('scroll', watchProperty);
    window.addEventListener('touchstart', watchProperty);

    return () => {
      window.removeEventListener('scroll', watchProperty);
      window.removeEventListener('touchstart', watchProperty);
    };
  }, [getScrollProperty]);

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
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          width: 300,
          margin: 32,
          padding: 16,
          borderRadius: radius['12'],
          backgroundColor: 'white',
        }}
      >
        <p>second section values</p>
        <p>type: {properties.type}</p>
        <p>scrollTop: {properties.scrollTop}</p>
        <p>sectionTop: {properties.sectionTop}</p>
        <p>sectionBottom: {properties.sectionBottom}</p>
      </div>
    </HomeLayout>
  );
};

export default IndexPage;
