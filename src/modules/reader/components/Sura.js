import React, {useContext} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {sizes, colors, fonts} from '@/constants';

import {store} from '@/store';

import {action_set_active_media} from '@/store/actions';

const options = [
  {
    name: 'share',
    component: FontAwesome5,
    onPress: false,
    size: 20,
  },
  {
    name: 'heart-outline',
    component: Ionicons,
    onPress: false,
    size: 21,
  },
];

const Sura = ({data, index}) => {
  const {dispatchMedia, media} = useContext(store);
  const {activeMedia} = media;
  const idModify = () => {
    const id = parseInt(data.id);
    if (id > 9 && id < 100) {
      return `0${data.id}`;
    }
    if (id < 10) {
      return `00${data.id}`;
    }
    return data.id;
  };
  const playThis = () => {
    dispatchMedia(action_set_active_media({index, data}));
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            activeMedia.index === index ? colors.primary : colors.light,
        },
      ]}>
      <View style={styles.info}>
        <TouchableOpacity
          style={[
            styles.play,
            {
              backgroundColor:
                activeMedia.index === index
                  ? colors.light
                  : `rgba(${colors.primary_rgba}, .1)`,
            },
          ]}
          onPress={playThis}>
          <Ionicons
            name={`${
              activeMedia.index === index ? 'pause-outline' : 'play-outline'
            }`}
            color={colors.primary}
            size={24}
            style={{marginEnd: 3}}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.id,
            {
              color:
                activeMedia.index === index
                  ? `rgba(255, 255, 255, .9)`
                  : colors.subDark,
            },
          ]}>
          {idModify()}
        </Text>
        <Text
          style={[
            styles.name,
            {
              color: activeMedia.index === index ? colors.light : colors.dark,
            },
          ]}>
          {data.name}
        </Text>
      </View>
      <View style={styles.options}>
        {options.map((item, idx) => (
          <TouchableOpacity key={idx} style={styles.optionBtn}>
            <item.component
              name={item.name}
              size={item.size}
              color={
                activeMedia.index === index ? colors.light : colors.subDark
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: sizes.radius,
    paddingHorizontal: sizes.padding,
    borderRadius: sizes.radius,
    marginBottom: sizes.margin,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  play: {
    // backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginEnd: sizes.base,
  },
  id: {
    // color: colors.subDark,
    marginEnd: sizes.radius,
    ...fonts.body3,
  },
  name: {
    // color: colors.dark,
    ...fonts.h3,
  },
  optionBtn: {
    marginStart: sizes.radius,
    opacity: 0.8,
  },
});

export default Sura;
