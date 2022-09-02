import React from 'react';

import {getHeaderTitle} from '@react-navigation/elements';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Header from '@/layout/header';

import TabButton from './TabButton';

import homeRoutes from '@/modules/home/index.routes';
import quranRoutes from '@/modules/qurans/index.routes';
import hadithRoutes from '@/modules/hadith/index.routes';
import otherReadersRoutes from '@/modules/otherReaders/index.routes';
import radioRoutes from '@/modules/radio/index.routes';

import {fonts, colors, sizes} from '@/constants';

const Tab = createBottomTabNavigator();

const tabs = [
  ...homeRoutes,
  ...quranRoutes,
  ...hadithRoutes,
  ...otherReadersRoutes,
  ...radioRoutes,
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
          backgroundColor: colors.dark,
          borderRadius: 32,
          height: 65,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          paddingHorizontal: sizes.margin,
        },
        tabBarShowLabel: false,
      })}>
      {tabs.map((item, index) => (
        <Tab.Screen
          name={item.name}
          component={item.component}
          key={index}
          options={{
            ...item.options,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
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
