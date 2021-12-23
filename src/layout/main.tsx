import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/react';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import Header from '@/components/atoms/header';
import useTheme from '@/hooks/useTheme';
import { MainWrapper } from './styled';

export interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  const [ThemeClass, screen, theme] = useTheme();

  return (
    <>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <FaviconPackage screen={screen} theme={theme} />
      <Global styles={GlobalStyle} />
      <Header />
      <MainWrapper themeClass={ThemeClass}>{children}</MainWrapper>
    </>
  );
};

export default MainLayout;
