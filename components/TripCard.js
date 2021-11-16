import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TripCard = ({trip}) => {
  return (
    //need work here
    <Text style={styles.title}>
            Hello {trip.tripName}
    </Text>

  );
};

const styles = StyleSheet.create({
  title: {
    color: 'gold',
    fontSize: 40,
    textAlign: 'center',
    letterSpacing: 5,
    paddingTop: 25,

  },
  text: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
  }
});
export default TripCard;
