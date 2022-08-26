import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, sizes, fonts} from '@/constants';

import {useNavigation} from '@react-navigation/native';

const Reader = ({data, index}) => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <TouchableOpacity style={styles.fav}>
          <Ionicons name="heart-outline" color={colors.primary} size={25} />
        </TouchableOpacity>
        <View style={styles.index}>
          <Text style={styles.indexText}>{index + 1}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.desc}
        onPress={() => navigate('Reader', {id: data.id})}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.rewaya}>{data.rewaya}</Text>
      </TouchableOpacity>
      <View style={styles.bg}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '47%',
    marginBottom: sizes.margin,
    backgroundColor: colors.light,
    borderRadius: sizes.radius,
    padding: sizes.radius,
    position: 'relative',
    overflow: 'hidden',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.base,
  },
  index: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    borderRadius: 25,
  },
  indexText: {
    color: colors.primary,
    ...fonts.h4,
  },
  name: {
    color: colors.dark,
    marginBottom: 4,
    ...fonts.h3,
  },
  rewaya: {
    color: colors.subDark,
    ...fonts.body4,
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    end: 0,
    width: 16,
    height: 16,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
  },
});

export default Reader;
