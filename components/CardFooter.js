import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import LeftCardFooter from './LeftCardFooter';
import RightCardFooter from './RightCardFooter';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-vector-icons/dist/FontAwesome';

const CardFooter = ({
  trip,
  setPicture,
  toggler,
  updateButton,
  deleteFeedback,
  deleteFeedbackLive,
  onApprove,
  user
}) => {
  
  return (
    <LinearGradient
      colors={['white', 'steelblue']}
      start={{ x: 1, y: 6 }}
      end={{ x: 0, y: 2 }}>
      <View
        style={styles.cardFooter}
      // ViewComponent={LinearGradient}
      // linearGradientProps={{
      //   colors: ['silver', 'steelblue'],
      //   start: {x: 1, y: 3.5},
      //   end: {x: 0, y: 0.5},
      // }}
      >
        <LeftCardFooter
          trip={trip}
          toggler={toggler}
          updateButton={updateButton}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          onApprove={onApprove}
          user={user}
        />
        <RightCardFooter
          trip={trip}
          setPicture={setPicture}
          toggler={toggler}
          updateButton={updateButton}
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
    // marginTop: 0,
    // height: 85,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
    // alignSelf: 'stretch',
    // alignItems: 'flex-end',
    // padding: -30,
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
});
export default CardFooter;
