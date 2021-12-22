import React from 'react';
import { Helmet } from 'react-helmet';
import FaviconPackage from '@/components/atoms/faviconPackage';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <main>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <FaviconPackage />
      {children}
    </main>
  );
};

export default MainLayout;
