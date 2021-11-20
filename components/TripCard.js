import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const TripCard = ({trip}) => {
  const pic1 = trip.pictures.one;
  const pic2 = trip.pictures.two;
  const pic3 = trip.pictures.three;

  return (
    <View style={styles.card}>
      <CardHeader trip={trip} />
      <View style={styles.logo}>
        {/* There is problem with the image component - hiding the weather and info popups
        for now i changed the opacity so we can see it
        need to find solution - i tried a lot of css modifications without succeed */}
        <ImageBackground
          style={styles.logo}
          source={{
            uri: pic1,
          }}></ImageBackground>
      </View>

      <CardFooter trip={trip} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    letterSpacing: 5,
  },
  text: {
    color: 'gold',
    fontSize: 15,
    letterSpacing: 2,
    paddingTop: 5,
  },
  logo: {
    width: '100%',
    height: 200,
    opacity: 0.7,
    // flex: 1,
    // position: 'relative',
    // top: 0,
    // left: 0,
    // backgroundColor: 'indigo',
  },
});
export default TripCard;
