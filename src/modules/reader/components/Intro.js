import React from 'react';

import {View, StyleSheet, Image, Text, ActivityIndicator} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {colors, images, sizes, fonts} from '@/constants';

const Intro = ({data, isLoading}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}>
        <Image source={images.muslim} style={styles.image} />
        {!isLoading ? (
          <View style={styles.titles}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.subtitle}>{data.rewaya}</Text>
            <Text style={styles.count}>
              <Text>{data.count} </Text>
              <Text>سورة</Text>
            </Text>
          </View>
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator color={colors.light} size="large" />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.padding,
    marginBottom: sizes.padding,
    paddingHorizontal: sizes.padding,
  },
  linearGradient: {
    borderRadius: sizes.radius,
    height: 200,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    end: 0,
    bottom: 0,
    opacity: 0.5,
  },
  titles: {},
  title: {
    color: colors.subLight,
    ...fonts.h2,
  },
  subtitle: {
    color: colors.light,
    marginBottom: sizes.base,
    ...fonts.h1,
  },
  count: {
    textAlign: 'center',
    backgroundColor: colors.light,
    width: 100,
    padding: 3,
    borderRadius: 20,
    color: colors.dark,
    ...fonts.h3,
  },
  loader: {
    alignItems: 'flex-start',
  },
});

export default Intro;
