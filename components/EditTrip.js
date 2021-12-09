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
import Slider from '@react-native-community/slider';

const EditTrip = ({trip, user, editCard, setTripEdit, navigation}) => {
  const [tripName, setTripName] = useState(trip.tripName);
  const [location, setLocation] = useState(trip.location);
  const [priceInNis, setPriceInNis] = useState(trip.priceInNis);
  const [description, setDescription] = useState(trip.description);

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


  const onAddTrip = () => {
    if (
      tripName != '' &&
      location != '' &&
      description != '' &&
      priceInNis != null
    ) {
      const newTrip = {
        id: trip.id,
        owner: user.email,
        adminMessage: 'No new admin messages',
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
        // pictures: picture,
        location: location,
        description: description,
        // feedbacks: feedback,
        // feedbacksLive: feedbackLive,
        priceInNis: priceInNis,
      };
      editCard(newTrip);
      Alert.alert('trip updated succesfully');
      navigation.navigate('Home');
      setTripEdit({
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
        pictures: [''],
        location: '',
        description: '',
        feedbacks: [''],
        feedbacksLive: [''],
        priceInNis: '',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {/* <Text style={styles.title}>Add a Trip</Text> */}
          <Header title="Edit Trip" name={user} navigation={navigation} />
          <Text style={styles.text}>Edit the details below:</Text>
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
              value={priceInNis}
              onValueChange={slideValue => setPriceInNis(slideValue)}
              minimumTrackTintColor="#0074D9"
              maximumTrackTintColor="grey"
              thumbTintColor="#0074D9"
            />
            <Text style={styles.showMoney}>{priceInNis} ILS</Text>
            {/* <FormItem
              placeholder="Add url pic here"
              style={styles.inputView}
              label="url pic:"
              labelStyle={styles.label}
              multiline={true}
              value={picture}
              onChangeText={pic => {
                setPicture(pic);
              }}

            /> */}
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
                onPress={() => setCategories({
                  isRelax: categories.isRelax,
                  isDynamic: categories.isDynamic,
                  isParty: categories.isParty,
                  isPetAllowed: categories.isPetAllowed,
                  isCarTravel: categories.isCarTravel,
                  isPlaneTravel: !categories.isPlaneTravel,
                  isTrainTravel: categories.isTrainTravel,
                })}              />
              <BouncyCheckbox
                style={styles.checkbox}
                size={25}
                fillColor="black"
                unfillColor="silver"
                iconStyle={styles.icon}
                textStyle={styles.checkboxText}
                text="Train travel"
                onPress={() => setCategories({
                  isRelax: categories.isRelax,
                  isDynamic: categories.isDynamic,
                  isParty: categories.isParty,
                  isPetAllowed: categories.isPetAllowed,
                  isCarTravel: categories.isCarTravel,
                  isPlaneTravel: categories.isPlaneTravel,
                  isTrainTravel: !categories.isTrainTravel,
                })}              />
            </View>
            {/* <FormItem
              placeholder="Add feedback here"
              style={styles.inputView}
              label="Feedback:"
              labelStyle={styles.feedback}
              multiline={true}
              value={feedback}
              onChangeText={feedback => {
                setFeedback(feedback);
              }}
            />
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
            /> */}
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
  showTextMoney: {
    // textAlign: 'center',
    color: 'black',
    margin: 10,
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  showMoney: {
    textAlign: 'center',
    marginBottom: 20,
  },
  slider: {
    margin: 10,
    marginLeft: 25,
    marginRight: 25,
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

export default EditTrip;
