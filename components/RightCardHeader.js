import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import { Button } from 'react-native-elements';
//this is other button component (way more better the the previous) - it built in from another directory
// need to change to this button in the whole app maybe


const RightCardHeader = ({trip}) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const ToggleInfo = () => {
    setToggleInfo(!toggleInfo);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Info +" onPress={ToggleInfo} type='outline' containerStyle={styles.button}/>
      </View>
      {toggleInfo && (
        <View style={styles.popUp}>
          <Text style={styles.text}>{trip.description}</Text>
        </View>
      )}
    </View>
  );
};
RightCardHeader.defaultProps = {
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
    width: 200,
    borderRadius: 5,
    position: 'absolute',
    top: 65,
    // left: 10,
    elevation: 20,
    backgroundColor: '#000000c0',
    justifyContent: 'center',
    marginLeft: -120,

    // position: 'absolute',
  },
  button: {
    width: 80,
    // borderRadius: 10,
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
export default RightCardHeader;