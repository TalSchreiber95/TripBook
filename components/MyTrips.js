import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import Header from './Header';
import TripCard from './TripCard';
import {useState, useEffect, useContext} from 'react';
import {AppContext} from './Context';

const MyTrips = () => {
  const {
    // Trips,
    user,
    // WaitingTrips,
    myTrips,
    myWaitingTrips,
    // setTrips,
    // setWaitingTrips,
    setMyTrips,
    setMyWaitingTrips,
  } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const fetchTripByOwner = async ownerId => {
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    console.log('MyTrips effected');
    fetchTripByOwner(user.user_id);
  }, []);

  return (
    <ScrollView>
      <Header user={user} />
      {!loading && <Text style={styles.text}>My posted trips:</Text>}
      {loading && <ActivityIndicator size={120} />}

      {myTrips.map(trip => (
        <TripCard
          key={trip.trip_id}
          trip={trip}
          onApprove={false}
        />
      ))}
      {!loading && <Text style={styles.text}>My waiting trips:</Text>}
      {myWaitingTrips.map(trip => (
        <TripCard
          key={trip.trip_id}
          trip={trip}
          onApprove={true}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
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

