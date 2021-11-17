import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const TripCard = ({trip}) => {
  return (
    //need work here
    <View style={styles.card}>
      <Text style={styles.title}>{trip.tripName}</Text>
      <Text style={styles.text}>{trip.description}</Text>
      <Image uri="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3doeS1pcy1za3ktYmx1ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==" success=""></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
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
});
export default TripCard;
