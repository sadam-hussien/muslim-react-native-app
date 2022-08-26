import React, {Fragment} from 'react';

import {I18nManager} from 'react-native';

import {Player} from './components';

import Navigator from './navigation';

import {Provider} from './store';

const App = () => {
  I18nManager.forceRTL(true);
  return (
    <Provider>
      <Navigator />
      <Player />
    </Provider>
  );
};

export default App;
