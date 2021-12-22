import React from 'react';
import { Helmet } from 'react-helmet';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import { cx } from '@emotion/css';
import FaviconPackage from '@/components/atoms/faviconPackage';
import GlobalStyle from '@/styles/global';
import { ContainerClass } from '@/styles/container';
import { ThemeClass } from './classes';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <RecoilRoot>
      <main className={cx([ContainerClass, ThemeClass])}>
        <Helmet>
          <title>{`${title} | funes-days`}</title>
        </Helmet>
        <FaviconPackage />
        <Global styles={GlobalStyle} />
        {children}
      </main>
    </RecoilRoot>
  );
};

export default MainLayout;
