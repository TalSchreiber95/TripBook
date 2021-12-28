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
import {Button} from 'react-native-elements/dist/buttons/Button';
import {AppContext} from './Context';

const TripsPage = ({
  // Trips,
  user,
  tripInfo,
  deleteCard,
  editCard,
  onSendMessage,
  deletePicture,
  setIsOnSearch,
  isOnSearch,
  // deleteFeedback,
  // deleteFeedbackLive,
  // navigation,
}) => {
  const [Trips, setTrips] = useState([]);

  const fetchTrips = async tripSearchInfo => {
    console.log(tripSearchInfo);

    await fetch(`http://10.0.2.2:8080/api/tripByCategory/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(tripSearchInfo),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setTrips(json);
        // // console.log(Trips);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchTrips(tripInfo);
    console.log('kruval');
  }, [isOnSearch]);

  return (
    <ScrollView>
      {/* <Header user={user} /> */}
      <View style={styles.backButtonPanel}>
        <Text style={styles.text}>Search Results:</Text>
        <Button
          title="Back to Search"
          containerStyle={styles.backButton}
          onPress={() => setIsOnSearch(false)}
        />
      </View>
      <Text style={styles.locationText}>
        {' '}
        Showing trips located in {tripInfo.location} not over {tripInfo.price}{' '}
        ILS{' '}
      </Text>
      {Trips.map(trip => (
        <TripCard
          key={trip.trip_id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          // deleteFeedback={deleteFeedback}
          // deleteFeedbackLive={deleteFeedbackLive}
          onApprove={false}
        />
      ))}
      {/* <Text style={styles.text2}>Group Trips:</Text> */}
      {/* {Trips.map(trip => (
        <GroupTripCard
          key={trip.id}
          trip={trip}
          user={user}
          deleteCard={deleteCard}
          editCard={editCard}
          onSendMessage={onSendMessage}
          deletePicture={deletePicture}
          deleteFeedback={deleteFeedback}
          deleteFeedbackLive={deleteFeedbackLive}
          onApprove={false}
          onGroup={true}
        />
      ))} */}
    </ScrollView>
  );
};

TripsPage.defaultProps = {
  onApprove: false,
};

const styles = StyleSheet.create({
  backButtonPanel: {
    flex: 3,
    flexDirection: 'row',
  },
  backButton: {
    backgroundColor: 'black',
  },
  text: {
    flex: 1,
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    // marginBottom: 20,
  },
  text2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
    marginEnd: 260,
    backgroundColor: 'green',
  },
  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
});

export default TripsPage;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.price >= tripInfo.price
      )
 */
