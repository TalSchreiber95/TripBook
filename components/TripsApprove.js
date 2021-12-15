import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

import Header from './Header';
import TripCard from './TripCard';

import {useState} from 'react';

const TripsApprove = ({
  WaitingTrips,
  user,
  deleteWaitingCard,
  editCard,
  onSendMessage,
  addTrip,
  deletePicture,
  deleteFeedback,
  deleteFeedbackLive,
}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header user={user} />
        <Text style={styles.text}>Approve trips List:</Text>
        {WaitingTrips.map(trip => (
          <TripCard
            key={trip.trip_id}
            trip={trip}
            user={user}
            deleteCard={deleteWaitingCard}
            addTrip={addTrip}
            editCard={editCard}
            onSendMessage={onSendMessage}
            deletePicture={deletePicture}
            deleteFeedback={deleteFeedback}
            deleteFeedbackLive={deleteFeedbackLive}
            onApprove={true}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
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
          trip.price >= tripInfo.price
      )
 */
