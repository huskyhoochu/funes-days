import React from 'react';
import { RecoilRoot } from 'recoil';

const Root: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Root;
