import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {colors, sizes, fonts} from '@/constants';

const Index = ({title}) => {
  return (
    <View style={styles.header}>
      {/* logo  */}
      <View style={styles.logo}>
        <View style={styles.logoImg}></View>
        <Text style={styles.logoText}>مسلم</Text>
      </View>

      {/* options  */}
      <View style={styles.headerOptions}>
        <TouchableOpacity style={styles.notify}>
          <View style={styles.notifyDot}></View>
          <IoniconsIcon
            name="notifications-outline"
            size={32}
            color={colors.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profile}>
          <AntDesignIcon name="user" size={32} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: colors.light,
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
  },
  logoText: {
    color: colors.dark,
    ...fonts.h1,
  },
  logoImg: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: '50%',
    start: 0,
    transform: [
      {
        translateY: -27,
      },
      {
        translateX: 8,
      },
    ],
    backgroundColor: colors.primary,
    borderRadius: 40,
    opacity: 0.3,
  },
  headerOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 45,
    height: 45,
    backgroundColor: `rgba(${colors.primary_rgba}, .2)`,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notify: {
    marginEnd: sizes.margin,
    position: 'relative',
  },
  notifyDot: {
    position: 'absolute',
    top: 0,
    end: -4,
    width: 9,
    height: 9,
    backgroundColor: '#dc3545',
    borderRadius: 10,
  },
});

export default Index;
