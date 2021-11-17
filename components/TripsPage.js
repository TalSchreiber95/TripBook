import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Header from './Header';
import TripCard from './TripCard';

import {useState} from 'react';

const TripsPage = ({Trips, name, tripInfo}) => {
  return (
    <View>
      <Header title="Trip Book" name={name} />
      <Text style={styles.locationText}>
        {' '}
        Showing trips located in {tripInfo.location} not over{' '}
        {tripInfo.priceInNis} ILS{' '}
      </Text>
      {Trips.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.priceInNis >= tripInfo.priceInNis
      ).map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  locationText: {
    // textAlign: 'left',
    margin: 10,
    fontSize: 15,
    color: 'black',
  },
});

export default TripsPage;

/*

 */
