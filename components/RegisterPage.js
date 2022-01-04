import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Vibration,
} from 'react-native';

import { Form, FormItem } from 'react-native-form-component';
import Header from './Header';
import { Button } from 'react-native-elements';

const RegisterPage = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passRecoverAnswer, setPassRecoverAnswer] = useState('');

  const AddUserToDB = async trip => {
    await fetch(`http://10.0.2.2:8080/api/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(json => {
        return json;
      })
      .catch(error => console.error(error));
  };

  const onRegister = async () => {
    if (newEmail != '' && newPassword != '') {
      const newuser = {
        email: newEmail,
        password: newPassword,
        first_name: firstName,
        last_name: lastName,
        passRecoverAnswer: passRecoverAnswer,
        admin: false,
      };
      await AddUserToDB(newuser);
      navigation.navigate('Login');
      Alert.alert('User added successfully, you can log in now !');
    } else {
      Vibration.vibrate();
      Alert.alert('Email and Password required');
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <Form
          onButtonPress={onRegister}
          buttonText="Register"
          buttonStyle={styles.formButton}>
          <FormItem
            placeholder="Enter your First Name"
            style={styles.inputView}
            label="First Name"
            labelStyle={styles.label}
            isRequired
            value={firstName}
            onChangeText={firstName => {
              setFirstName(firstName);
            }}
            asterik
          />
          <FormItem
            placeholder="Enter your Last Name"
            style={styles.inputView}
            label="Last Name"
            labelStyle={styles.label}
            isRequired
            value={lastName}
            onChangeText={lastName => {
              setLastName(lastName);
            }}
            asterik
          />

          <FormItem
            placeholder="Enter your Email "
            style={styles.inputView}
            label="Email"
            labelStyle={styles.label}
            isRequired
            value={newEmail}
            onChangeText={newEmail => {
              setNewEmail(newEmail);
            }}
            asterik
          />
          <FormItem
            placeholder="Choose a Password"
            style={styles.inputView}
            label="Password"
            labelStyle={styles.label}
            isRequired
            value={newPassword}
            onChangeText={newPassword => {
              setNewPassword(newPassword);
            }}
            asterik
          />
          <FormItem
            placeholder="Answer the Question"
            style={styles.inputView}
            label="if u forget your password you can recover it by anwering that question.
            what the name of your mother ?"
            labelStyle={styles.label}
            isRequired
            value={passRecoverAnswer}
            onChangeText={passRecoverAnswer => {
              setPassRecoverAnswer(passRecoverAnswer);
            }}
            asterik
          />
        </Form>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate('Login')}
          containerStyle={styles.backButtonContainer}
          buttonStyle={styles.backButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  scrollView: {
    // backgroundColor: 'white',
  },
  label: {
    color: 'black',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  inputView: {
    flex: 0.3,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    borderRadius: 5,
  },
  // inputView: {
  //   flex: 0.3,
  //   // backgroundColor: 'lightblue',
  //   borderBottomWidth: 0.5,
  //   // marginBottom: 10,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   fontSize: 20,
  //   // borderRadius: 5,
  //   // elevation: 5,
  // },

  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
  },
  backButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    // color: 'grey',
    // elevation: 3,
    // backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    // elevation: 3,
    backgroundColor: 'grey',
    marginLeft: 50,
    marginRight: 50,
  },
});

export default RegisterPage;
