import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { View, Text, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import { useState } from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import LinearGradient from 'react-native-linear-gradient';

const TripCard = ({ trip, name, deleteCard }) => {
  const [pic, setPicture] = useState(0);
  const [weatherButton, setWeatherButton] = useState(false);
  const [infoButton, setInfoButton] = useState(false);
  const [feedbackButton, setFeedbackButton] = useState(false);
  const [galleryButton, setGalleryButton] = useState(false);
  const onDelete = () => {
    return Alert.alert(
      "Deleting trip card !",
      "Are you sure you want to remove this trip card?",
      [
        {
          text: "Yes",
          onPress: () => { deleteCard(trip.id) },
        },
        {
          text: "No",
        },
      ]
    );
  }


  const updatePicture = ind => {
    setPicture(ind);
  };
  const updateButton = (weather, info, feedback, gallery) => {
    setWeatherButton(weather);
    setInfoButton(info);
    setFeedbackButton(feedback);
    setGalleryButton(gallery);
  };
  return (
    <View style={styles.card}>
      {name.admin &&
        <LinearGradient
          style={styles.header}
          colors={['silver', 'steelblue']}
          start={{ x: 1.6, y: 0 }}
          end={{ x: 0, y: 0 }}
        >
          <Icon
            name='remove' size={20}
            color='firebrick'
            onPress={() => onDelete()}
            style={styles.icon}
          />
        </LinearGradient>
      }
      <CardHeader
        trip={trip}
        updateButton={updateButton}
        weather={weatherButton}
        info={infoButton} />
      <View style={styles.logo}>
        {/* There is problem with the image component - hiding the weather and info popups
        for now i changed the opacity so we can see it
        need to find solution - i tried a lot of css modifications without succeed */}
        <ImageBackground
          style={styles.logo}
          source={{
            uri: trip.pictures[pic],
          }}></ImageBackground>
      </View>
      <CardFooter
        trip={trip}
        setPicture={updatePicture}
        updateButton={updateButton}
        feedback={feedbackButton}
        gallery={galleryButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    flex: 1,
    elevation: 2,
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
  icon: {
    alignSelf: 'flex-end',
  },
  iconView: {
    backgroundColor: 'steelblue'
  }
});
export default TripCard;
