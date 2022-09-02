import {SET_MEDIA, SET_ACTIVE_MEDIA, REMOVE_MEDIA} from '../types';

export const mediaState = {
  suras: null,
  activeMedia: {
    index: 0,
    data: {},
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
    case REMOVE_MEDIA: {
      return {
        ...state,
        // suras: null,
        activeMedia: {
          index: 0,
          data: {},
        },
      };
    }
    default: {
      return state;
    }
  }
};
