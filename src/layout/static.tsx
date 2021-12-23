import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/react';
import GlobalStyle from '@/styles/global';
import { ContainerClass } from '@/styles/container';

interface Props {
  title: string;
  children: React.ReactNode;
}

const StaticLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{`${title} | funes-days`}</title>
      </Helmet>
      <Global styles={GlobalStyle} />
      <main className={ContainerClass}>{children}</main>
    </>
  );
};

export default StaticLayout;
