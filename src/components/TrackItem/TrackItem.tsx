import {TrackEntity} from '../../core';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Duration} from 'luxon';

export function TrackItem({
  track,
  onGoToArtist,
}: {
  track: TrackEntity;
  onGoToArtist?: (track: TrackEntity) => () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={onGoToArtist?.(track)}>
      <Image
        width={64}
        height={64}
        source={{
          uri:
            track.image.find(item => item.size === 'large')?.['#text'] ??
            undefined,
        }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.trackName}>{track.name}</Text>
        <Text>{track.artist.name}</Text>
        <Text>
          {Duration.fromObject({
            second: Number(track.duration),
          }).toFormat('mm:ss')}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 2,
  },
  trackName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
