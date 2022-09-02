import React from 'react';

import Home from './screens';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '@/constants';

import TabItem from '@/layout/tab/TabItem';

const routes = [
  {
    name: 'Home',
    component: Home,
    iconType: 'FontAwesome5',
    iconName: 'quran',
    label: 'الرئيسية',
    options: {
      tabBarLabel: 'الرئيسية',
      tabBarIcon: ({focused, color}) => {
        return (
          <TabItem
            focused={focused}
            Icon={
              <FontAwesome5
                name="quran"
                size={23}
                color={focused ? colors.secondary : colors.subLight}
              />
            }
            text="الرئيسية"
            style={{
              borderTopStartRadius: 20,
              borderBottomStartRadius: 20,
            }}
          />
        );
      },
    },
  },
];

export default routes;
