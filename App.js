/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import AddTrip from './components/AddTrip';
import AddGroupTrip from './components/AddGroupTrip';
import TripsPage from './components/TripsPage';
import MyTrips from './components/MyTrips';
import TripsApprove from './components/TripsApprove';
import ForgotPassword from './components/ForgotPassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
import type {Node} from 'react';
import {StyleSheet, Alert, Text, Pressable} from 'react-native';
import {Button} from 'react-native-elements';

const App: () => Node = () => {
  const [Trips, setTrips] = useState([]);
  const [WaitingTrips, setWaitingTrips] = useState([]);
  // const [myTrips, setMyTrips] = useState([]);
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [activeUser, setActiveUser] = useState({});

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
  const fetchAuthentication = async user => {
    var flag = false;
    await fetch(`http://10.0.2.2:8080/api/authUser/`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    })
      .then(res => {
        res.ok && (flag = true);
        return res.json();
      })
      .then(json => {
        if (flag) {
          console.log(json);
          // const newJson = json;
          setActiveUser(json);
          // console.log(activeUser);
          return json;
        }
      })
      .catch(error => console.error(error));
    // console.log(activeUser);

    return flag;
  };

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

  const AddUserToDB = async trip => {
    await fetch(`http://10.0.2.2:8080/api/user`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        return json;
      })
      .catch(error => console.error(error));
  };

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

  // const fetchTripByOwner = async ownerId => {
  //   try {
  //     const res = await fetch(`http://10.0.2.2:8080/api/tripOwner/${ownerId}`);
  //     const json = await res.json();
  //     {
  //       // console.log(json);
  //       let array = [];
  //       json.forEach(trip => {
  //         array.push(
  //           ({
  //             trip_id,
  //             user_id,
  //             isWaiting,
  //             adminMessage,
  //             tripName,
  //             location,
  //             description,
  //             price,
  //           } = trip),
  //         );
  //       });
  //       // console.log(array);
  //       setMyTrips(array);
  //     }
  //     //     .then(res => res.json())
  //     //     .then(json => )
  //     //     .catch(error => console.error(error));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchWaitingTrips = async () => {
  //   await fetch(`http://10.0.2.2:8080/api/tripIsWaiting`)
  //     .then(res => res.json())
  //     .then(json => {
  //       // console.log(json);
  //       let array = [];
  //       json.forEach(trip => {
  //         array.push(
  //           ({
  //             trip_id,
  //             user_id,
  //             isWaiting,
  //             adminMessage,
  //             tripName,
  //             location,
  //             description,
  //             price,
  //           } = trip),
  //         );
  //       });
  //       // console.log(array);
  //       setWaitingTrips(array);

  //       // var array = [];
  //       // trips.forEach(doc => {
  //       //   array.push(doc.data());
  //       // });
  //       // return json;
  //     })
  //     .catch(error => console.error(error));
  // };

  // const fetchTrips = async tripSearchInfo => {
  //   // console.log(tripSearchInfo);
  //   await fetch(`http://10.0.2.2:8080/api/tripByCategory/`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(tripSearchInfo),
  //   })
  //     .then(res => res.json())
  //     .then(json => {
  //       let array = [];
  //       json.forEach(trip => {
  //         array.push(({location, category, price} = trip));
  //       });
  //       setTrips(array);
  //       // console.log(Trips);
  //     })
  //     .catch(error => console.error(error));
  // };

  const AddTripToDB = async trip => {
    await fetch(`http://10.0.2.2:8080/api/trip`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // return json;
      })
      .catch(error => console.error(error));
    // fetchWaitingTrips();
  };

  const UpdateTripToDB = async (id, trip) => {
    await fetch(`http://10.0.2.2:8080/api/trip/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // return json;
      })
      .catch(error => console.error(error));
    // fetchWaitingTrips();
  };

  const deleteTripFromDB = async id => {
    await fetch(`http://10.0.2.2:8080/api/trip/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error(error));

    // fetchWaitingTrips();
  };

  // const getPostsByTripID = async trip_id => {
  //   // var flag = false;
  //   await fetch(`http://10.0.2.2:8080/api/postsByTripID/${trip_id}`)
  //     .then(res => {
  //       // res.ok && (flag = true);
  //       return res.json();
  //     })
  //     .then(
  //       json => {
  //         // if (flag) {
  //         console.log(json);
  //       },
  //       // }
  //     )
  //     .catch(error => console.error(error));
  //   // console.log(activeUser);

  //   // return flag;
  // };

  // how to use this hook in children components without cause infinite loops
  // decide when and where to render every server request
  // useEffect(() => {
  //   fetchWaitingTrips();
  //   fetchTrips({category: []});
  // }, []);


  const addTrip = id => {
    UpdateTripToDB(id, {isWaiting: false});
  };
  // const addWaitingGroupTrip = waitingGroupTrip => {
  //   Alert.alert('asdsad' + String(waitingGroupTrip).toString);
  // };
  const addWaitingTrip = waitingTrip => {
    AddTripToDB(waitingTrip);
    
  };
  const addTripInfo = tripInfo => {
    // setTripInfo(tripInfo);
    // fetchTrips(tripInfo);
    // console.log(Trips);
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
  // const deleteFeedback = (tripId, feedback, onApprove) => {
  //   if (!onApprove) {
  //     const cardDeleteFeed = Trips.filter(trip => trip.id === tripId)[0];
  //     cardDeleteFeed.feedbacks.splice(feedback, 1);
  //   } else {
  //     const cardDeleteFeed = WaitingTrips.filter(trip => trip.id === tripId)[0];
  //     cardDeleteFeed.feedbacks.splice(feedback, 1);
  //   }
  //   Alert.alert('Feedback deleted!');
  // };
  // const deleteFeedbackLive = (tripId, feedbackLive, onApprove) => {
  //   if (!onApprove) {
  //     const cardDeleteFeedLive = Trips.filter(trip => trip.id === tripId)[0];
  //     cardDeleteFeedLive.feedbacksLive.splice(feedbackLive, 1);
  //   } else {
  //     const cardDeleteFeedLive = WaitingTrips.filter(
  //       trip => trip.id === tripId,
  //     )[0];
  //     cardDeleteFeedLive.feedbacksLive.splice(feedbackLive, 1);
  //   }
  //   Alert.alert('Feedback deleted!');
  // };
  const deleteWaitingCard = id => {
    // setWaitingTrips(prevCards => {
    //   return prevCards.filter(card => card.id != id);
    // });
    console.log(id);
    deleteTripFromDB(id);
    // fetchWaitingTrips();
  };

  // Need to decide what to do here when trip is edited ? edit in state and database or just database ?
  // same in all the updating methods: feedbacks, pictures, 
  // what to do with onApprove
  const editCard = (updatedTrip, onApprove) => {
    // if (!onApprove) {
    //   const trip = Trips.filter(t => t.id === updatedTrip.id)[0];
    //   trip.tripName = updatedTrip.tripName;
    //   // trip.category.isRelax = updatedTrip.category.isRelax;
    //   // trip.category.isDynamic = updatedTrip.category.isDynamic;
    //   // trip.category.isParty = updatedTrip.category.isParty;
    //   // trip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
    //   // trip.category.isCarTravel = updatedTrip.category.isCarTravel;
    //   // trip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
    //   // trip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
    //   trip.location = updatedTrip.location;
    //   trip.description = updatedTrip.description;
    //   trip.price = updatedTrip.price;
    // } else {
    //   // const waitingTrip = updatedTrip.id;
    //   // waitingTrip.tripName = updatedTrip.tripName;
    //   // waitingTrip.category.isRelax = updatedTrip.category.isRelax;
    //   // waitingTrip.category.isDynamic = updatedTrip.category.isDynamic;
    //   // waitingTrip.category.isParty = updatedTrip.category.isParty;
    //   // waitingTrip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
    //   // waitingTrip.category.isCarTravel = updatedTrip.category.isCarTravel;
    //   // waitingTrip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
    //   // waitingTrip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
    //   // waitingTrip.location = updatedTrip.location;
    //   // waitingTrip.description = updatedTrip.description;
    //   // waitingTrip.price = updatedTrip.price;
    // }
    const updatedWaitingTrip = {
      tripName: updatedTrip.tripName,
      category: updatedTrip.category,
      price: updatedTrip.price,
      location: updatedTrip.location,
      description: updatedTrip.description,
    };
    // const id = String(updatedTrip.id);
    // console.log(id);
    UpdateTripToDB(updatedTrip.trip_id, updatedWaitingTrip);
    // setWaitingTrips(WaitingTrips);
    // }
  };
  const onSendMessage = (trip, message, onApprove) => {
    if (!onApprove) {
      const cardMessage = Trips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    } else {
      const cardMessage = WaitingTrips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    }
  };

  const NavDrawer = () => {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator initialRouteName="Login">
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
                  setActiveUser({});
                }}>
                <Text style={styles.textStyle}>LogOut</Text>
              </Pressable>
            ),
          }}>
          {props => (
            <HomePage
              {...props}
              user={activeUser}
              // setTripInfo={setTripInfo}
              // addTripInfo={addTripInfo}
              // setMyTrips={setMyTrips}
            />
          )}
        </Drawer.Screen>
        {/* {isUserConnected && (
          <Drawer.Screen name="TripsPage">
            {props => (
              <TripsPage
                {...props}
                // Trips={Trips}
                user={activeUser}
                tripInfo={TripInfo}
                deleteCard={deleteCard}
                onSendMessage={onSendMessage}
                deletePicture={deletePicture}
                // deleteFeedback={deleteFeedback}
                // deleteFeedbackLive={deleteFeedbackLive}
                editCard={editCard}
              />
            )}
          </Drawer.Screen>
        )} */}
        {activeUser.admin && isUserConnected && (
          <Drawer.Screen
            name="TripsApprove">
            {props => (
              <TripsApprove
                {...props}
                // WaitingTrips={WaitingTrips}
                // setWaitingTrips={setWaitingTrips}
                user={activeUser}
                UpdateTripToDB={UpdateTripToDB}
                deleteTripFromDB={deleteTripFromDB}
                // deleteWaitingCard={deleteWaitingCard}
                // editCard={editCard}
                // onSendMessage={onSendMessage}
                // addTrip={addTrip}
                // deletePicture={deletePicture}
                // deleteFeedback={deleteFeedback}
                // deleteFeedbackLive={deleteFeedbackLive}
              />
            )}
          </Drawer.Screen>
        )}
        {isUserConnected && (
          <Drawer.Screen name="MyTrips">
            {props => (
              <MyTrips
                {...props}
                // myTrips={myTrips}
                user={activeUser}
                deleteCard={deleteCard}
                addTrip={addTrip}
                onSendMessage={onSendMessage}
                deletePicture={deletePicture}
                // deleteFeedback={deleteFeedback}
                // deleteFeedbackLive={deleteFeedbackLive}
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
                user={activeUser}
              />
            )}
          </Drawer.Screen>
        )}
        {isUserConnected && (
          <Drawer.Screen name="AddGroupTrip">
            {props => (
              <AddGroupTrip
                {...props}
                addWaitingGroupTrip={addWaitingGroupTrip}
                user={activeUser}
              />
            )}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
    );
  };

  const LoginStack = () => {
    const Stack = createNativeStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen name="LoginPage">
          {props => (
            <LoginPage
              {...props}
              setIsUserConnected={setIsUserConnected}
              authenticateUser={fetchAuthentication}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => <RegisterPage {...props} addNewUser={AddUserToDB} />}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword">
          {props => <ForgotPassword {...props} />}
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
