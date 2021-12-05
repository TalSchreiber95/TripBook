import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Form, FormItem} from 'react-native-form-component';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Header from './Header';

const AddTrip = ({addWaitingTrip, navigation, user, getWaitingId, trip,onEdit}) => {
  const [tripName, setTripName] = useState(trip.tripName);
  const [location, setLocation] = useState(trip.location);
  const [feedback, setFeedback] = useState(trip.feedbacks);
  const [feedbackLive, setFeedbackLive] = useState(trip.feedbacksLive);
  const [priceInNis, setPriceInNis] = useState(trip.priceInNis);

  const [description, setDescription] = useState(trip.description);
  const [picture, setPicture] = useState(trip.pictures);

  //categories
  const [isRelax, setIsRelax] = useState(trip.category.isRelax);
  const [isDynamic, setIsDynamic] = useState(trip.category.isDynamic);
  const [isParty, setIsParty] = useState(trip.category.isParty);
  const [isPetAllowed, setIsPetAllowed] = useState(trip.category.isPetAllowed);
  const [isCarTravel, setIsCarTravel] = useState(trip.category.isCarTravel);
  const [isPlaneTravel, setIsPlaneTravel] = useState(trip.category.isPlaneTravel);
  const [isTrainTravel, setIsTrainTravel] = useState(trip.category.isTrainTravel);

  const onAddTrip = () => {
    //should fix the issue of update a exist trip
    if (
      tripName != '' &&
      location != '' &&
      description != '' &&
      priceInNis != null
    ) {
      const newTrip = {
        id: getWaitingId,
        owner: user.email,
        adminMessage: 'No new admin messages',
        tripName: tripName,
        category: {
          isRelax: isRelax,
          isDynamic: isDynamic,
          isParty: isParty,
          isPetAllowed: isPetAllowed,
          isCarTravel: isCarTravel,
          isPlaneTravel: isPlaneTravel,
          isTrainTravel: isTrainTravel,
        },
        pictures: [picture],
        location: location,
        description: description,
        feedbacks: [feedback],
        feedbacksLive: [],
        priceInNis: priceInNis,
      };
      addWaitingTrip(newTrip);
      // Alert.alert('trip posted succesfully');
      navigation.navigate('Home');
    } else {
      // Alert.alert('Fill all the required fields !');
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {/* <Text style={styles.title}>Add a Trip</Text> */}
          <Header title={onEdit?'Update Trip':'Add Trip'}  name={user} navigation={navigation} />
          <Text style={styles.text}>Fill the details below:</Text>
          <Form
            onButtonPress={onAddTrip}
            buttonStyle={styles.formButton}
            buttonText="Post Trip">
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
              placeholder="Add price here"
              style={styles.inputView}
              label="Price(NIS)"
              labelStyle={styles.label}
              value={priceInNis}
              onChangeText={price => {
                setPriceInNis(price);
              }}
              // demand int instead of string
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
            {!onEdit && <FormItem
              placeholder="Add url pic here"
              style={styles.inputView}
              label="url pic:"
              labelStyle={styles.label}
              multiline={true}
              value={picture}
              onChangeText={pic => {
                setPicture(pic);
              }}
            />}
            <View style={styles.checkboxesView}>
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
            </View>
            {!onEdit && <FormItem
              placeholder="Add feedback here"
              style={styles.inputView}
              label="Feedback:"
              labelStyle={styles.feedback}
              multiline={true}
              value={feedback}
              onChangeText={feedback => {
                setFeedback(feedback);
              }}
            />}
            {!onEdit&&
            <FormItem
              placeholder="Add live feedback here"
              style={styles.inputView}
              label="Feedback Live:"
              labelStyle={styles.label}
              multiline={true}
              value={feedbackLive}
              onChangeText={feedbackLive => {
                setFeedbackLive(feedbackLive);
              }}
            />}
            
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

AddTrip.defaultProps = {
  trip: {
    id: 0,
    owner: '',
    adminMessage: 'No new admin messages',
    tripName: '',
    category: {
      isRelax: false,
      isDynamic: false,
      isParty: false,
      isPetAllowed: false,
      isCarTravel: false,
      isPlaneTravel: false,
      isTrainTravel: false,
    },
    pictures: 'a',
    location: '',
    description: '',
    feedbacks: '',
    feedbacksLive: '',
    priceInNis: '',
  },
  onEdit:false,
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginBottom: 20,
  },
  label: {
    color: 'black',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 2,
    paddingBottom: 2,
  },
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

  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 20,
    color: 'black',
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
});

export default AddTrip;
