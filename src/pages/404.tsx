import React from 'react';
import { Link } from 'gatsby';
import MainLayout from '@/layout/main';

const NotFoundPage = () => {
  return (
    <MainLayout title="404 Not Found">
      <h1>404 Not Found</h1>
      <Link to="/">Go home</Link>
    </MainLayout>
  );
};

export default NotFoundPage;
