import React, {useEffect, useState, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {store} from '@/store';

import {action_set_media} from '@/store/actions';

import {Back} from '@/components';

import {Intro, Sura} from '../components';

import {colors, sizes, fonts} from '@/constants';

import {getReader} from '../server';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Reader = ({route}) => {
  const {id} = route.params;

  const {dispatchMedia} = useContext(store);

  const [readerData, setReaderData] = useState(null);

  const [surasData, setsurasData] = useState(null);

  const [, setSurasDataSlice] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const itemsCount = 10;

  const loadMore = () => {
    if (readerData && surasData) {
      if (readerData.surasData.length > surasData.length) {
        setSurasDataSlice(prev => {
          const slicing = readerData.surasData.slice(
            prev + itemsCount,
            prev + itemsCount * 2,
          );
          setsurasData(prevData => [...prevData, ...slicing]);
          return prev + itemsCount;
        });
      }
    }
  };

  useEffect(() => {
    getReader(id)
      .then(res => {
        setReaderData(res.data);
        setsurasData(res.data.surasData.slice(0, 10));
        dispatchMedia(action_set_media(res.data.surasData));
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Back />
      <ScrollView>
        <Intro data={readerData} isLoading={isLoading} />
        <View style={{paddingHorizontal: sizes.padding}}>
          {!isLoading ? (
            <>
              {surasData.map((item, index) => (
                <Sura data={item} key={item.id} index={index} />
              ))}
              <TouchableOpacity style={styles.loadMore} onPress={loadMore}>
                <Text style={styles.loadMoreText}>عرض المزيد</Text>
                <Ionicons name="chevron-down" color={colors.light} size={25} />
              </TouchableOpacity>
            </>
          ) : (
            <ActivityIndicator size="large" color={colors.dark} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.subLight,
    flex: 1,
  },
  loadMore: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 25,
    marginTop: sizes.padding,
    marginBottom: sizes.padding,
  },
  loadMoreText: {
    color: colors.light,
    marginEnd: sizes.base,
    ...fonts.body2,
  },
});

export default Reader;
