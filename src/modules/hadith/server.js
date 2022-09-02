import axios from 'axios';

import {api_hadith_books, api_hadith_chapters} from '@/constants';

export const getBooks = () => {
  return axios.get(`${api_hadith_books}`);
};

export const getChapters = ({id}) => {
  return axios.get(`${api_hadith_chapters}/${id}/ar`);
};
