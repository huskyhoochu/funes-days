import React from 'react';
import Header from '@/components/atoms/header';
import Poops from '@/templates/poops';
import HomeLayout from '@/layout/home';

const PoopsPage: React.FC = () => {
  return (
    <HomeLayout title="똥피하기 게임" posts={[]}>
      <Header backgroundColor="transparent" />
      <div className="min-h-[100vh] flex items-center justify-center">
        <Poops />
      </div>
    </HomeLayout>
  );
};

export default PoopsPage;
