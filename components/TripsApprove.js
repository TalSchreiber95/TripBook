import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import Header from './Header';
import TripCard from './TripCard';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './Context';

const TripsApprove = ({ navigation }) => {

  const {
    WaitingTrips,
    setWaitingTrips,
  } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const fetchWaitingTrips = async () => {
    setLoading(true);
    await fetch(`http://10.0.2.2:8080/api/tripIsWaiting`)
      .then(res => res.json())
      .then(json => {
        setWaitingTrips(json);
      })
      .catch(error => console.error(error));
    setLoading(false);

  };

  useEffect(() => {
    fetchWaitingTrips();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        {!loading && <Text style={styles.text}>Approve trips List:</Text>}
        {loading && <ActivityIndicator size={120} />}
        {WaitingTrips !== undefined &&
          WaitingTrips.map(trip => (
            <TripCard
              key={trip.trip_id}
              trip={trip}
              onApprove={true}
              cameraPage={'TripsApprove'}
              navigation={navigation}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginEnd: 200,
  },
  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
});

export default TripsApprove;

