import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LeftCardFooter from './LeftCardFooter';
import RightCardFooter from './RightCardFooter';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardFooter = ({
  trip,
  setPicture,
  toggler,
  updateButton,
  onApprove,
  user,
  cameraPage,
  navigation,
}) => {
  return (
    <LinearGradient
      colors={['white', 'steelblue']}
      start={{ x: 1, y: 6 }}
      end={{ x: 0, y: 2 }}>
      <View
        style={styles.cardFooter}
      >
        <LeftCardFooter
          trip={trip}
          toggler={toggler}
          updateButton={updateButton}
          onApprove={onApprove}
          user={user}
        />
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{trip.price}</Text>
          <Icon
            name="ils"
            size={14}
            color="whitesmoke"
            style={styles.ilsIcon}
          />
        </View>
        <RightCardFooter
          trip={trip}
          setPicture={setPicture}
          toggler={toggler}
          updateButton={updateButton}
          cameraPage={cameraPage}
          navigation={navigation}
        />
      </View>
    </LinearGradient>
  );
};
CardFooter.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};

const styles = StyleSheet.create({
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 15,
    marginBottom: 15,

  },
  text: {
    color: 'gold',
    fontSize: 15,
    letterSpacing: 2,
  },
  name: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  ilsIcon: {
    margin: 4,
    top: 7,
  },
  priceView: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 35,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 13,
    margin: 2,
    top: 5,
    color: 'whitesmoke',
  },
});
export default CardFooter;
