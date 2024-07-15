import {ArtistPage} from './ArtistPage.tsx';
import React from 'react';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CommonProps} from '../../navigation/CommonNavigation.tsx';
import {useGetArtistInfo} from '../../hooks/useGetArtistInfo.ts';
type Props = BottomTabScreenProps<CommonProps, 'Artist'>;

export function ArtistPagePresenter({route}: Props) {
  const {artist} = route.params;
  const {data} = useGetArtistInfo(artist);
  return <ArtistPage artist={data} />;
}
