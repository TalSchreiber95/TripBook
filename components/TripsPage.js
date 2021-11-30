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

const TripsPage = ({
  Trips,
  user,
  tripInfo,
  deleteCard,
  editCard,
  cardOwnerMessage,
  navigation,
}) => {
  return (
    <ScrollView>
      <Header name={user} navigation={navigation} />
      <Text style={styles.text}>Search Results:</Text>
      <Text style={styles.locationText}>
        {' '}
        Showing trips located in {tripInfo.location} not over{' '}
        {tripInfo.priceInNis} ILS{' '}
      </Text>
      {/* Should implement The filter algorithm include the sort */}
      {Trips.map(trip => (
        <TripCard
          key={trip.id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          cardOwnerMessage={cardOwnerMessage}
          toggleApproveCard={false}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    // marginBottom: 20,
  },
  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
});

export default TripsPage;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.priceInNis >= tripInfo.priceInNis
      )
 */
