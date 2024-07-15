import {HomePage} from './HomePage.tsx';
import React from 'react';
import {useGetTopTracksByCountry} from '../../hooks/useGetTopTracksByCountry.ts';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CommonProps} from '../../navigation/CommonNavigation.tsx';
import {TrackEntity} from '../../core';
import {useSaveListenTrack} from '../../hooks/useSaveListenTrack.ts';

type Props = BottomTabScreenProps<CommonProps, 'Home'>;

export function HomePagePresenter({navigation}: Props) {
  const {data, isLoading} = useGetTopTracksByCountry('colombia');
  const {mutateAsync: saveTrack} = useSaveListenTrack();
  const onGoToArtist = (track: TrackEntity) => async () => {
    await saveTrack(track);
    navigation.navigate('Artist', {
      artist: track.artist.name,
    });
  };
  return (
    <HomePage
      tracks={data ?? []}
      isLoading={isLoading}
      onGoToArtist={onGoToArtist}
    />
  );
}
