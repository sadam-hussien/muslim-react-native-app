import React from 'react';

import {colors, fonts, sizes} from '@/constants';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;
  return (
    <View style={[styles.container, {flexGrow: focused ? 2 : 1}]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.btn,
          {
            backgroundColor: focused ? colors.primary : null,
            paddingHorizontal: focused ? sizes.radius : 0,
          },
        ]}>
        {item.iconType === 'FontAwesome5' ? (
          <FontAwesome5
            name={item.iconName}
            size={focused ? 15 : 27}
            color={colors.light}
          />
        ) : item.iconType === 'MaterialIcons' ? (
          <MaterialIcons
            name={item.iconName}
            size={focused ? 15 : 27}
            color={colors.light}
          />
        ) : (
          <View></View>
        )}
        {focused && <Text style={styles.text}>{item.label}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    borderRadius: 43,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
  },
  text: {
    marginLeft: sizes.base,
    ...fonts.h3,
    textTransform: 'capitalize',
    color: colors.light,
  },
});

export default TabButton;
