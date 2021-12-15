import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Button} from 'react-native-elements';
import {Form, FormItem} from 'react-native-form-component';
import Slider from '@react-native-community/slider';

const TripFilter = ({updateFilter, navigation}) => {
  const [price, setPrice] = useState();
  const [location, setLocation] = useState('');
  const [tripName, setTripName] = useState('');

  //categories
  const [categories, setCategories] = useState({
    isRelax: false,
    isDynamic: false,
    isParty: false,
    isPetAllowed: false,
    isCarTravel: false,
    isPlaneTravel: false,
    isTrainTravel: false,
  });

  const onSearch = () => {
    updateFilter(categories, tripName, location, price);
    setCategories({
      isRelax: false,
      isDynamic: false,
      isParty: false,
      isPetAllowed: false,
      isCarTravel: false,
      isPlaneTravel: false,
      isTrainTravel: false,
    });
    setPrice();
    setLocation('');
    setTripName('');
    navigation.navigate('TripsPage');
  };
  return (
    <View>
      <Form
        onButtonPress={onSearch}
        buttonStyle={styles.formButton}
        buttonText="Search Trip">
        <Text style={styles.text}>Enter your desired trip info: </Text>
        <FormItem
          style={styles.inputView}
          label="Trip Name"
          labelStyle={styles.label}
          value={tripName}
          placeholder="Add trip name here"
          onChangeText={tripName => {
            setTripName(tripName);
          }}
        />
        {/* <FormItem
          style={styles.inputView}
          label="Price limit (NIS)"
          labelStyle={styles.label}
          value={price}
          placeholder="Add price here"
          onChangeText={price => {
            setPrice(price);
          }}
        /> */}

        <FormItem
          style={styles.inputView}
          label="Location"
          labelStyle={styles.label}
          value={location}
          placeholder="Add location here"
          onChangeText={location => {
            setLocation(location);
          }}
        />

        <Text style={styles.showTextMoney}>Maximum price the trip cost:</Text>
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
        <Text style={styles.text}>Filter your trip category</Text>
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
        />
      </Form>
      {/* <Button title="Add new trip +" color="red" onPress={onAddTrip} /> */}
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

  inputView: {
    flex: 0.3,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0.5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    borderRadius: 5,
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
  showTextMoney: {
    color: 'black',
    margin: 10,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  showMoney: {
    flex: 3,
    alignSelf: 'center',

  },
  slider: {
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  inputNumber: {
    flex: 2,
  },
  inputNumberView: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
});
export default TripFilter;
