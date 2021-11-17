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

const RegisterPage = ({Users, addNewUser, navigation}) => {
  
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passRecoverAnswer, setPassRecoverAnswer] = useState('');

  const onRegister = () => {
    const userExist = Users.find(user => {
      return user.id === newUser;
    });
    if (userExist) {
      Alert.alert('UserName is already exists - choose other');
    } else {
      if (newUser != '' && newPassword != '') {
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
            onChangeText={firstName => {
              setFirstName(firstName);
            }}
            asterik
          />
          <FormItem
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
            style={styles.inputView}
            label="UserName/Email"
            labelStyle={styles.label}
            isRequired
            value={newUser}
            onChangeText={newUser => {
              setNewUser(newUser);
            }}
            asterik
          />
          <FormItem
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
            style={styles.inputView}
            label="if u forget your password you can recover it by anwering that question - 
            what the name of your mother"
            labelStyle={styles.label}
            isRequired
            value={passRecoverAnswer}
            onChangeText={passRecoverAnswer => {
              setPassRecoverAnswer(passRecoverAnswer);
            }}
            asterik
          />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 90,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 15,
    color: 'gold',
    backgroundColor:'#001f3f',
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
