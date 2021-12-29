import React, {useContext} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from './Context';

const Header = ({title}) => {
  const {user, isUserConnected} = useContext(AppContext);
  return (
    // Added LinearGradient
    <LinearGradient
      style={styles.header}
      colors={['black', '#001f3f']}
      start={{x: 1, y: 2.5}}
      end={{x: 0, y: 1.5}}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.userName}>
        Wellcome {isUserConnected && user.first_name + ' ' + user.last_name}!
      </Text>
    </LinearGradient>
  );
};
Header.defaultProps = {
  title: 'TripBook',
  // user: {
  //   first_name: '',
  //   last_name: '',
  // },
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
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
  userName: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
});
export default Header;
