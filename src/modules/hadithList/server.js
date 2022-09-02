import axios from 'axios';

import {api_hadith_list} from '@/constants';

export const getHadithList = ({bookId, chapterId}) => {
  return axios.get(`${api_hadith_list}/${bookId}/${chapterId}/ar-notashkeel`);
};
