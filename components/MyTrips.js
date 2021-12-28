import React from 'react';
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

import Header from './Header';
import TripCard from './TripCard';
import GroupTripCard from './GroupTripCard';
import {useState, useEffect} from 'react';
import {AppContext} from './Context';

const MyTrips = ({
  // myTrips,
  // WaitingTrips,
  user,
  // deleteCard,
  // addTrip,
  // editCard,
  // onSendMessage,
  // deletePicture,
  // deleteFeedback,
  // deleteFeedbackLive,
  // setTripEdit,
  // fetchTripByOwner
}) => {

  const {
    // Trips,
    // user,
    // WaitingTrips,
    myTrips,
    myWaitingTrips,
    // setTrips,
    // setWaitingTrips,
    setMyTrips,
    setMyWaitingTrips,
  } = useContext(AppContext);

  // const [myTrips, setMyTrips] = useState([]);
  // const [myWaitingTrips, setMyWaitingTrips] = useState([]);

  const fetchTripByOwner = async ownerId => {
    try {
      const res = await fetch(`http://10.0.2.2:8080/api/tripOwner/${ownerId}`);
      const json = await res.json();
      const mytrips = json.filter(trip => trip.isWaiting === false);
      const mywaitingtrips = json.filter(trip => trip.isWaiting === true);
      setMyTrips(mytrips);
      setMyWaitingTrips(mywaitingtrips);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTripByOwner(user.user_id);
  }, []);

  return (
    <ScrollView>
      <Header user={user} />
      <Text style={styles.text}>My posted trips:</Text>
      {myTrips.map(trip => (
        <TripCard
          key={trip.trip_id}
          trip={trip}
          // user={user}
          // deleteCard={deleteCard}
          // editCard={editCard}
          // onSendMessage={onSendMessage}
          // deletePicture={deletePicture}
          // deleteFeedback={deleteFeedback}
          // deleteFeedbackLive={deleteFeedbackLive}
          onApprove={false}
        />
      ))}
      <Text style={styles.text}>My waiting trips:</Text>
      {myWaitingTrips.map(trip => (
        <TripCard
          key={trip.trip_id}
          trip={trip}
          user={user}
          // deleteCard={deleteCard}
          // addTrip={addTrip}
          // editCard={editCard}
          // onSendMessage={onSendMessage}
          // deletePicture={deletePicture}
          // deleteFeedback={deleteFeedback}
          // deleteFeedbackLive={deleteFeedbackLive}
          // setTripEdit={setTripEdit}
          onApprove={true}
        />
      ))}
      {/* <Text style={styles.text2}>My waiting group Trips:</Text>
      {WaitingTrips.map(trip => (
        <GroupTripCard
          key={trip.trip_id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          onApprove={true}
          onGroup={true}
        />
      ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    // marginBottom: 20,
  },
  text2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
    marginEnd: 160,
    backgroundColor: 'green',
  },
  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
});

export default MyTrips;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.price >= tripInfo.price
      )
 */
