import React from 'react';

import Hadith from './screens';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '@/constants';

import TabItem from '@/layout/tab/TabItem';

const routes = [
  {
    name: 'Hadith',
    component: Hadith,

    iconType: 'FontAwesome5',
    iconName: 'moon',
    label: 'الحديث',
    options: {
      tabBarLabel: 'الحديث',
      tabBarIcon: ({focused, color}) => {
        return (
          <TabItem
            focused={focused}
            Icon={
              <FontAwesome5
                name="moon"
                size={25}
                color={focused ? colors.secondary : colors.subLight}
              />
            }
            text="الحديث"
          />
        );
      },
    },
  },
];

export default routes;
