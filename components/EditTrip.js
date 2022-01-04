import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from 'react-native';
import { Form, FormItem } from 'react-native-form-component';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Slider from '@react-native-community/slider';

const EditTrip = ({ trip, editCard, onApprove, setToggleEditCard }) => {
  const [tripName, setTripName] = useState(trip.tripName);
  const [location, setLocation] = useState(trip.location);
  const [price, setPrice] = useState(trip.price);
  const [description, setDescription] = useState(trip.description);

  //categories
  const [categories, setCategories] = useState({
    isRelax: trip.category.filter(category => category === 'isRelax').length > 0,
    isDynamic: trip.category.filter(category => category === 'isDynamic').length > 0,
    isParty: trip.category.filter(category => category === 'isParty').length > 0,
    isPetAllowed: trip.category.filter(category => category === 'isPetAllowed').length > 0,
    isCarTravel: trip.category.filter(category => category === 'isCarTravel').length > 0,
    isPlaneTravel: trip.category.filter(category => category === 'isPlaneTravel').length > 0,
    isTrainTravel: trip.category.filter(category => category === 'isTrainTravel').length > 0,
  });

  const onEditTrip = () => {
    if (
      tripName != '' &&
      location != '' &&
      description != '' &&
      price != null
    ) {
      let actualCategory = [' '];
      Object.keys(categories).forEach(key => {
        if (categories[key] === true)
          actualCategory.push(String(key))
      })
      const updatedTrip = {
        trip_id: trip.trip_id,
        tripName: tripName,
        category: actualCategory,
        location: location,
        description: description,
        price: price,
      };
      editCard(updatedTrip, onApprove);
      setToggleEditCard(false);
      Alert.alert('trip updated succesfully');
    } else {
      Vibration.vibrate();
      Alert.alert('Fill all the required fields !');
    }
  };


  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.text}>Edit the details below:</Text>
          <Form
            onButtonPress={onEditTrip}
            buttonStyle={styles.formButton}
            buttonText="Update Trip">
            <FormItem
              placeholder="Add trip name here"
              style={styles.inputView}
              label="Trip Name"
              labelStyle={styles.label}
              value={tripName}
              onChangeText={name => {
                setTripName(name);
              }}
              isRequired
              asterik
            />
            <FormItem
              placeholder="Add location here"
              style={styles.inputView}
              label="Trip Location"
              labelStyle={styles.label}
              value={location}
              onChangeText={location => {
                setLocation(location);
              }}
              isRequired
              asterik
            />

            <FormItem
              placeholder="Add description here"
              style={styles.inputView}
              label="Describe the trip:"
              labelStyle={styles.label}
              multiline={true}
              value={description}
              onChangeText={description => {
                setDescription(description);
              }}
              isRequired
              asterik
            />

            <Text style={styles.showTextMoney}>
              Minimum price the trip cost:
            </Text>
            <Slider
              style={styles.slider}
              step={1}
              minimumValue={0}
              maximumValue={10000}
              value={price}
              onValueChange={slideValue => setPrice(parseInt(slideValue))}
              minimumTrackTintColor="#0074D9"
              maximumTrackTintColor="grey"
              thumbTintColor="#0074D9"
            />
            <View style={styles.inputNumberView}>
              <TextInput
                keyboardType="number-pad"
                numeric
                style={styles.inputNumber}
                placeholder="Enter Price"
                underlineColorAndroid="transparent"
                onChangeText={newSliderValue => {
                  !isNaN(parseInt(newSliderValue))
                    ? setPrice(parseInt(newSliderValue))
                    : setPrice(parseInt(0));
                }}
                value={price}
                maxLength={6}
              />
              <Text style={styles.showMoney}>{price} ILS</Text>
            </View>
            <View style={styles.checkboxesView}>
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Relax"
                onPress={() =>
                  setCategories({
                    isRelax: !categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isRelax}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Dynamic"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: !categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isDynamic}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Party"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: !categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isParty}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Pet"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: !categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isPetAllowed}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Car travel"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: !categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isCarTravel}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Plane travel"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: !categories.isPlaneTravel,
                    isTrainTravel: categories.isTrainTravel,
                  })
                }
                isChecked={categories.isPlaneTravel}
              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Train travel"
                onPress={() =>
                  setCategories({
                    isRelax: categories.isRelax,
                    isDynamic: categories.isDynamic,
                    isParty: categories.isParty,
                    isPetAllowed: categories.isPetAllowed,
                    isCarTravel: categories.isCarTravel,
                    isPlaneTravel: categories.isPlaneTravel,
                    isTrainTravel: !categories.isTrainTravel,
                  })
                }
                isChecked={categories.isTrainTravel}
              />
            </View>
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 2,
    paddingBottom: 2,
  },
  inputView: {
    flex: 0.3,
    borderBottomWidth: 0.5,
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 5,
  },

  formButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#2196F3',
  },
  checkbox: {
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
  },
  checkboxText: {
    fontFamily: 'JosefinSans-Regular',
    textDecorationLine: 'none',
    fontSize: 20,
  },
  showTextMoney: {
    color: 'black',
    marginRight: 50,
    fontWeight: 'bold',
    fontSize: 17,
  },
  showMoney: {
    flex: 3,
  },
  slider: {
    margin: 10,
  },
  inputNumber: {
    flex: 2,
  },
  inputNumberView: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderColor: 'black',
  },
  feedback: {
    color: 'black',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 20,
  },
  description: {
    flex: 0.3,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    borderRadius: 10,
  },
  checkboxesView: {
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },

  buttonSend: {
    backgroundColor: '#2196F3',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: 'grey',
    marginLeft: 10,
    marginRight: 10,
  },
});

export default EditTrip;
