import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './Header';
import TripFilter from './TripFilter';

const HomePage = ({user, tripSearch, navigation}) => {
  const updateFilter = (categories, tripName, location, price) => {
    let actualCategory = [' '];
    Object.keys(categories).forEach(key => {
      if (categories[key] === true) actualCategory.push(String(key));
    });
    const tripInfo = {
      tripName: tripName,
      location: location,
      category: actualCategory,
      price: price,
    };
    tripSearch(tripInfo);
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header user={user} navigation={navigation} />
          <TripFilter updateFilter={updateFilter} navigation={navigation} />
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
