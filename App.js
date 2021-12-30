/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useContext} from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddTrip from './components/AddTrip';
import MyTrips from './components/MyTrips';
import TripsApprove from './components/TripsApprove';
import ForgotPassword from './components/ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import type {Node} from 'react';
import {StyleSheet, Alert, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {AppContext} from './components/Context';
const Drawer = createDrawerNavigator();

const App: () => Node = () => {
  // const [Trips, setTrips] = useState([]);
  // const [WaitingTrips, setWaitingTrips] = useState([]);
  // const [myTrips, setMyTrips] = useState([]);
  const [isGuest, setIsGuest] = useState(false);
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [user, setUser] = useState({});

  const [Trips, setTrips] = useState([]);
  const [WaitingTrips, setWaitingTrips] = useState([]);
  const [myTrips, setMyTrips] = useState([]);
  const [myWaitingTrips, setMyWaitingTrips] = useState([]);
  
  
  const fetchUserById = id => {
    fetch(`http://10.0.2.2:8080/api/user/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => console.error(error));
  };

  // params in url instead of body: email and password on URL, and turn back to GET
  // const fetchAuthentication = async user => {
  //   var flag = false;
  //   await fetch(`http://10.0.2.2:8080/api/authUser/`, {
  //     method: 'PUT',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(user),
  //   })
  //     .then(res => {
  //       res.ok && (flag = true);
  //       return res.json();
  //     })
  //     .then(json => {
  //       if (flag) {
  //         console.log(json);
  //         // const newJson = json;
  //         setUser(json);
  //         // console.log(activeUser);
  //         return json;
  //       }
  //     })
  //     .catch(error => console.error(error));
  //   // console.log(activeUser);

  //   return flag;
  // };

  const UpdateUserToDB = async (id, user) => {
    await fetch(`http://10.0.2.2:8080/api/user/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // return json;
      })
      .catch(error => console.error(error));
  };

  // const AddUserToDB = async trip => {
  //   await fetch(`http://10.0.2.2:8080/api/user`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(trip),
  //   })
  //     .then(res => res.json())
  //     .then(json => {
  //       // console.log(json);
  //       return json;
  //     })
  //     .catch(error => console.error(error));
  // };

  const deleteUserFromDB = async id => {
    await fetch(`http://10.0.2.2:8080/api/user/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error(error));
  };

  const fetchTripById = id => {
    fetch(`http://10.0.2.2:8080/api/tripID/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => console.error(error));
  };


  return (
    <AppContext.Provider
      value={{
        user,
        Trips,
        WaitingTrips,
        myTrips,
        myWaitingTrips,
        isUserConnected,
        isGuest,
        setUser,
        setTrips,
        setWaitingTrips,
        setMyTrips,
        setMyWaitingTrips,
        setIsUserConnected,
        setIsGuest,
      }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          {(!isUserConnected) && (
            <Drawer.Screen name="Login" component={LoginPage} />
          )}
          {!isUserConnected && (
            <Drawer.Screen name="Register" component={RegisterPage} />
          )}
          {!isUserConnected && (
            <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
          )}
          {(isGuest || isUserConnected ) && (
            <Drawer.Screen
              // options={{headerShown: true}}
              name="Home"
              component={HomePage}
              options={{
                headerShown: true,
                // headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                  <TouchableOpacity
                    style={[styles.button, styles.buttonSend]}
                    onPress={() => {
                      setIsUserConnected(false);
                      setUser({});
                    }}>
                    <Text style={styles.textStyle}>LogOut</Text>
                  </TouchableOpacity>
                ),
              }}
            />
          )}
          {isUserConnected && (
            <Drawer.Screen name="TripsApprove" component={TripsApprove} />
          )}
          {isUserConnected && (
            <Drawer.Screen name="MyTrips" component={MyTrips} />
          )}
          { (isUserConnected) && (
            <Drawer.Screen name="AddTrip" component={AddTrip} />
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonSend: {
    backgroundColor: '#2196F3',
    marginLeft: 10,
    marginRight: 10,
  },
  // buttonClose: {
  //   backgroundColor: 'grey',
  //   marginLeft: 10,
  //   marginRight: 10,
  // },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
