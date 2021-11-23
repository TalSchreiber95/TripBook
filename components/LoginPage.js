import React, { useState } from 'react';
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

import { Form, FormItem } from 'react-native-form-component';
import Header from './Header'

const LoginPage = ({ Users, navigation, ind, name }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    for (let index = 0; index < Users.length; index++) {
      if (Users[index].email === email) {
        if (Users[index].pass === password) {
          ind(index);
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
        <Header title='TripBook' />
        <Form
          onButtonPress={onLogin}
          buttonStyle={styles.formButton}
          buttonText="Login">
          <FormItem
            placeholder="Enter a Valid Email"
            style={styles.inputView}
            label="Email:"
            labelStyle={styles.label}
            isRequired
            value={email}
            onChangeText={email => {
              setEmail(email);
            }}
            asterik
          />
          <FormItem
            placeholder="Enter a Valid Password"
            style={styles.inputView}
            label="Password:"
            labelStyle={styles.label}
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
            asterik
          />
        </Form>
        <Pressable
          style={styles.buttonf}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.buttonTextf}>
            Forgot your password?! Press here!
          </Text>
        </Pressable>
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
    fontSize: 90,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 15,
    color: 'gold',
    backgroundColor: '#001f3f',
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
  buttonf: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'firebrick',
    marginLeft: 42.5,
    marginRight: 42.5,
    marginBottom: 20,
  },
  buttonTextf: {
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
    marginBottom: 25,
  },
});

export default LoginPage;
