import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {TrackItem} from '../../components/TrackItem/TrackItem.tsx';
import {TrackEntity} from '../../core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function HomePage({
  tracks,
  isLoading,
  onGoToArtist,
}: {
  tracks: TrackEntity[];
  isLoading: boolean;
  onGoToArtist: (track: TrackEntity) => () => void;
}) {
  const {bottom} = useSafeAreaInsets();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
      data={tracks}
      renderItem={({item}) => (
        <TrackItem onGoToArtist={onGoToArtist} track={item} />
      )}
    />
  );
}
