import 'the-new-css-reset';
import 'prism-themes/themes/prism-night-owl.min.css';
import React from 'react';
import { RecoilRoot } from 'recoil';

export const wrapRootElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
