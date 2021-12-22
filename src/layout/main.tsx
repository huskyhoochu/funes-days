import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/react';
import { cx } from '@emotion/css';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import { ContainerClass } from '@/styles/container';
import Header from '@/components/atoms/header';
import useTheme from '@/hooks/useTheme';

export interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const [ThemeClass] = useTheme();

  return (
    <>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <FaviconPackage />
      <Global styles={GlobalStyle} />
      <Header />
      <main className={cx([ContainerClass, ThemeClass])}>{children}</main>
    </>
  );
};

export default MainLayout;
