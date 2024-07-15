import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfilePagePresenter} from '../pages/Profile/ProfilePagePresenter.tsx';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {CommonNavigation} from './CommonNavigation.tsx';

export type AppProps = {
  Common: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AppProps>();

export function AppNavigation() {
  const renderTabIcon = (name: string) => {
    return <FontAwesome6 name={name} solid />;
  };
  return (
    <Tab.Navigator initialRouteName={'Common'}>
      <Tab.Screen
        name={'Common'}
        component={CommonNavigation}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => renderTabIcon('house'),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfilePagePresenter}
        options={{
          tabBarIcon: () => renderTabIcon('user'),
        }}
      />
    </Tab.Navigator>
  );
}
