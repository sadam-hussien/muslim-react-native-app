import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {colors, sizes, fonts} from '@/constants';

import {Stats, Intro, Filter, Reader} from '../components';

import {getReaders} from '../server';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [readers, setReaders] = useState(null);
  const [filterItems, setfilterItems] = useState(null);
  const [items, setItems] = useState(null);
  const [itemsSlice, setItemsSlice] = useState(0);
  const itemsCount = 10;

  // fetch readers
  useEffect(() => {
    getReaders()
      .then(res => {
        setReaders(res.data);
        setfilterItems(res.data);
        setItems(res.data.slice(0, itemsCount));
      })
      .catch(err => {
        console.log('err ocured ' + err);
      });
  }, []);

  // search input
  const handleSearch = value => {
    const filterReaders = readers.filter(item => item.name.includes(value));
    setfilterItems(filterReaders);
    setItems(filterReaders.slice(0, itemsCount));
  };

  const loadMore = () => {
    if (filterItems.length > items.length) {
      setItemsSlice(prev => {
        const items = filterItems.slice(
          prev + itemsCount,
          prev + itemsCount * 2,
        );
        setItems(pre => [...pre, ...items]);
        return prev + itemsCount;
      });
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.headerContentContainerInner}>
          <Intro />
          {/* <Stats /> */}
        </View>
        <View style={styles.readersContainer}>
          <Filter handleSearch={handleSearch} />
          <View style={styles.readersItems}>
            {items ? (
              items.length ? (
                items.map((item, index) => (
                  <Reader data={item} index={index} key={item.id} />
                ))
              ) : (
                <View style={styles.loader}>
                  <Text style={styles.noResult}>لا توجد نتائج</Text>
                </View>
              )
            ) : (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color={colors.dark} />
              </View>
            )}

            {items && items.length ? (
              <TouchableOpacity style={styles.loadMore} onPress={loadMore}>
                <Text style={styles.loadMoreText}>عرض المزيد</Text>
                <Ionicons name="chevron-down" color={colors.light} size={25} />
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.subLight,
  },
  contentContainer: {},
  headerContentContainerInner: {
    paddingHorizontal: sizes.padding,
    marginTop: sizes.padding,
  },
  loader: {
    // backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    flex: 1,
    padding: sizes.padding,
  },
  noResult: {
    ...fonts.h2,
    textAlign: 'center',
    color: colors.dark,
  },
  readersContainer: {
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    justifyContent: 'space-between',
    marginTop: sizes.padding,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // padding: sizes.padding,
    paddingHorizontal: sizes.padding,
    paddingTop: sizes.padding,
    paddingBottom: sizes.padding * 2 + 80,
  },
  readersItems: {
    marginTop: sizes.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
  },
  loadMoreText: {
    color: colors.light,
    marginEnd: sizes.base,
    ...fonts.body2,
  },
});

export default Home;
