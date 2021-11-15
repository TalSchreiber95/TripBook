import React,{useState} from 'react';
import {
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

const AddTrip = ({navigation}) => {
  const [tripName,setTripName] = useState('');
  const [location,setLocation] = useState('');
  const [isRelax, setIsRelax] = useState(false);
  const [isDynamic, setIsDynamic] = useState(false);
  const [isParty, setIsParty] = useState(false);
  const [isPetAllowed, setIsPetAllowed] = useState(false);
  const [isCarTravel, setIsCarTravel] = useState(false);
  const [isPlaneTravel, setIsPlaneTravel] = useState(false);
  const [isTrainTravel, setIsTrainTravel] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [description,setDescription] = useState('');
  const onAddTrip = () => { //there is an ISSUE here need to talk about it.
    // navigation.navigate('Home');

  }


  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>AddTrip</Text>
          <Form onSubmit={onAddTrip} 
            buttonStyle={styles.formButton}
            buttonText="Post Trip">
            <FormItem
              style={styles.inputView}
              label="Trip Name"
              labelStyle={styles.label}
              isRequired
              value={setTripName}
              asterik
            />
            <FormItem
              style={styles.inputView}
              label="Trip Location"
              labelStyle={styles.label}
              isRequired
              value={setLocation}
              asterik
            />
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
            <Text style={styles.label}> Describe the trip:</Text>
            <TextInput placeholder='add description here'
              style={styles.inputView}
              multiline={true}
              value={setDescription}
            />
            <Text style={styles.label}> Feedback:</Text>
            <TextInput placeholder='add feedback here'
              style={styles.inputView}
              multiline={true}
              value={setFeedback}
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
    fontWeight: '300',
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 30,
    color: 'black',
  },
  label: {
    color: 'black',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  inputView: {
    flex: 0.3,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 17,
    borderRadius: 10,
  },

  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
    color: 'black',
  },
  checkbox: {
    color: 'white',
    marginLeft: 5,
    marginBottom: 10,
  },
  checkboxText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
  },
  icon: {
    borderColor: 'black',
  },
  styleFeedback: {
    fontWeight: 'bold',
    fontSize:24,
  },
});

export default AddTrip;
