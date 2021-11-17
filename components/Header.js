import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Header = ({title, name}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.name}>
        Wellcome {name.firstName + ' ' + name.lastName}!
      </Text>
    </View>
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
    // margin: 15,
    backgroundColor: '#001f3f',
    marginBottom: 30,
  },
  text: {
    color: 'gold',
    fontSize: 40,
    textAlign: 'center',
    letterSpacing: 5,
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
