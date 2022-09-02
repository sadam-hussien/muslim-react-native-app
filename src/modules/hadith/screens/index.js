import React, {useEffect, useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {getBooks, getChapters} from '../server';

import {images, colors, fonts, sizes} from '@/constants';

import {HadithItem, ChapterItem} from '../components';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Hadith = () => {
  const [books, setBooks] = useState(null);

  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const [chapters, setChapters] = useState(null);

  const [bookSelected, setBookSelected] = useState(null);

  useEffect(() => {
    getBooks().then(res => {
      setBooks(res.data.Books);
      setLoading(false);
    });
  }, []);

  const openModal = data => {
    setModalVisible(true);
    setBookSelected(data);
    getChapters({id: data.id}).then(res => {
      setChapters(res.data.Chapter);
    });
  };

  const closeModal = () => {
    setChapters(null);
    setModalVisible(false);
    setBookSelected(null);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={books}
        keyExtractor={item => item.Book_ID.toString()}
        ListEmptyComponent={() => (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.dark} />
          </View>
        )}
        ListHeaderComponent={() => (
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.linearGradient}>
            <Image source={images.islamic} style={styles.image} />
            <Text style={styles.title}>الـكـتب المتاحة</Text>
          </LinearGradient>
        )}
        renderItem={({item}) => (
          <HadithItem data={item} loading={loading} openModal={openModal} />
        )}
        contentContainerStyle={styles.container}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalInner}>
          <View style={styles.modalContainer}>
            <View style={styles.bookInfo}>
              <View style={styles.bookInfoInner}>
                <Text style={styles.bookInfoTitle}>
                  {bookSelected && bookSelected.name}
                </Text>
                <View style={styles.bookInfoSubTitle}>
                  <Text style={styles.bookInfoSubTitleText}>
                    عدد الفصول: {chapters && chapters.length}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={closeModal} style={styles.closeModal}>
                <Ionicons name="close" size={25} color={colors.light} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={chapters}
              keyExtractor={item => item.Chapter_ID.toString()}
              ListEmptyComponent={() => (
                <View style={styles.loader}>
                  <ActivityIndicator size="large" color={colors.dark} />
                </View>
              )}
              renderItem={({item}) => (
                <ChapterItem data={item} bookData={bookSelected} closeModal={closeModal} />
              )}
              contentContainerStyle={{
                paddingHorizontal: sizes.padding,
                paddingBottom: sizes.padding,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.subLight,
    padding: sizes.padding,
    paddingBottom: 100,
  },
  linearGradient: {
    borderRadius: sizes.radius,
    height: 120,
    position: 'relative',
    padding: sizes.padding,
    justifyContent: 'center',
    marginBottom: sizes.padding,
  },
  image: {
    position: 'absolute',
    width: 130,
    height: 100,
    end: 0,
    bottom: 0,
    opacity: 0.5,
  },
  title: {
    color: colors.light,
    ...fonts.h1,
  },
  loader: {
    flex: 1,
    padding: sizes.padding,
  },
  modalInner: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: `rgba(0, 0, 0, .2)`,
  },
  modalContainer: {
    backgroundColor: colors.subLight,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '70%',
    position: 'relative',
    // paddingTop: sizes.padding * 2 + 35,
  },
  closeModal: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.padding,
  },
  bookInfoInner: {
    flex: 1,
  },
  bookInfoTitle: {
    ...fonts.h3,
    color: colors.dark,
    marginBottom: 5,
  },
  bookInfoSubTitle: {
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 150,
    borderRadius: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  bookInfoSubTitleText: {
    ...fonts.body3,
    color: colors.primary,
  },
});

export default Hadith;
