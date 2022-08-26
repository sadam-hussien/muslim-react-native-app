import React, {useContext, useEffect} from 'react';

import {store} from '@/store';

import {action_set_active_media} from '@/store/actions';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import TrackPlayer, {
  usePlaybackState,
  State,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {sizes, colors} from '@/constants';

const setupPlayer = async data => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(data);
};

const reloadPlayer = async data => {
  await TrackPlayer.pause();
};

const togglePlayer = async isPlaying => {
  let currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  } else {
  }
};

const events = [Event.PlaybackTrackChanged];

const Player = () => {
  const {media, dispatchMedia} = useContext(store);
  const {suras, activeMedia} = media;
  // player track state
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;

  useEffect(() => {
    if (suras) {
      if (isPlaying) {
        reloadPlayer(suras);
      } else {
        setupPlayer(suras).then(res => {
          dispatchMedia(action_set_active_media({index: 0, data: suras[0]}));
        });
      }
    }
  }, [suras]);

  const prevItem = async () => {
    await TrackPlayer.skipToPrevious();
  };
  const nextItem = async () => {
    await TrackPlayer.skipToNext();
  };
  const playThis = async trakIndex => {
    let currentPlayerIndex = await TrackPlayer.getCurrentTrack();
    if (trakIndex === 0 || currentPlayerIndex !== trakIndex) {
      await TrackPlayer.skip(trakIndex);
      if (!isPlaying) {
        await TrackPlayer.play();
      }
    }
  };
  useEffect(() => {
    if (activeMedia.data) {
      playThis(activeMedia.index);
    }
  }, [activeMedia.index]);

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackTrackChanged) {
      if (activeMedia.index !== event.nextTrack) {
        dispatchMedia(
          action_set_active_media({
            index: event.nextTrack,
            data: suras[event.nextTrack],
          }),
        );
      }
    }
  });
  if (!suras) {
    return <View></View>;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={nextItem}
        style={[styles.movingIcon, styles.btn]}>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          color={colors.subDark}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.palyer, styles.btn]}
        onPress={() => togglePlayer(isPlaying)}>
        {isPlaying ? (
          <Ionicons name="pause" size={25} color={colors.light} />
        ) : (
          <Ionicons name="play" size={25} color={colors.light} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={prevItem}
        style={[styles.movingIcon, styles.btn]}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          color={colors.subDark}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.base,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movingIcon: {},
  palyer: {
    backgroundColor: colors.primary,
  },
});

export default Player;
