import {SET_MEDIA, SET_ACTIVE_MEDIA} from './types';

export function action_set_media(data) {
  return {
    type: SET_MEDIA,
    payload: data,
  };
}

export function action_set_active_media(data) {
  return {
    type: SET_ACTIVE_MEDIA,
    payload: data,
  };
}
