import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './HomeStack';

export default function Navigator() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
