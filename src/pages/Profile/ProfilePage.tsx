import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TrackItem} from '../../components/TrackItem/TrackItem.tsx';
import {TrackEntity} from '../../core';

export function ProfilePage({
  isLoading,
  tracks,
}: {
  isLoading: boolean;
  tracks: TrackEntity[];
}) {
  const {bottom} = useSafeAreaInsets();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
        data={tracks}
        renderItem={({item}) => <TrackItem track={item} />}
      />
    </SafeAreaView>
  );
}
