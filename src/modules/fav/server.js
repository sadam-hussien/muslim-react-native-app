import axios from 'axios';

import {api_quranText} from '@/constants';

export const getQuran = () => {
  return axios.get(api_quranText);
};
