import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Header as H } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const Header = ({ title, name, connected, navigation }) => {
  return (
    // Added LinearGradient
    <LinearGradient
      style={styles.header}
      colors={['black', '#001f3f']}
      start={{ x: 1, y: 2.5 }}
      end={{ x: 0, y: 1.5 }}>
      {/* {connected ? (
        <View style={styles.buttonsView}>
          <Button
            containerStyle={styles.myTripsButton}
            title="My Trips"
            onPress={() => navigation.navigate('MyTrips')}
          />
          {name.admin ? (
            <Button
              containerStyle={styles.approveTripsButton}
              title="Approve Trips"
              onPress={() => navigation.navigate('TripsApprove')}
            />
          ) : (
            <View style={styles.noApproveButton}></View>
          )}
          <Button
            containerStyle={styles.logOutButton}
            title="Log out"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      ) : (
        <View style={styles.noButtonsView}></View>
      )} */}
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
  connected: true,
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingTop: 10,
  },
  buttonsView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  noButtonsView: {
    height: 37,
  },
  myTripsButton: {
    flex: 1,
  },
  approveTripsButton: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  noApproveButton: {
    flex: 2,
  },

  logOutButton: {
    flex: 1,
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
