import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {colors, sizes, fonts} from '@/constants';

const HadithItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.sanad}>
        <Text style={styles.title}>السند</Text>
        <Text style={styles.content}>{data.Ar_Sanad_Without_Tashkeel}</Text>
      </View>
      <View style={styles.con}>
        <Text style={styles.title}>المحتوى</Text>
        <Text style={styles.content}>{data.Ar_Text_Without_Tashkeel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: sizes.margin,
    borderRadius: 15,
    marginBottom: sizes.margin,
  },
  sanad: {
    marginBottom: sizes.margin,
    paddingBottom: sizes.margin,
    borderBottomWidth: 1,
    borderBottomColor: `rgba(0, 0, 0, .1)`,
  },
  title: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    width: 80,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    color: colors.primary,
    marginBottom: sizes.base,
    ...fonts.body3,
  },
  content: {
    ...fonts.body3,
    color: colors.dark,
  },
});

export default HadithItem;
