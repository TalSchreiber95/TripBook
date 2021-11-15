import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
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
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    letterSpacing: 5,
  },
});
export default Header;
