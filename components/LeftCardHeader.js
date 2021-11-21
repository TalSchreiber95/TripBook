import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-elements';

const LeftCardHeader = ({trip}) => {
  const [toggleWeather, setToggleWeather] = useState(false);
  const ToggleWeather = () => {
    setToggleWeather(!toggleWeather);
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

      {toggleWeather && (
        <View style={styles.popUp}>
          <Text style={styles.text}>20°C</Text>
          <Text style={styles.text}>Sunny</Text>
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
  container: {},

  popUp: {
    //   flex: 0.1,
    // marginBottom: 20,
    height: 'auto',
    width: 100,
    borderRadius: 5,
    position: 'absolute',
    top: 65,
    // left: 10,
    elevation: 20,
    backgroundColor: '#000000c0',
    justifyContent: 'center',

    // position: 'absolute',
  },
  button: {
    // backgroundColor: 'black',
  },
  buttonContainer: {
    backgroundColor: 'black',
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
