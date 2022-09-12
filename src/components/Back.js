import React from 'react';

import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {sizes, fonts, colors} from '@/constants';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Back = ({children}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.btn}>
        <FontAwesome5
          name="long-arrow-alt-right"
          size={22}
          color={colors.light}
          style={{marginBottom: -4}}
        />
        <Text style={styles.text}>عودة</Text>
      </TouchableOpacity>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding,
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    width: 150,
    borderRadius: 25,
    height: 45,
  },
  text: {
    marginStart: sizes.radius,
    color: colors.light,
    ...fonts.body2,
  },
});

export default Back;
