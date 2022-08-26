import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';

import {Back} from '@/components';

import {colors, sizes, fonts, images} from '@/constants';

import {getQuran} from '../server';

import LinearGradient from 'react-native-linear-gradient';

const Quran = ({route}) => {
  const {id} = route.params;
  const [ayahs, setAyahs] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    getQuran(id).then(res => {
      setData(res.data.data);
      setAyahs(res.data.data.ayahs);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Back />
      <FlatList
        data={ayahs}
        keyExtractor={item => item.number.inquran}
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color={colors.dark} />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.linearGradient}>
              <Image source={images.man} style={styles.image} />
              {data ? (
                <View style={styles.titles}>
                  <Text style={styles.title}>{data?.asma?.ar?.long}</Text>
                  <Text style={styles.subtitle}>
                    عدد الايات: {data?.ayahCount}
                  </Text>
                </View>
              ) : (
                <View style={styles.loader}>
                  <ActivityIndicator color={colors.light} size="large" />
                </View>
              )}
            </LinearGradient>
          </View>
        }
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.text.ar}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.subLight,
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: sizes.padding - 10,
    paddingVertical: sizes.padding,
  },
  header: {
    marginBottom: sizes.padding,
  },
  linearGradient: {
    borderRadius: sizes.radius,
    height: 120,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: 120,
    height: 120,
    end: 0,
    bottom: 0,
    opacity: 0.9,
  },
  titles: {},
  title: {
    color: colors.light,
    ...fonts.h2,
  },
  subtitle: {
    color: colors.subLight,
    marginBottom: sizes.base,
    ...fonts.h2,
  },
  loader: {
    alignItems: 'flex-start',
  },
  item: {
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    // borderWidth: 0.3,
    // borderColor: colors.primary,
    padding: sizes.padding,
    borderRadius: 5,
    marginBottom: sizes.margin,
    width: 100 - 4 + '%',
    // marginHorizontal: 'auto',
  },
  itemText: {
    ...fonts.h2,
    fontSize: 18,
    color: colors.dark,
  },
});

export default Quran;
