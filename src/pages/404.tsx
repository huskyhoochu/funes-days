import React from 'react';
import { Link } from 'gatsby';
import Layout from '@/layout';

const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <h1>404 Not Found</h1>
      <Link to="/">Go home</Link>
    </Layout>
  );
};

export default NotFoundPage;
