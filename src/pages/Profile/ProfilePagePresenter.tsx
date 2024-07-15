import {ProfilePage} from './ProfilePage.tsx';
import React from 'react';
import {useGetListenTracks} from '../../hooks/useGetListenTracks.ts';

export function ProfilePagePresenter() {
  const {data, isLoading} = useGetListenTracks();
  return <ProfilePage isLoading={isLoading} tracks={data ?? []} />;
}
