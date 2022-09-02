import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

import {HadithItem} from '../components';

import {Back} from '@/components';

import {colors, fonts, sizes, images} from '@/constants';

import {getHadithList} from '../server';

import LinearGradient from 'react-native-linear-gradient';

const HadithList = ({route}) => {
  const {bookId, bookName, chapterId, chapterName} = route.params;
  const [hadithList, setHadithList] = useState(null);
  useEffect(() => {
    getHadithList({bookId, chapterId}).then(res => {
      console.log(res.data.Chapter);
      setHadithList(res.data.Chapter);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Back />
      <FlatList
        data={hadithList}
        keyExtractor={item => item.Hadith_ID.toString()}
        ListEmptyComponent={() => (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.dark} />
          </View>
        )}
        ListHeaderComponent={() => (
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.linearGradient}>
            <Image source={images.prayer} style={styles.image} />
            <Text style={styles.title}>{bookName}</Text>
            <Text style={styles.subTitle}>{chapterName}</Text>
          </LinearGradient>
        )}
        renderItem={({item}) => <HadithItem data={item} />}
        contentContainerStyle={{padding: sizes.padding}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.subLight,
    flex: 1,
  },

  loader: {
    flex: 1,
    padding: sizes.padding,
  },
  linearGradient: {
    borderRadius: sizes.radius,
    height: 190,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
    marginBottom: sizes.padding,
  },
  image: {
    position: 'absolute',
    width: 170,
    height: 170,
    end: 0,
    bottom: 0,
    opacity: 0.3,
  },
  title: {
    color: colors.light,
    ...fonts.h1,
    // marginBottom: 5,
  },
  subTitle: {
    color: colors.subLight,
    ...fonts.h2,
  },
});

export default HadithList;
