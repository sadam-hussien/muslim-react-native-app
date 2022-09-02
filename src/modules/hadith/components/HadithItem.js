import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, sizes, fonts} from '@/constants';

const HadithItem = ({data, openModal}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => openModal({id: data.Book_ID, name: data.Book_Name})}>
      <View style={styles.indexWrapper}>
        <Text style={styles.index}>{data.Book_ID}</Text>
      </View>
      <Text style={styles.title}>{data.Book_Name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.base,
    borderRadius: 10,
    marginBottom: sizes.margin,
    borderWidth: 1,
    borderColor: `rgba(${colors.primary_rgba}, .2)`,
  },
  title: {
    ...fonts.body2,
    color: colors.dark,
    paddingRight: 40,
  },
  indexWrapper: {
    width: 30,
    height: 30,
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizes.base,
  },
  index: {
    color: colors.primary,
  },
});

export default HadithItem;
