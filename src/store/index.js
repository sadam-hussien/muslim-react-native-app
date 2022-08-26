import React, {createContext, useReducer} from 'react';

import {mediaReducer, mediaState} from './reducers';

export const store = createContext();

export function Provider({children}) {
  const [media, dispatchMedia] = useReducer(mediaReducer, mediaState);
  return (
    <store.Provider value={{media, dispatchMedia}}>{children}</store.Provider>
  );
}
