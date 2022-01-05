import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './Header';
const About = () => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>TripBook Developement Team:</Text>
        <Text style={styles.name}>Omer Shalom</Text>
        <Text style={styles.name}>Tal Schreiber</Text>
        <Text style={styles.name}>Yuval Ben Yaakov</Text>
        <Text style={styles.name}>Natali Djavarov</Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 0.5, width: 350, marginTop: 80}} />
        <Text style={styles.contact}>Contact Us: TripBookStaff@gmail.com</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.copyrights}>CopyRights &copy; 2022</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  version: {
    fontSize: 17,
    marginTop: 30,
    letterSpacing: 1,
  },
  copyrights: {
    marginTop: 30,
    fontWeight: 'bold',
  },
  contact: {
    marginTop: 80,
  },
});

export default About;
