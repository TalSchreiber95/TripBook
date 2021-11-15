import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Form, FormItem} from 'react-native-form-component';

const RegisterPage = ({
  Users,
  newUser,
  newPassword,
  firstName,
  lastName,
  passRecoverAnswer,
  handleNewUserChange,
  handleNewPasswordChange,
  handleFirstNameChange,
  handleLastNameChange,
  handlePassRecoverAnswerChange,
  addNewUser,
  navigation,
}) => {
  const onRegister = () => {
    const userExist = Users.find(user => {
      return user.id === newUser;
    });
    if (userExist) {
      Alert.alert('UserName is already exists - choose other');
    } else {

      if (newUser != '' && newPassword != ''){
        const newuser = {
          email: newUser,
          pass: newPassword,
          firstName: firstName,
          lastName: lastName,
          passRecoverAnswer: passRecoverAnswer,
          admin: false,
        };
      addNewUser(newuser);
      navigation.navigate('Login');
      } else {
        Alert.alert('Email and Password required');
      }
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>TripBook</Text>
        <Form
          onButtonPress={onRegister}
          buttonText="Register"
          buttonStyle={styles.formButton}>
          <FormItem
            style={styles.inputView}
            label="First Name"
            labelStyle={styles.label}
            isRequired
            value={firstName}
            onChangeText={handleFirstNameChange}
            asterik
          />
          <FormItem
            style={styles.inputView}
            label="Last Name"
            labelStyle={styles.label}
            isRequired
            value={lastName}
            onChangeText={handleLastNameChange}
            asterik
          />

          <FormItem
            style={styles.inputView}
            label="UserName/Email"
            labelStyle={styles.label}
            isRequired
            value={newUser}
            onChangeText={handleNewUserChange}
            asterik
          />
          <FormItem
            style={styles.inputView}
            label="Password"
            labelStyle={styles.label}
            isRequired
            value={newPassword}
            onChangeText={handleNewPasswordChange}
            asterik
          />
          <FormItem
            style={styles.inputView}
            label="if u forget your password you can recover it by anwering that question - 
            what the name of your mother"
            labelStyle={styles.label}
            isRequired
            value={passRecoverAnswer}
            onChangeText={handlePassRecoverAnswerChange}
            asterik
          />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 80,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 30,
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
    borderRadius: 30,
  },

  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
  },
});

export default RegisterPage;
