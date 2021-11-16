import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Header = ({ title, name}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.name}>
        Wellcome {name.firstName + ' ' + name.lastName} !
      </Text>
    </View>

  );
};
Header.defaultProps = {
  title: 'Header title',
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    // margin: 15,
    backgroundColor: '#001f3f',
  },
  text: {
    color: 'gold',
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 5,
  },
  name: {
    color: 'white',
  }
});
export default Header;
