import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePagePresenter} from '../pages/Home/HomePagePresenter.tsx';
import {ArtistPagePresenter} from '../pages/Artist/ArtistPagePresenter.tsx';
import React from 'react';

export type CommonProps = {
  Home: undefined;
  Artist: {artist: string};
};

const Stack = createNativeStackNavigator<CommonProps>();

export function CommonNavigation() {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={HomePagePresenter} />
      <Stack.Screen name={'Artist'} component={ArtistPagePresenter} />
    </Stack.Navigator>
  );
}
