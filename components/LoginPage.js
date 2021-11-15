import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Alert,
  TouchableHighlight,
  View,
  Pressable,
} from 'react-native';

import {Form, FormItem} from 'react-native-form-component';

const LoginPage = ({
  Users,
  userName,
  password,
  handleUsernameChange,
  handlePasswordChange,
  navigation,
}) => {
  const onLogin = () => {
    // const userExist = Users.filter(user => user.id === userName);
    for (let index = 0; index < Users.length; index++) {
      if (Users[index].email === userName) {
        if (Users[index].pass === password) {
          navigation.navigate('Home');
          console.log(Users);
          return;
        } else {
          Alert.alert('wrong password');
          return;
        }
      }
    }

    Alert.alert('user not exist');

  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>TripBook</Text>
        <Form
          onButtonPress={onLogin}
          buttonStyle={styles.formButton}
          buttonText="Login">
          <FormItem
            style={styles.inputView}
            label="Username/Email"
            labelStyle={styles.label}
            isRequired
            value={userName}
            onChangeText={handleUsernameChange}
            asterik
          />
          <FormItem
            style={styles.inputView}
            label="Password"
            labelStyle={styles.label}
            value={password}
            onChangeText={handlePasswordChange}
            asterik
          />
        </Form>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Dont have an account? Sign up</Text>
        </Pressable>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  formButton: {
    backgroundColor: '#007AFF',
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 20,
  },
});

export default LoginPage;
