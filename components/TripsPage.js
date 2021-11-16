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
      {/* Note: For unknown reason name doesn't show in here */}
      {/* {its because you forgot the curly braces in line 17 = {}  } */}
      <Header title="Trip Book" name={name} />
      {Trips.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category === tripInfo.category &&
          trip.priceInNis >= tripInfo.priceInNis,
      ).map(trip => (
        <TripCard trip={trip} />
      ))
      }

      {/* Note: Supposed to recognize tripInfo.location */}
      <Text> Location is= {tripInfo.location} </Text>
    </View>
  );
};
export default TripsPage;

/*
 */
