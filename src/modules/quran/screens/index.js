import React, {useState, useEffect, Fragment} from 'react';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';

import {Back} from '@/components';

import {colors, sizes, fonts, images} from '@/constants';

import {getQuran} from '../server';

import LinearGradient from 'react-native-linear-gradient';

import SelectDropdown from 'react-native-select-dropdown';

import Ionicons from 'react-native-vector-icons/Ionicons';

const fontsData = [
  {name: 'الخط رقم 1', value: fonts.islamicFont},
  {name: 'الخط رقم 2', value: fonts.islamicFont2},
  {name: 'الخط رقم 3', value: fonts.islamicFont2Bold},
];

const Quran = ({route}) => {
  const {id} = route.params;
  const [ayahs, setAyahs] = useState(null);
  const [data, setData] = useState(null);
  const [selectedFont, setSelectedFont] = useState(null);

  useEffect(() => {
    getQuran(id).then(res => {
      setData(res.data.data);
      setAyahs(res.data.data.ayahs);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Back />
      <ScrollView>
        <View style={styles.contentContainer}>
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
          <View style={styles.fontSelect}>
            <SelectDropdown
              data={fontsData}
              defaultButtonText="تغيير خط القراءة"
              buttonStyle={{
                backgroundColor: colors.light,
                flex: 1,
                justifyContent: 'space-between',
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 15,
                height: 60,
                borderRadius: 60,
              }}
              buttonTextStyle={{
                color: colors.dark,
                ...fonts.body2,
                textAlign: 'left',
              }}
              renderDropdownIcon={() => (
                <Ionicons
                  name="chevron-down-outline"
                  size={28}
                  color={colors.subDark}
                  style={{flex: 1}}
                />
              )}
              dropdownIconPosition="right"
              dropdownStyle={{
                borderRadius: 10,
                backgroundColor: colors.light,
                marginTop: sizes.padding,
              }}
              rowStyle={{
                paddingVertical: sizes.radius,
                paddingHorizontal: sizes.radius,
                borderBottomColor: `rgba(0, 0, 0, .1)`,
                flex: 1,
                height: 60,
                width: '100%',
              }}
              rowTextStyle={{
                ...fonts.body2,
                color: colors.dark,
                textAlign: 'auto',
              }}
              selectedRowStyle={{
                backgroundColor: colors.primary,
              }}
              selectedRowTextStyle={{
                color: colors.light,
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem.value);
                setSelectedFont(selectedItem.value);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                return item.name;
              }}
            />
          </View>
          <View style={styles.ayahsContainer}>
            {data ? (
              <Text
                style={[styles.bismillah, selectedFont ? selectedFont : {}]}>
                {data.preBismillah?.text?.ar}
              </Text>
            ) : (
              <></>
            )}
            <View style={styles.item}>
              {ayahs ? (
                <Text
                  style={[styles.ayahText, selectedFont ? selectedFont : {}]}>
                  {ayahs.map((item, index) => (
                    <Fragment key={index}>
                      {item.text.ar}
                      <Text style={styles.ayahNumber}>
                        {' '}
                        ﴿{item.number.insurah}﴾{' '}
                      </Text>
                    </Fragment>
                  ))}
                </Text>
              ) : (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator size="large" color={colors.dark} />
                </View>
              )}
            </View>
          </View>
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
  fontSelect: {
    marginBottom: sizes.margin,
  },
  ayahsContainer: {
    padding: sizes.margin,
    backgroundColor: `rgba(${colors.primary_rgba}, .1)`,
    borderRadius: 10,
  },
  bismillah: {
    ...fonts.islamicFont2Bold,
    fontSize: 23,
    color: colors.dark,
    textAlign: 'center',
  },
  ayahText: {
    ...fonts.islamicFont2Bold,
    fontSize: 23,
    color: colors.dark,
    textAlign: 'justify',
  },
  ayahNumber: {
    color: colors.primary,
  },
});

export default Quran;
