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
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }} 
      />
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
