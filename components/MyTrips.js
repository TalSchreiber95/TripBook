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

const MyTrips = ({
  Trips,
  WaitingTrips,
  user,
  deleteCard,
  addTrip,
  editCard,
  onSendMessage,
  deletePicture,
  deleteFeedback,
  deleteFeedbackLive,
  setTripEdit,
}) => {
  return (
    <ScrollView>
      <Header user={user}  />
      <Text style={styles.text}>My posted trips:</Text>
      {Trips.filter(trip => trip.owner === user.email).map(trip => (
        <TripCard
          key={trip.id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          onApprove={false}
        />
      ))}
      <Text style={styles.text}>My waiting trips:</Text>
      {WaitingTrips.filter(trip => trip.owner === user.email).map(trip => (
        <TripCard
          key={trip.id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          addTrip={addTrip}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          setTripEdit={setTripEdit}
          onApprove={true}
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

export default MyTrips;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.priceInNis >= tripInfo.priceInNis
      )
 */
