import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, Alert} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const TripFilter = ({updateFilter, navigation}) => {
  const [isRelax, setIsRelax] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [isPetAllowed, setIsPetAllowed] = useState(false);
  const [isCarTravel, setIsCarTravel] = useState(false);
  const [isPlaneTravel, setIsPlaneTravel] = useState(false);
  const [isTrainTravel, setIsTrainTravel] = useState(false);
  const onSubmit = () => {
    updateFilter(
      isRelax,
      isDynamic,
      isParty,
      isPetAllowed,
      isCarTravel,
      isPlaneTravel,
      isTrainTravel,
    );
    setIsRelax(false);
    setIsDynamic(false);
    setIsParty(false);
    setIsPetAllowed(false);
    setIsCarTravel(false);
    setIsPlaneTravel(false);
    setIsTrainTravel(false);
    navigation.navigate('TripsPage');
  };
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Filter your trip category</Text>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Relax"
        onPress={setIsRelax}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Dynamic"
        onPress={setIsDynamic}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Party"
        onPress={setIsParty}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Pet"
        onPress={setIsPetAllowed}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Car travel"
        onPress={setIsCarTravel}
        setIsPlaneTravel
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Plane travel"
        onPress={setIsPlaneTravel}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="black"
        unfillColor="silver"
        iconStyle={styles.icon}
        textStyle={styles.checkboxText}
        text="Train travel"
        onPress={setIsTrainTravel}
      />
      <View style={styles.searchButtonView}>
        <Button title="Search" onPress={onSubmit} />
      </View>
      <View style={styles.addButtonView}>
        <Button
          title="Add trip +"
          color="red"
          onPress={() => navigation.navigate('AddTrip')}
        />
      </View>
    </View>
  );
};
TripFilter.defaultProps = {
  title: 'Header title',
};
const styles = StyleSheet.create({
  header: {
    height: 250,
    // backgroundColor: 'black',
  },
  icon: {
    borderColor: 'black',
  },

  checkbox: {
    color: 'white',
    marginLeft: 5,
    marginBottom: 10,
  },

  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 5,
    marginBottom: 20,
  },
  checkboxText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
  },
  searchButtonView: {
    marginTop: 10,
  },
  addButtonView: {
    marginTop: 50,
  },
});
export default TripFilter;
