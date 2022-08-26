import axios from 'axios';

import {api_quranText} from '@/constants';

export const getQuran = id => {
  return axios.get(`${api_quranText}/${id}`);
};
