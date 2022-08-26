import axios from 'axios';

import {api_readers} from '@/constants';

export const getReaders = () => {
  return axios.get(api_readers);
};
