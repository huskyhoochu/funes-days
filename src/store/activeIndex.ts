import { atom } from 'recoil';

const activeIndexState = atom<number>({
  key: 'activeIndex',
  default: 0,
});

export default activeIndexState;
