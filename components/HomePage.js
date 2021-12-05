import React, { useState } from 'react';
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

const HomePage = ({ name, tripSearch,setOnEdit, navigation }) => {
  const updateFilter = (
    isRelax,
    isDynamic,
    isParty,
    isPetAllowed,
    isCarTravel,
    isPlaneTravel,
    isTrainTravel,
    priceInNis,
    location,
  ) => {
    const tripInfo = {
      category: {
        isRelax: isRelax,
        isDynamic: isDynamic,
        isParty: isParty,
        isPetAllowed: isPetAllowed,
        isCarTravel: isCarTravel,
        isPlaneTravel: isPlaneTravel,
        isTrainTravel: isTrainTravel,
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
          <TripFilter updateFilter={updateFilter} setOnEdit={setOnEdit} navigation={navigation} />
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
