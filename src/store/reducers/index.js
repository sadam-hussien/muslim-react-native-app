import {SET_MEDIA, SET_ACTIVE_MEDIA} from '../types';

export const mediaState = {
  suras: null,
  activeMedia: {
    index: null,
    data: null,
  },
};

export const mediaReducer = (state, action) => {
  switch (action.type) {
    case SET_MEDIA: {
      return {
        ...state,
        suras: action.payload,
      };
    }
    case SET_ACTIVE_MEDIA: {
      return {
        ...state,
        activeMedia: {
          index: action.payload.index,
          data: action.payload.data,
        },
      };
    }
    default: {
      return state;
    }
  }
};
