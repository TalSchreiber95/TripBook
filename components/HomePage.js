import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from "./Header";
import TripFilter from "./TripFilter";

const HomePage = ({name,Users, userName, password, navigation}) => {
  const categories = [
    {
      relaxing: false,
      dynamic: false,
      party: false,
      petAllowed: false,
      carTravel: false,
      planeTravel: false,
      trainTravel: false,
    },
  ];


  const [category, setCategory] = useState(categories);
  const updateFilter = (
    isRelax,
    isDynamic,
    isParty,
    isPetAllowed,
    isCarTravel,
    isPlaneTravel,
    isTrainTravel,
  ) => {
    setCategory([
      isRelax,
      isDynamic,
      isParty,
      isPetAllowed,
      isCarTravel,
      isPlaneTravel,
      isTrainTravel,
    ]);
  };

  return (
    <View style={styles.container}>
      {/* <Text title='asadsad' color='white' /> */}
      <Header title='TripBook' />
        {/* name DOESN'T WORK HERE! */}
       <Text>wellcome {name} !</Text> 
      <TripFilter updateFilter={updateFilter} navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'azure',
  },
});

export default HomePage;
