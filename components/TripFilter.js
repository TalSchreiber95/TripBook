import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Form, FormItem } from 'react-native-form-component';

const TripFilter = ({ updateFilter, tripSearch, navigation }) => {
  const [isRelax, setIsRelax] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [isPetAllowed, setIsPetAllowed] = useState(false);
  const [isCarTravel, setIsCarTravel] = useState(false);
  const [isPlaneTravel, setIsPlaneTravel] = useState(false);
  const [isTrainTravel, setIsTrainTravel] = useState(false);
  const [priceInNis, setPriceInNis] = useState();
  const [location, setLocation] = useState('');

  const onSearch = () => {
    updateFilter(
      isRelax,
      isDynamic,
      isParty,
      isPetAllowed,
      isCarTravel,
      isPlaneTravel,
      isTrainTravel,
      priceInNis,
      location,
    );
    setIsRelax(false);
    setIsDynamic(false);
    setIsParty(false);
    setIsPetAllowed(false);
    setIsCarTravel(false);
    setIsPlaneTravel(false);
    setIsTrainTravel(false);
    setPriceInNis()
    setLocation('')
    navigation.navigate('TripsPage');
  };
  return (
    <View >
      <Form
        onButtonPress={onSearch}
        buttonStyle={styles.formButton}
        buttonText="Search Trip">
        <Text style={styles.text}>Enter your trip info: </Text>
        <FormItem
          style={styles.inputView}
          label="Price limit (NIS)"
          labelStyle={styles.label}
          value={priceInNis}
          placeholder="Add price here"
          onChangeText={price => {
            setPriceInNis(price);
          }}
          isRequired
          asterik
        />
        <FormItem
          style={styles.inputView}
          label="location"
          labelStyle={styles.label}
          value={location}
          placeholder="Add location here"
          onChangeText={location => {
            setLocation(location);
          }}
          isRequired
          asterik
        />
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
      </Form>
      <Button
        title="Add trip +"
        color="red"
        onPress={() => navigation.navigate('AddTrip')}
      />
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
  form: {},
  icon: {
    borderColor: 'black',
  },
  inputView: {
    flex: 0.3,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,

    fontSize: 15,
    borderRadius: 10,
  },
  checkbox: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 10,
  },
  label: {
    color: 'black',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginBottom: 20,
  },
  checkboxText: {
    fontFamily: 'JosefinSans-Regular',
    textDecorationLine: 'none',
    fontSize: 20,
  },
  searchButtonView: {
    marginTop: 10,
  },
  addButtonView: {
    marginTop: 5,
  },
  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 20,
    color: 'black',
  },
});
export default TripFilter;
