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
  handleNewUserChange,
  handleNewPasswordChange,
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
      const newuser = {id: newUser, pass: newPassword};
      addNewUser(newuser);
      navigation.navigate('Login');
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
        </Form>
        {/* <Button
          title="Dont have an account? Sign up"
          style={styles.register}
          onPress={() => navigation.navigate('Register')}
        /> */}
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
