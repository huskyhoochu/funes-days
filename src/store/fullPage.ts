import { atom } from 'recoil';

const fullPageState = atom<boolean>({
  key: 'fullPage',
  default: false,
});

export default fullPageState;
