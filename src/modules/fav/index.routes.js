import React from 'react';

import Qurans from './screens';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '@/constants';

import TabItem from '@/layout/tab/TabItem';

const routes = [
  {
    name: 'Qurans',
    component: Qurans,
    options: {
      tabBarLabel: 'القرءان',
      tabBarIcon: ({focused, color}) => {
        return (
          <TabItem
            focused={focused}
            Icon={
              <FontAwesome5
                name="book-reader"
                size={25}
                color={focused ? colors.secondary : colors.subLight}
              />
            }
            text="القرءان"
            style={{
              borderTopEndRadius: 20,
              borderBottomEndRadius: 20,
            }}
          />
        );
      },
    },
  },
];

export default routes;
