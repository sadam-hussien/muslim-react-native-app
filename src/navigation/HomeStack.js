import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {tabNavRoutes} from './TabNav';

import readerRoutes from '@/modules/reader/index.routes';

import quranRoutes from '@/modules/quran/index.routes';

const Stack = createNativeStackNavigator();

const routes = [...tabNavRoutes, ...readerRoutes, ...quranRoutes];

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map((item, index) => (
        <Stack.Screen name={item.name} component={item.component} key={index} />
      ))}
    </Stack.Navigator>
  );
}

export const homeStackRoutes = [
  {
    name: 'HomePage',
    component: HomeStack,
  },
];
