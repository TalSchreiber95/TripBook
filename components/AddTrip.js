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

const AddTrip = ({addTrip, navigation}) => {
  const [tripName, setTripName] = useState('');
  const [location, setLocation] = useState('');
  const [feedback, setFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [priceInNis, setPriceInNis] = useState();
  //categorys
  const [isRelax, setIsRelax] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [isPetAllowed, setIsPetAllowed] = useState(false);
  const [isCarTravel, setIsCarTravel] = useState(false);
  const [isPlaneTravel, setIsPlaneTravel] = useState(false);
  const [isTrainTravel, setIsTrainTravel] = useState(false);

  const onAddTrip = () => {
    if (
      tripName != '' &&
      location != '' &&
      description != '' &&
      priceInNis != null
    ) {
      const newTrip = {
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
        location: location,
        description: description,
        feedback: [feedback],
        priceInNis: priceInNis,
      };
      addTrip(newTrip);
      Alert.alert('trip posted succesfully');
      navigation.navigate('Home');
    } else {
      Alert.alert('Fill all the required fields !');
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>Add a Trip</Text>
          <Text style={styles.subTitle}>Fill the details below:</Text>
          <Form
            onButtonPress={onAddTrip}
            buttonStyle={styles.formButton}
            buttonText="Post Trip">
            <FormItem
              style={styles.inputView}
              label="Trip Name"
              placeholder="Add trip name here"
              labelStyle={styles.label}
              value={tripName}
              multiline={true}
              onChangeText={name => {
                setTripName(name);
              }}
              isRequired
              asterik
            />
            <FormItem
              style={styles.inputView}
              label="Trip Location"
              labelStyle={styles.label}
              placeholder="Add location here"
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
              isRequired
              asterik
            />
            <FormItem
              placeholder="Add description here"
              style={styles.description}
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
            <FormItem
              placeholder="add feedback here"
              style={styles.inputView}
              label="Feedback:"
              labelStyle={styles.feedback}
              multiline={true}
              value={feedback}
              onChangeText={feedback => {
                setFeedback(feedback);
              }}
            />
          </Form>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '400',
    // paddingBottom: 20,
    paddingTop: 25,
    paddingLeft: 25,
    color: 'gold',
    backgroundColor: '#001f3f',
    // borderColor: 'black',
    // borderRadius: 30
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '300',
    paddingBottom: 20,
    paddingTop: 10,
    paddingLeft: 25,
    color: 'white',
    backgroundColor: '#001f3f'
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
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    borderRadius: 10,
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
    paddingLeft: 20,
    paddingBottom: 10,
  },
  checkboxText: {
    fontFamily: 'JosefinSans-Regular',
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
    marginLeft: 20,
    marginRight: 20,
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
