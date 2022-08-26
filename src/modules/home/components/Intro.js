import React from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {colors, images, sizes, fonts} from '@/constants';

const Intro = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.linearGradient}>
        <Image source={images.mousque} style={styles.image} />
        <View style={styles.titles}>
          <Text style={styles.title}>الــقـرآن</Text>
          <Text style={styles.subtitle}>الــكـريم</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: sizes.radius,
    height: 200,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '80%',
    height: '110%',
    end: 0,
    bottom: 0,
    opacity: 0.3,
  },
  title: {
    color: colors.subLight,
    ...fonts.h1,
  },
  subtitle: {
    color: colors.light,
    ...fonts.largeTitle,
  },
});

export default Intro;
