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
import MyTrips from './components/MyTrips';
import TripsApprove from './components/TripsApprove';
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
  View, Alert,
} from 'react-native';

import { appendToMemberExpression, staticBlock } from '@babel/types';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const users = [
    //email = Unique-Key
    {
      email: 'u',
      pass: 'u',
      firstName: 'regular',
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
      owner: 'u',
      adminMessage: 'No new admin messages',
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
      pictures: [
        'https://thumbs.dreamstime.com/b/colorful-vibrant-sunrise-sky-background-colorful-sunrise-sky-background-125577925.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjzoRJBCcaW-Tj1pn9kaj3J1-FJjRN26Gsw&usqp=CAU',
      ],
      location: 'location',
      description: 'The sky is blue and infinite ',
      feedbacks: [
        'beautifull sky',
        'Blue deep sky',
        'Tal the PoliceOfficer',
        'eofkldnslkvf sdklfndslkfdslk fsdklfdslkmkldsf',
      ],
      feedbacksLive: ['Live', 'Im Liveee'],
      priceInNis: 60,
    },
    {
      id: 2,
      owner: 'a',
      adminMessage: 'No new admin messages 2',
      tripName: 'SpiderMan movie',
      category: {
        isRelax: false,
        isDynamic: false,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: false,
        isTrainTravel: false,
      },
      pictures: [
        'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1636383824/amc-cdn/production/2/movies/66500/66520/PosterDynamic/131442.jpg',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-movies-in-order-index-1631199371.jpeg',
      ],
      location: 'location',
      description: 'Watch now the new movie of Pokemon! ',
      feedbacks: ['lovely and fun place', 'beautiful place'],
      feedbacksLive: [
        'not a regular feedback',
        'you can call me live feedback',
      ],
      priceInNis: 60,
    },
  ];

  const waitingTrips = [
    {
      id: 3,
      owner: 'userEmail',
      adminMessage: 'No new admin messages',
      tripName: 'Eiffel tower',
      category: {
        isRelax: false,
        isDynamic: false,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: false,
        isTrainTravel: false,
      },
      pictures: [
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        'https://fadeceilings.com/wp-content/uploads/2019/08/AdobeStock_65117955-720x460.jpeg',
      ],
      location: 'waiting',
      description: 'The sky is blue and infinite waitingwaiting ',
      feedbacks: [
        'waiting sky',
        'Blue waiting sky',
        'Tal the waiting PoliceOfficer',
        'eofkldnslkvf waiting sdklfndslkfdslk fsdklfdslkmkldsf',
      ],
      feedbacksLive: ['Live waiting', 'Im Liveee waiting'],
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
  const [WaitingTrips, setWaitingTrips] = useState(waitingTrips);
  const [Index, setIndex] = useState(0);
  const [TripInfo, setTripInfo] = useState(tripInfo);

  const addNewUser = user => {
    setUsers([...Users, user]);
    setIndex(Users.length - 1);
  };
  // Note: this is supposed to add to setWaitingTrips instead to directly Trips
  const addTrip = trip => {
    setTrips([...Trips, trip]);
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id != trip.id);
    });
  };
  const addWaitingTrip = waitingTrip => {
    setWaitingTrips([...WaitingTrips, waitingTrip]);
  };
  const addTripInfo = tripInfo => {
    setTripInfo(tripInfo);
  };
  const deleteCard = id => {
    setTrips(prevCards => {
      return prevCards.filter(card => card.id != id);
    });

  };

  const approveCard = trip => {
    setTrips([...Trips, trip]);
  };
  const editCard = () => { };
  const cardOwnerMessage = (id) => {
    Alert.alert("message trip id is : " + id);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => (
            <LoginPage
              {...props}
              Users={Users}
              user={Users[Index]}
              ind={setIndex}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => (
            <RegisterPage {...props} Users={Users} addNewUser={addNewUser} />
          )}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword">
          {props => <ForgotPassword {...props} Users={Users} ind={setIndex} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => (
            <HomePage {...props} name={Users[Index]} tripSearch={addTripInfo} />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTrip">
          {props => (
            <AddTrip
              {...props}
              addWaitingTrip={addWaitingTrip}
              user={Users[Index]}
              getWaitingId={Trips.length + WaitingTrips.length + 1}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="TripsPage">
          {props => (
            <TripsPage
              {...props}
              Trips={Trips}
              name={Users[Index]}
              tripInfo={TripInfo}
              deleteCard={deleteCard}
              editCard={editCard}
              cardOwnerMessage={cardOwnerMessage}
            />
          )}
        </Stack.Screen>
        {Users[Index].admin && (
          <Stack.Screen name="TripsApprove">
            {props => (
              <TripsApprove
                {...props}
                // Trips={Trips}
                WaitingTrips={WaitingTrips}
                user={Users[Index]}
                deleteCard={deleteCard}
                approveCard={approveCard}
                editCard={editCard}
                cardOwnerMessage={cardOwnerMessage}
                addTrip={addTrip}
              // navigation={navigation}
              />
            )}
          </Stack.Screen>
        )}
        <Stack.Screen name="MyTrips">
          {props => (
            <MyTrips
              {...props}
              Trips={Trips}
              user={Users[Index]}
              deleteCard={deleteCard}
              editCard={editCard}
              cardOwnerMessage={cardOwnerMessage}
            // navigation={navigation}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
