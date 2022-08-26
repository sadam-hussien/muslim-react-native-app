import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts, sizes} from '@/constants';

const Stats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <View style={styles.item}>
          <View style={styles.wrapper}>
            <Text style={styles.itemTitle}>اخـر قراءة</Text>
          </View>
          <Text style={styles.itemRes}>المدثر</Text>
        </View>
        <View style={[styles.item, styles.lastItem]}>
          <View style={styles.wrapper}>
            <Text style={styles.itemTitle}>اخـر ما استمعت</Text>
          </View>
          <Text style={[styles.itemRes, styles.itemResLast]}>الرحمن</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.margin,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
  },
  lastItem: {
    marginStart: sizes.margin,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.base,
  },
  itemTitle: {
    color: colors.dark,
    ...fonts.body2,
  },
  itemRes: {
    backgroundColor: colors.primary,
    width: 'auto',
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 3,
    color: colors.light,
    ...fonts.body2,
  },
  itemResLast: {
    backgroundColor: colors.secondary,
  },
});

export default Stats;
