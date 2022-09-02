import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {colors, sizes, fonts} from '@/constants';

const ChapterItem = ({data, bookData, closeModal}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        closeModal();
        navigate('HadithList', {
          bookId: bookData.id,
          bookName: bookData.name,
          chapterId: data.Chapter_ID,
          chapterName: data.Chapter_Name,
        });
      }}>
      <Text style={styles.chapterText}>{data.Chapter_Name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginBottom: sizes.radius,
    padding: sizes.margin,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: `rgba(${colors.primary_rgba}, .1)`,
  },
  chapterText: {
    color: colors.dark,
    ...fonts.body3,
  },
});

export default ChapterItem;
