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
import GroupTripCard from './GroupTripCard';
import { useState, useEffect } from 'react';

const MyTrips = ({
  myTrips,
  // WaitingTrips,
  user,
  deleteCard,
  addTrip,
  editCard,
  onSendMessage,
  deletePicture,
  deleteFeedback,
  deleteFeedbackLive,
  setTripEdit,
  fetchTripByOwner
}) => {

  useEffect(() => {
    // fetchTripByOwner(user.user_id);
  }, [])


  return (
    <ScrollView>
      <Header user={user} />
      <Text style={styles.text}>My posted trips:</Text>
      {myTrips.map(trip => (
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
      {myTrips.map(trip => (
        <TripCard
          key={trip.trip_id}
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
      {/* <Text style={styles.text2}>My waiting group Trips:</Text>
      {WaitingTrips.map(trip => (
        <GroupTripCard
          key={trip.trip_id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          onApprove={true}
          onGroup={true}
        />
      ))} */}
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
  text2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
    marginEnd: 160,
    backgroundColor: 'green'
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
          trip.price >= tripInfo.price
      )
 */
