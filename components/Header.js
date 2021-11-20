import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Header as H} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({title, name}) => {
  return (
    // Added LinearGradient 
    <LinearGradient
      style={styles.header}
      colors={['black', '#001f3f']}
      start={{x: 1, y: 2.5}}
      end={{x: 0, y: 1.5}}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.name}>
        Wellcome {name.firstName + ' ' + name.lastName}!
      </Text>
    </LinearGradient>
  );
};
Header.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#001f3f',
    // width: '200%',
    marginBottom: 20,
    paddingTop: 10,
  },
  text: {
    color: 'gold',
    fontSize: 40,
    textAlign: 'center',
    letterSpacing: 5,
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 25,
  },
  name: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
});
export default Header;
