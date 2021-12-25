import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
