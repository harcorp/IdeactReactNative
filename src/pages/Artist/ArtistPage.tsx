import {Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {ArtistEntity} from '../../core';
import {StyleSheet} from 'react-native';

export function ArtistPage({artist}: {artist?: ArtistEntity}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              artist?.image?.find(item => item.size === 'large')?.['#text'] ??
              undefined,
          }}
        />
        <Text style={styles.title}>{artist?.name}</Text>
        <View style={styles.card}>
          <Text>{artist?.bio?.summary}</Text>
        </View>
        <View style={styles.card}>
          <Text>
            Listeners:{' '}
            {new Intl.NumberFormat('de-DE').format(
              Number(artist?.stats?.listeners),
            )}
          </Text>
          <Text>
            Play Counts:{' '}
            {new Intl.NumberFormat('de-DE').format(
              Number(artist?.stats?.listeners),
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  image: {
    width: 300,
    height: 300,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
