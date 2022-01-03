import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';

import TripCard from './TripCard';
import {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {AppContext} from './Context';
import Icon from 'react-native-vector-icons/FontAwesome';

const TripsPage = ({navigation, tripInfo, setIsOnSearch, isOnSearch}) => {
  const {Trips, setTrips} = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const fetchTrips = async tripSearchInfo => {
    console.log('shriberhomo', tripSearchInfo.price);
    setLoading(true);

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

    setLoading(false);
  };

  useEffect(() => {
    fetchTrips(tripInfo);
    console.log('tripspage effected');
  }, [isOnSearch]);

  return (
    <ScrollView>
      {loading && <ActivityIndicator size={120} />}
      {!loading && (
        <View style={styles.container}>
          <View style={styles.backButtonPanel}>
            <Text style={styles.text}>Search Results:</Text>
            <Button
              title="Back to Search"
              containerStyle={styles.backButton}
              onPress={() => setIsOnSearch(false)}
            />
          </View>
          <View style={styles.priceView}>
            <Text style={styles.locationText}>
              Showing trips located in {tripInfo.location} not over{' '}
              {tripInfo.price === -1 ? '' : tripInfo.price}
            </Text>
            <Icon name="ils" size={14} color="black" style={styles.ilsIcon} />
          </View>
          {Trips.map(trip => (
            <TripCard
              key={trip.trip_id}
              trip={trip}
              onApprove={false}
              cameraPage={'Home'}
              navigation={navigation}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

TripsPage.defaultProps = {
  onApprove: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  backButtonPanel: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
  },
  backButton: {
    backgroundColor: 'black',
  },
  text: {
    flex: 3,
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
  },

  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
  priceView: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    // maxHeight: 35,
  },
});

export default TripsPage;
