import { atom } from 'recoil';

const curScrollState = atom<number>({
  key: 'curScroll',
  default: 0,
});

export default curScrollState;
