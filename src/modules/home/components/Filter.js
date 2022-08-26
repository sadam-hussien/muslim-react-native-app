import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import {colors, sizes, fonts} from '@/constants';

const Filter = ({handleSearch}) => {
  const [search, setSearch] = useState(null);
  const handleInputSearch = value => {
    setSearch(value);
    handleSearch(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={value => handleInputSearch(value)}
        placeholder="بحث باسم القارئ"
        style={[styles.inputStyle, styles.rewayaText]}
        textAlign="right"
        placeholderTextColor={colors.dark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputStyle: {
    backgroundColor: colors.light,
    borderRadius: 25,
    height: 50,
    paddingHorizontal: sizes.padding,
    paddingVertical: 5,
  },
  rewayaBtn: {
    marginTop: sizes.margin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewayaText: {
    color: colors.dark,
    ...fonts.body3,
  },
});

export default Filter;
