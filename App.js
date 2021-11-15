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
    },
  ];

  const [Users, setUsers] = useState(users);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passRecoverAnswer, setPassRecoverAnswer] = useState('');

  const handleUsernameChange = userName => {
    setUserName(userName);
  };

  const handleNewUserChange = newUser => {
    setNewUser(newUser);
  };

  const handlePasswordChange = password => {
    setPassword(password);
  };

  const handleNewPasswordChange = newPassword => {
    setNewPassword(newPassword);
  };
  const handleFirstNameChange = firstName => {
    setFirstName(firstName);
  };
  const handleLastNameChange = lastName => {
    setLastName(lastName);
  };

  const handlePassRecoverAnswerChange = passRecoverAnswer => {
    setPassRecoverAnswer(passRecoverAnswer);
  };

  const addNewUser = user => {
    // console.log(user);
    // console.log(Users);
    setUsers([...Users, user]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => (
            <LoginPage
              {...props}
              Users={Users}
              userName={userName}
              password={password}
              handleUsernameChange={handleUsernameChange}
              handlePasswordChange={handlePasswordChange}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => (
            <RegisterPage
              {...props}
              Users={Users}
              newUser={newUser}
              newPassword={newPassword}
              firstName={firstName}
              lastName={lastName}
              passRecoverAnswer={passRecoverAnswer}
              handleNewUserChange={handleNewUserChange}
              handleNewPasswordChange={handleNewPasswordChange}
              handleFirstNameChange={handleFirstNameChange}
              handleLastNameChange={handleLastNameChange}
              handlePassRecoverAnswerChange={handlePassRecoverAnswerChange}
              addNewUser={addNewUser}
            />
          )}
        </Stack.Screen>
        {/* <Stack.Screen name="Home" component={HomePage} /> */}
        <Stack.Screen name="Home">
          {props=>(
            <HomePage
               {...props}
              name={firstName}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTrip">
          {props => <AddTrip {...props} />}
        </Stack.Screen>
        <Stack.Screen name="TripsPage" component={TripsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
