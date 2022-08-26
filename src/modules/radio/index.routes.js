import React from 'react';

import Radio from './screens';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors} from '@/constants';

import TabItem from '@/layout/tab/TabItem';

const routes = [
  {
    name: 'Radio',
    component: Radio,
    options: {
      tabBarLabel: 'الاذاعة',
      tabBarIcon: ({focused, color}) => {
        return (
          <TabItem
            focused={focused}
            Icon={
              <MaterialIcons
                name="radio"
                size={25}
                color={focused ? colors.secondary : colors.subLight}
              />
            }
            text="الاذاعة"
          />
        );
      },
    },
  },
];

export default routes;
