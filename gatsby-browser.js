import 'the-new-css-reset';
import { RecoilRoot } from 'recoil';

export const wrapPageElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>;
};
