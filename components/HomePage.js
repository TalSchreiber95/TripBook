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

const HomePage = ({name, tripSearch, navigation}) => {
  const updateFilter = categories => {
    const tripInfo = {
      tripName: tripName,
      category: {
        isRelax: categories.isRelax,
        isDynamic: categories.isDynamic,
        isParty: categories.isParty,
        isPetAllowed: categories.isPetAllowed,
        isCarTravel: categories.isCarTravel,
        isPlaneTravel: categories.isPlaneTravel,
        isTrainTravel: categories.isTrainTravel,
      },
      location: location,
      priceInNis: priceInNis,
    };
    tripSearch(tripInfo);
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Header name={name} navigation={navigation} />
          <TripFilter
            updateFilter={updateFilter}
            // setOnEdit={setOnEdit}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: 'red',
  },
});

export default HomePage;
