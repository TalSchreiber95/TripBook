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
import Header from './Header';

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
      Alert.alert('Email is already exists - choose other');
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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header connected={false} />
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
            value={newUser}
            onChangeText={newUser => {
              setNewUser(newUser);
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // title: {
  //   fontSize: 90,
  //   fontWeight: '300',
  //   textAlign: 'center',
  //   marginBottom: 15,
  //   color: 'gold',
  //   backgroundColor: '#001f3f',
  // },
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
});

export default RegisterPage;
