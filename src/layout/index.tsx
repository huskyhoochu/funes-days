import React from 'react';
import Root from '@/layout/root';
import MainLayout, { MainLayoutProps } from '@/layout/main';

const Layout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <Root>
      <MainLayout title={title}>{children}</MainLayout>
    </Root>
  );
};

export default Layout;
