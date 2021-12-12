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
import EditTrip from './components/EditTrip';
import TripsPage from './components/TripsPage';
import MyTrips from './components/MyTrips';
import TripsApprove from './components/TripsApprove';
import ForgotPassword from './components/ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
// import axios from 'axios';

import type {Node} from 'react';
import {StyleSheet, Alert, Text, Pressable} from 'react-native';
import {Button} from 'react-native-elements';

// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// import {appendToMemberExpression, staticBlock} from '@babel/types';

// const Stack = createNativeStackNavigator();

const App: () => Node = ({navigation}) => {
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
      isWaiting: false,
      adminMessage: 'No new admin messages',
      tripName: 'sky',
      category: {
        isRelax: true,
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
      priceInNis: 10,
    },
    {
      id: 2,
      owner: 'a',
      isWaiting: false,
      adminMessage: 'No new admin messages 2',
      tripName: 'SpiderMan vs Batman movie',
      category: {
        isRelax: true,
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
      priceInNis: 45,
    },
  ];

  const waitingTrips = [
    {
      id: 3,
      owner: 'a',
      isWaiting: true,
      adminMessage: 'No new admin messages',
      tripName: 'Eiffel tower',
      category: {
        isRelax: false,
        isDynamic: true,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: true,
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
      priceInNis: 400,
    },
  ];

  const tripInfo = {
    tripName: '',
    category: {
      isRelax: false,
      isDynamic: false,
      isParty: false,
      isPetAllowed: false,
      isCarTravel: false,
      isPlaneTravel: false,
      isTrainTravel: false,
    },
    location: '',
    priceInNis: 0,
  };
  const [Users, setUsers] = useState(users);
  const [Index, setIndex] = useState(1);
  const [Trips, setTrips] = useState(trips);
  const [WaitingTrips, setWaitingTrips] = useState(waitingTrips);
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [TripInfo, setTripInfo] = useState(tripInfo);

  // useEffect(() => {
  //   const trip = getTrip('K4z8mYKWR5GWuV11WAHG');
  //   console.log(trip);
  // });

  // const getTrip = id => {
  //   const trip = axios
  //     .get(`http://localhost8080/api/:${id}`)
  //     .then(res => res.data);
  //   return trip;
  // };

  const addNewUser = user => {
    setUsers([...Users, user]);
    setIndex(Users.length - 1);
  };
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

  const deletePicture = (tripId, pic, onApprove) => {
    if (!onApprove) {
      const cardDeletePic = Trips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    } else {
      const cardDeletePic = WaitingTrips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    }
  };
  const deleteFeedback = (tripId, feedback, onApprove) => {
    if (!onApprove) {
      const cardDeleteFeed = Trips.filter(trip => trip.id === tripId)[0];
      cardDeleteFeed.feedbacks.splice(feedback, 1);
    } else {
      const cardDeleteFeed = WaitingTrips.filter(trip => trip.id === tripId)[0];
      cardDeleteFeed.feedbacks.splice(feedback, 1);
    }
    Alert.alert('Feedback deleted!');
  };
  const deleteFeedbackLive = (tripId, feedbackLive, onApprove) => {
    if (!onApprove) {
      const cardDeleteFeedLive = Trips.filter(trip => trip.id === tripId)[0];
      cardDeleteFeedLive.feedbacksLive.splice(feedbackLive, 1);
    } else {
      const cardDeleteFeedLive = WaitingTrips.filter(
        trip => trip.id === tripId,
      )[0];
      cardDeleteFeedLive.feedbacksLive.splice(feedbackLive, 1);
    }
    Alert.alert('Feedback deleted!');
  };
  const deleteWaitingCard = id => {
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id != id);
    });
  };

  const editCard = (updatedTrip, onApprove) => {
    if (!onApprove) {
      const trip = Trips.filter(t => t.id === updatedTrip.id)[0];
      trip.tripName = updatedTrip.tripName;
      trip.category.isRelax = updatedTrip.category.isRelax;
      trip.category.isDynamic = updatedTrip.category.isDynamic;
      trip.category.isParty = updatedTrip.category.isParty;
      trip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
      trip.category.isCarTravel = updatedTrip.category.isCarTravel;
      trip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
      trip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
      trip.location = updatedTrip.location;
      trip.description = updatedTrip.description;
      trip.priceInNis = updatedTrip.priceInNis;
    } else {
      const waitingTrip = WaitingTrips.filter(t => t.id === updatedTrip.id)[0];
      waitingTrip.tripName = updatedTrip.tripName;
      waitingTrip.category.isRelax = updatedTrip.category.isRelax;
      waitingTrip.category.isDynamic = updatedTrip.category.isDynamic;
      waitingTrip.category.isParty = updatedTrip.category.isParty;
      waitingTrip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
      waitingTrip.category.isCarTravel = updatedTrip.category.isCarTravel;
      waitingTrip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
      waitingTrip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
      waitingTrip.location = updatedTrip.location;
      waitingTrip.description = updatedTrip.description;
      waitingTrip.priceInNis = updatedTrip.priceInNis;
    }
  };
  const onSendMessage = (trip, message,onApprove) => {
    if (!onApprove) {
      const cardMessage = Trips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    } else {
      const cardMessage = WaitingTrips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    }
  };

  const NavDrawer = ({navigation}) => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator>
        {!isUserConnected && (
          <Drawer.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginStack}
          />
        )}
        <Drawer.Screen
          // options={{headerShown: true}}
          name="Home"
          options={{
            headerShown: true,
            // headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Pressable
                style={[styles.button, styles.buttonSend]}
                onPress={() => {
                  setIsUserConnected(false);
                  navigation.navigate('Login');
                }}>
                <Text style={styles.textStyle}>LogOut</Text>
              </Pressable>
            ),
          }}>
          {props => (
            <HomePage {...props} user={Users[Index]} tripSearch={addTripInfo} />
          )}
        </Drawer.Screen>
        {isUserConnected && (
          <Drawer.Screen name="TripsPage">
            {props => (
              <TripsPage
                {...props}
                Trips={Trips}
                user={Users[Index]}
                tripInfo={TripInfo}
                deleteCard={deleteCard}
                onSendMessage={onSendMessage}
                deletePicture={deletePicture}
                deleteFeedback={deleteFeedback}
                deleteFeedbackLive={deleteFeedbackLive}
                editCard={editCard}
              />
            )}
          </Drawer.Screen>
        )}
        {Users[Index].admin && isUserConnected && (
          <Drawer.Screen name="TripsApprove">
            {props => (
              <TripsApprove
                {...props}
                WaitingTrips={WaitingTrips}
                user={Users[Index]}
                deleteWaitingCard={deleteWaitingCard}
                editCard={editCard}
                onSendMessage={onSendMessage}
                addTrip={addTrip}
                deletePicture={deletePicture}
                deleteFeedback={deleteFeedback}
                deleteFeedbackLive={deleteFeedbackLive}
              />
            )}
          </Drawer.Screen>
        )}
        {isUserConnected && (
          <Drawer.Screen name="MyTrips">
            {props => (
              <MyTrips
                {...props}
                Trips={Trips}
                WaitingTrips={WaitingTrips}
                user={Users[Index]}
                deleteCard={deleteCard}
                addTrip={addTrip}
                onSendMessage={onSendMessage}
                deletePicture={deletePicture}
                deleteFeedback={deleteFeedback}
                deleteFeedbackLive={deleteFeedbackLive}
                editCard={editCard}
              />
            )}
          </Drawer.Screen>
        )}
        {isUserConnected && (
          <Drawer.Screen name="AddTrip">
            {props => (
              <AddTrip
                {...props}
                addWaitingTrip={addWaitingTrip}
                user={Users[Index]}
                getWaitingId={Trips.length + WaitingTrips.length + 1}
              />
            )}
          </Drawer.Screen>
        )}

        {/* {isUserConnected && (
          <Drawer.Screen
            name="Logout"
            component={LoginStack}
            options={{headerShown: false}}
          />
        )} */}
      </Drawer.Navigator>
    );
  };

  const LoginStack = () => {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {props => (
            <LoginPage
              {...props}
              Users={Users}
              ind={setIndex}
              setIsUserConnected={setIsUserConnected}
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
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <NavDrawer />
    </NavigationContainer>
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
