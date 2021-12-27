import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/react';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import useTheme from '@/hooks/useTheme';
import { MainWrapper } from './styled';

interface Props {
  title: string;
  children: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({ title, children }) => {
  const [ThemeClass, screen, theme] = useTheme();

  return (
    <>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <FaviconPackage screen={screen} theme={theme} />
      <Global styles={GlobalStyle} />
      <MainWrapper themeClass={ThemeClass}>{children}</MainWrapper>
    </>
  );
};

export default HomeLayout;