import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {colors, fonts, sizes} from '@/constants';

const TabItem = ({focused, style, Icon, text}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // backgroundColor: focused ? `rgba(${colors.primary_rgba}, .2)` : null,
          backgroundColor: focused ? colors.light : null,
          ...style,
        },
      ]}>
      {Icon}
      <Text
        style={{
          marginTop: sizes.base,
          ...fonts.h4,
          color: focused ? colors.secondary : colors.subLight,
        }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: (sizes.width - sizes.padding * 2) / 5,
    height: 70,
  },
});

export default TabItem;
