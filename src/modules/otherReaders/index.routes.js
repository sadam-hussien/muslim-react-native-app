import React from 'react';

import OtherReaders from './screens';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '@/constants';

import TabItem from '@/layout/tab/TabItem';

const routes = [
  {
    name: 'OtherReaders',
    component: OtherReaders,
    options: {
      tabBarLabel: 'قراء اخرين',
      tabBarIcon: ({focused, color}) => {
        return (
          <TabItem
            focused={focused}
            Icon={
              <FontAwesome5
                name="user"
                size={25}
                color={focused ? colors.secondary : colors.subLight}
              />
            }
            text="قراء اخرين"
          />
        );
      },
    },
  },
];

export default routes;
