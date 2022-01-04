import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  ActivityIndicator,
  View,
  Vibration
} from 'react-native';

import { Form, FormItem } from 'react-native-form-component';
import Header from './Header';
import { Button } from 'react-native-elements';
import { AppContext } from './Context';
import PushNotification from "react-native-push-notification";


const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { setUser, setIsUserConnected, setIsGuest } = useContext(AppContext);

  useEffect(() => {
    createChannels();
  }, [])


  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: "test-channel",
        channelName: "Test Channel"
      }
    )
  }

  const handleNotification = () => {

    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: "test-channel",
      title: "Wellcome dear traveler",
      message: "You are logged in as " + email,
    });
  }

  const fetchAuthentication = async user => {
    setLoading(true);
    var flag = false;
    await fetch(`http://10.0.2.2:8080/api/authUser/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => {
        res.ok && (flag = true);
        return res.json();
      })
      .then(json => {
        if (flag) {
          console.log(json);
          setUser(json);
          return json;
        }
      })
      .catch(error => console.error(error));
    setLoading(false);
    return flag;
  };

  const onLogin = async () => {
    if (await fetchAuthentication({ email: email, password: password })) {
      setIsUserConnected(true);
      setIsGuest(false);
      handleNotification();
      navigation.navigate('Home');
    } else {
      Vibration.vibrate();
      Alert.alert('wrong password or email');
    }
  };
  const onGuest = () => {
    Vibration.vibrate();
    Alert.alert(
      "Are you sure you want to enter as a guest?",
      "Logging in as a guest may affect certain permissions on some of the system such as:\n 1. Posting a trip.\n 2. Posting feedback.\n 3. Add photos for existing trips.\n 4. Viewing my trips.\n 5. other future features .. ",
      [
        {
          text: 'Yes',
          onPress: () => {
            setIsGuest(true);
            navigation.navigate('Home');
          },
        },
        {
          text: 'No',
        },
      ],
    );
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {loading && <ActivityIndicator size={120} />}
        {!loading && <View>
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
          <Button
            title="Click here to enter as a guest"
            type="clear"
            onPress={() => onGuest()}></Button>
        </View>}
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
