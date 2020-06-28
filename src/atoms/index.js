import {atom} from 'recoil';

export const resumeState = atom({
  key: 'resumeState',
  default: {loading: true},
});
