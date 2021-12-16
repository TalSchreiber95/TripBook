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


import { useState } from 'react';

const TripsPage = ({
  Trips,
  user,
  tripInfo,
  deleteCard,
  editCard,
  onSendMessage,
  deletePicture,
  deleteFeedback,
  deleteFeedbackLive,
  setTripEdit,
  navigation,
}) => {
  return (
    <ScrollView >
      <Header user={user} navigation={navigation} />
      <Text style={styles.text}>Search Results:</Text>
      <Text style={styles.locationText}>
        {' '}
        Showing trips located in {tripInfo.location} not over{' '}
        {tripInfo.price} ILS{' '}
      </Text>
      {/* Should implement The filter algorithm include the sort */}
      {Trips.map(trip => (
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
      <Text style={styles.text2}>Group Trips:</Text>
      {Trips.map(trip => (
        <GroupTripCard
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
          onGroup={true}
        />
      ))}
    </ScrollView>
  );
};

TripsPage.defaultProps = {
  onApprove: false,
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    // marginBottom: 20,
  },
  text2:{
    color:'black',
    fontSize:23,
    marginLeft: 10,
    marginEnd:260,
    backgroundColor:'green'
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
          trip.price >= tripInfo.price
      )
 */
