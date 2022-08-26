import React from 'react';

import {getHeaderTitle} from '@react-navigation/elements';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Header from '@/layout/header';

import homeRoutes from '@/modules/home/index.routes';
import hadithRoutes from '@/modules/hadith/index.routes';
import radioRoutes from '@/modules/radio/index.routes';
import otherReadersRoutes from '@/modules/otherReaders/index.routes';
import favRoutes from '@/modules/fav/index.routes';

import {fonts, colors, sizes} from '@/constants';

const Tab = createBottomTabNavigator();

const tabs = [
  ...homeRoutes,
  ...hadithRoutes,
  ...radioRoutes,
  ...otherReadersRoutes,
  ...favRoutes,
];

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);
          return <Header title={title} />;
        },
        tabBarStyle: {
          position: 'absolute',
          left: sizes.padding,
          right: sizes.padding,
          bottom: sizes.padding,
          backgroundColor: colors.secondary,
          borderRadius: 20,
          height: 70,
          flex: 1,
        },
        tabBarShowLabel: false,
      })}>
      {tabs.map((item, index) => (
        <Tab.Screen
          name={item.name}
          component={item.component}
          key={index}
          options={item.options}
        />
      ))}
    </Tab.Navigator>
  );
}

export const tabNavRoutes = [
  {
    name: 'TabNav',
    component: TabNav,
  },
];
