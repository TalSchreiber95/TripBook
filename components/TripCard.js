import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const TripCard = ({ trip }) => {
  const pic1=trip.pictures.one
  const pic2=trip.pictures.two
  const pic3=trip.pictures.three

  return (
    <View style={styles.card}>
      {/* <Text>{trip.tripName}as</Text> */}
      <CardHeader trip={trip}/> 
      <ImageBackground
        style={styles.logo}
        source={{
          uri: pic1
        }} >
      </ImageBackground>
      
      <CardFooter trip={trip}/> 
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'right',
    letterSpacing: 5,
  },
  text: {
    color: 'gold',
    fontSize: 15,
    // textAlign: 'center',
    // flexDirection:'row-reverse',
    letterSpacing: 2,
    paddingTop: 5,
  },
  logo: {
    width: 390,
    height: 150,
  },
});
export default TripCard;
