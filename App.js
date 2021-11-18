/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddTrip from './components/AddTrip';
import TripsPage from './components/TripsPage';
import ForgotPassword from './components/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { Node } from 'react';
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

import { appendToMemberExpression, staticBlock } from '@babel/types';

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
      firstName: 'Tal',
      lastName: 'Schreiber',
      passRecoverAnswer: 'av',
      admin: true,
    },
    {
      email: 'admin',
      pass: 'admin',
      firstName: 'Omer',
      lastName: 'Shalom',
      passRecoverAnswer: '',
      admin: true,
    },
  ];

  const trips = [
    {
      id: 1,
      tripName: 'sky',
      category: {
        isRelax: false,
        isDynamic: false,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: false,
        isTrainTravel: false,
      },
      pictures: {
        one: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjzoRJBCcaW-Tj1pn9kaj3J1-FJjRN26Gsw&usqp=CAU",
        two: "",
        three: "",
      },
      location: 'location',
      description: 'The sky is blue and infinite ',
      feedback: ['feedback'],
      priceInNis: 60,
    },
    {
      id: 2,
      tripName: 'movie',
      category: {
        isRelax: false,
        isDynamic: false,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: false,
        isTrainTravel: false,
      },
      pictures: {
        one: "https://i.ibb.co/McYBzxw/medium-Value.jpg",
        two: "",
        three: "",
      },
      location: 'location',
      description: 'Watch now the new movie of Pokemon! ',
      feedback: ['feedback'],
      priceInNis: 60,

    },
  ];

  const tripInfo = {
    category: {
      isRelax: false,
      isDynamic: false,
      isParty: false,
      isPetAllowed: false,
      isCarTravel: false,
      isPlaneTravel: false,
      isTrainTravel: false,
    },
    location: 'North',
    priceInNis: 0,
  };
  const [Users, setUsers] = useState(users);
  const [Trips, setTrips] = useState(trips);
  const [Index, setIndex] = useState(0);
  const [TripInfo, setTripInfo] = useState(tripInfo);

  const addNewUser = user => {
    setUsers([...Users, user]);
    setIndex(Users.length - 1);
  };

  const addTrip = trip => {
    setTrips([...Trips, trip]);
    console.log(Trips);
  };
  const addTripInfo = tripInfo => {
    setTripInfo(tripInfo);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <LoginPage {...props} Users={Users} name={Users[Index]} ind={setIndex} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => ( 
            <RegisterPage {...props} Users={Users} addNewUser={addNewUser} />
          )}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword">
          {props => (
            <ForgotPassword {...props} Users={Users} ind={setIndex} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => (
            <HomePage {...props} name={Users[Index]} tripSearch={addTripInfo} />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTrip">
          {props => <AddTrip {...props} addTrip={addTrip} name={Users[Index]}
            getId={Trips.length}/>}
        </Stack.Screen>
        <Stack.Screen name="TripsPage">
          {props => (
            <TripsPage {...props} Trips={Trips} name={Users[Index]} tripInfo={TripInfo} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
