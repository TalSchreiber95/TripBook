import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
} from 'react-native';

import {Form, FormItem} from 'react-native-form-component';
import Header from './Header';
import {Button, CheckBox} from 'react-native-elements';

const LoginPage = ({
  setIsUserConnected,
  authenticateUser,
  navigation,
}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
      if (await authenticateUser({email: email, password: password})) {
        // console.log(email, password, 'xxxx');
        setIsUserConnected(true);
        navigation.navigate('Home');
      } else {
        Alert.alert('wrong password or email');
      }

      // if (Users[index].email === email) {
      //   if (Users[index].pass === password) {
      //     ind(index);
      //     setIsUserConnected(true);
      //     navigation.navigate('Home');
      //     // console.log(Users);

      //     return;
      //   } else {
      //     Alert.alert('wrong password');
      //     return;
      //   }
      // }
    

    // Alert.alert('user not exist');
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header title="TripBook" connected={false} navigation={navigation} />
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
        <Button
          title="Forgot your password ? Press here!"
          type="inline"
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => navigation.navigate('ForgotPassword')}></Button>
        <Button
          title="Dont have an account? Sign up"
          type="clear"
          onPress={() => navigation.navigate('Register')}></Button>
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
  scrollView: {},
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'grey',
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 30,
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
    marginBottom: 40,
  },
});

export default LoginPage;
