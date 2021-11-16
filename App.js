/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddTrip from './components/AddTrip';
import TripsPage from './components/TripsPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {appendToMemberExpression, staticBlock} from '@babel/types';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const users = [
    //email = Unique-Key
    {
      email: 'user',
      pass: 'user',
      firstName: 'user',
      lastName: 'user',
      passRecoverAnswer: '',
      admin: false,
    },
    {
      email: 'a',
      pass: 'a',
      firstName: 'a',
      lastName: 'a',
      passRecoverAnswer: '',
      admin: true,
    },
    {
      email: 'admin',
      pass: 'admin',
      firstName: 'admin',
      lastName: 'admin',
      passRecoverAnswer: '',
      admin: true,
    },
  ];

  const trips = [
    {
      tripName: '',
      category: 'pet, relax',
      location: '',
      description: '',
      feedback: [''],
      priceInNis: 0,
    },
  ];

  const [Users, setUsers] = useState(users);
  const [Trips, setTrips] = useState(trips);

  const addNewUser = user => {
    // console.log(user);
    // console.log(Users);
    setUsers([...Users, user]);
  };

  const addTrip = trip => {
    setTrips([...Trips, trip]);
    console.log(Trips);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <LoginPage {...props} Users={Users} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => (
            <RegisterPage {...props} Users={Users} addNewUser={addNewUser} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <HomePage {...props} name={users[1].firstName} />}
        </Stack.Screen>
        <Stack.Screen name="AddTrip">
          {props => <AddTrip {...props} addTrip={addTrip} />}
        </Stack.Screen>
        <Stack.Screen name="TripsPage" component={TripsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
