import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import AddTrip from './AddTrip';

import Header from './Header';
import TripFilter from './TripFilter';
import TripsPage from './TripsPage';

const HomePage = ({user, navigation}) => {
  const [TripInfo, setTripInfo] = useState({category: []});
  const [isOnSearch, setIsOnSearch] = useState(false);

  useEffect(() => {
    console.log(user.user_id);
  }, []);

  const updateFilter = (categories, tripName, location, price) => {
    let actualCategory = [];
    Object.keys(categories).forEach(key => {
      if (categories[key] === true) actualCategory.push(String(key));
    });
    const tripInfo = {
      // tripName: tripName,
      // location: location,
      category: actualCategory,
      // price: price,
    };
    // addTripInfo(tripInfo);
    setTripInfo(tripInfo);
    setIsOnSearch(true);
    console.log('shalom omer shalom');
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header user={user} />
          {!isOnSearch ? (
            <TripFilter updateFilter={updateFilter} navigation={navigation} />
          ) : (
            <TripsPage
              // {...props}
              // Trips={Trips}
              user={user}
              tripInfo={TripInfo}
              setIsOnSearch={setIsOnSearch}
              isOnSearch={isOnSearch}
              // deleteCard={deleteCard}
              // onSendMessage={onSendMessage}
              // deletePicture={deletePicture}
              // deleteFeedback={deleteFeedback}
              // deleteFeedbackLive={deleteFeedbackLive}
              // editCard={editCard}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
