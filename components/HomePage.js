import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './Header';
import TripFilter from './TripFilter';
import TripsPage from './TripsPage';


const HomePage = ({ navigation }) => {

  const [TripInfo, setTripInfo] = useState({ category: [] });
  const [isOnSearch, setIsOnSearch] = useState(false);

  const updateFilter = (categories, location, price) => {
    let actualCategory = [];
    Object.keys(categories).forEach(key => {
      if (categories[key] === true) actualCategory.push(String(key));
    });

    const tripInfo = {
      location: location,
      category: actualCategory,
      price: price,
    };
    setTripInfo(tripInfo);
    setIsOnSearch(true);
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header />
          {!isOnSearch ? (
            <TripFilter updateFilter={updateFilter} />
          ) : (
            <TripsPage
              tripInfo={TripInfo}
              setIsOnSearch={setIsOnSearch}
              isOnSearch={isOnSearch}
              navigation={navigation}
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
