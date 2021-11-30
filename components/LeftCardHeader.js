import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-elements';

const LeftCardHeader = ({ trip, toggler, updateButton }) => {

  const ToggleWeather = () => {
    toggler === 'weather' ? updateButton('none') : updateButton('weather');
  };



  return (
    <View style={styles.container}>
      <Button
        title="Weather"
        onPress={ToggleWeather}
        type="secondary"
        titleStyle={styles.button}
        containerStyle={styles.buttonContainer}
        raised
      />

      {toggler === 'weather' && (
        <View style={styles.popUp}>
          <Text style={styles.text}>20°C</Text>
          <Text style={styles.text}>Sunny of the day hell</Text>
          <Text style={styles.text}>{trip.location}</Text>
        </View>
      )}
    </View>
  );
};
LeftCardHeader.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};

const styles = StyleSheet.create({
  container: {
    // height: 90,
    // position: 'relative',
    flex: 0.5,
  },

  popUp: {
    //   flex: 0.1,
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
    position: 'absolute',
    top: 45,
    backgroundColor: '#000000c0',
    elevation: 1,
    padding: 3,    
  },
  button: {
    // backgroundColor: 'black',
    fontSize: 15
  },
  buttonContainer: {
    // backgroundColor: 'black',
    width: 80,
  },
  text: {
    // flex: 0.1,
    color: 'white',
    fontSize: 18,
    letterSpacing: 2,
    // position: 'relative',
    marginTop: -3,
    textAlign: 'center',
  },
});
export default LeftCardHeader;
