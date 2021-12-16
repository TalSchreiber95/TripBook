import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import Header from './Header';
import TripCard from './TripCard';
import GroupTripCard from './GroupTripCard';
import { useState } from 'react';

const TripsApprove = ({
  WaitingTrips,
  user,
  deleteWaitingCard,
  deleteGroupCard,
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
        <Text style={styles.text2}>Approve group trips List:</Text>
        {WaitingTrips.map(trip => (
          <GroupTripCard
            key={trip.id}
            trip={trip}
            user={user}
            deleteCard={deleteGroupCard}
            editCard={editCard}
            onSendMessage={onSendMessage}
            deletePicture={deletePicture}
            deleteFeedback={deleteFeedback}
            deleteFeedbackLive={deleteFeedbackLive}
            onApprove={false}
            onGroup={true}
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
    marginEnd: 200,
    // backgroundColor: 'white'
  },
  text2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
    marginEnd: 149,
    backgroundColor: 'green'
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
