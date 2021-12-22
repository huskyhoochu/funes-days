import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/react';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import { ContainerClass } from '@/styles/container';
import { cx } from '@emotion/css';
import { ThemeClass } from './classes';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <main className={cx([ContainerClass, ThemeClass])}>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <FaviconPackage />
      <Global styles={GlobalStyle} />
      {children}
    </main>
  );
};

export default MainLayout;
