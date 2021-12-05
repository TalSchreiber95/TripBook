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

import { useState } from 'react';

const TripsApprove = ({
  WaitingTrips,
  user,
  deleteWaitingCard,
  approveCard,
  editCard,
  onSendMessage,
  addTrip,
  deletePicture,
  setTripEdit,
  setOnEdit,
  navigation
}) => {
  return (
    <ScrollView>
      <Header name={user} navigation={navigation} />
      <Text style={styles.text}>Approve trips List:</Text>
      {WaitingTrips.map(trip => (
        <TripCard
          key={trip.id}
          trip={trip}
          user={user}
          deleteCard={deleteWaitingCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          addTrip={addTrip}
          toggleApproveCard={true}
          deletePicture={deletePicture}
          onApprove={true}
          setTripEdit={setTripEdit}
          setOnEdit={setOnEdit}
          isOnApprove={true}
          navigation={navigation}
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

export default TripsApprove;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.priceInNis >= tripInfo.priceInNis
      )
 */
