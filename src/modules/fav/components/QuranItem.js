import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {colors, sizes, fonts} from '@/constants';

const QuranItem = ({data}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Quran', {id: data.number})}>
      <View style={styles.number}>
        <Text style={{color: colors.primary}}>{data.number}</Text>
      </View>
      <Text style={styles.title}>{data.asma.ar.short}</Text>
      <Text style={styles.subTitle}>
        <Text>عدد الايات: </Text>
        {data.ayahCount}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: colors.light,
    borderRadius: sizes.radius,
    padding: sizes.radius,
    position: 'relative',
    overflow: 'hidden',
  },
  number: {
    position: 'absolute',
    end: sizes.radius,
    top: sizes.radius,
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    color: colors.primary,
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.dark,
    marginBottom: 5,
    ...fonts.h3,
  },
  subTitle: {
    color: colors.subDark,
    ...fonts.body3,
  },
});

export default QuranItem;
