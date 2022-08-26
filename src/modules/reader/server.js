import axios from 'axios';

import {api_readers} from '@/constants';

export const getReader = id => {
  return axios.get(`${api_readers}/${id}`);
};
