import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const TripCard = ({trip}) => {
  return (
    //need work here
    //Right, for some reason the TripCard doesn't apper ,
    //I think its because the if in the fillter on the TripPage
    //You are right my friend i cut it down for now
    <View style={styles.card}>
      <Text style={styles.title}>{trip.tripName}</Text>
      <Text style={styles.text}>{trip.description}</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'C:/Users/omer2/Desktop/CS/Web Development/images/800px-Sunflower_from_Silesia2.jpg',
        }}
        success="none"></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'steelblue',
    margin: 10,
  },
  title: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    letterSpacing: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default TripCard;
