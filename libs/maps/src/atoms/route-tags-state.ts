import { atom } from 'recoil';

const routeTagsState = atom<string[]>({
  key: 'routeTagsState',
  default: [],
});

export default routeTagsState;
