import React from 'react';
import { Helmet } from 'react-helmet';
import BeigeDark from '@/images/green-light.png';

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>hello</title>
        <link rel="icon" href={BeigeDark} type="image/png" />
      </Helmet>
      <p style={{ fontFamily: 'Nanum Gothic Coding' }}>hello 안녕</p>
    </main>
  );
};

export default IndexPage;
