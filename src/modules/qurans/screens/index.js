import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {colors, sizes, fonts, images} from '@/constants';

import LinearGradient from 'react-native-linear-gradient';

import {getQuran} from '../server';

import {QuranItem} from '../components';

const Quran = () => {
  const [quran, setQuran] = useState(null);

  // fetch quran
  useEffect(() => {
    getQuran().then(res => {
      setQuran(res.data.data);
    });
  }, []);
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={quran}
        keyExtractor={item => item.number}
        numColumns={2}
        ListEmptyComponent={() => (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.dark} />
          </View>
        )}
        ListHeaderComponent={() => (
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.linearGradient}>
            <Image source={images.quran} style={styles.image} />
            <Text style={styles.title}>
              روى أبو موسى الأشعري رضي الله عنه أن النبي صلى الله عليه وسلم قال
              " مثل المؤمن الذي يقرأ القرآن كمثل الأترجة ريحها طيب وطعمها طيب...
            </Text>
          </LinearGradient>
        )}
        renderItem={({item}) => <QuranItem data={item} />}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.subLight,
    // flex: 1,
    padding: sizes.padding,
  },
  linearGradient: {
    borderRadius: sizes.radius,
    // height: 200,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
    marginBottom: sizes.padding,
  },
  image: {
    position: 'absolute',
    width: '80%',
    height: '100%',
    end: 0,
    bottom: 0,
    opacity: 0.5,
  },
  title: {
    color: colors.subLight,
    ...fonts.body2,
  },
  loader: {
    flex: 1,
    padding: sizes.padding,
  },
});

export default Quran;
