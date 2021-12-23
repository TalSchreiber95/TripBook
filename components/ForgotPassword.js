import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, Alert} from 'react-native';

import {Form, FormItem} from 'react-native-form-component';
import Header from './Header';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');

  const recoverPassword = async user => {
    var flag = false;
    await fetch(`http://10.0.2.2:8080/api/recoverUser/`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    })
      .then(res => {
        res.ok && (flag = true);
        return res.json();
      })
      .then(json => {
        if (flag) {
          Alert.alert(`Your password is: ${json.password}`);
        } else {
          Alert.alert(`Wrong answer!`);
        }
      })
      .catch(error => console.error(error));
  };

  const onRestorePass = async () => {
    await recoverPassword({email: email, passRecoverAnswer: answer});
    navigation.navigate('LoginPage');

    //     for (let index = 0; index < Users.length; index++) {
    //         if (Users[index].email === email) {
    //             if (Users[index].passRecoverAnswer === answer) {
    //                 ind(index)
    //                 // Note: here it's supposed to send the
    //                 //       password to the mail of the user!
    //                 Alert.alert("user password is: " + Users[index].pass);
    //                 return;
    //             } else {
    //                 Alert.alert('Wrong answer!');
    //                 return;
    //             }
    //         }
    //     }

    //     Alert.alert('User not exist');
  };

  return (
    <ScrollView>
      <Header connected={false} />
      <Form
        onButtonPress={onRestorePass}
        buttonStyle={styles.formButton}
        buttonText="Press to get your password!">
        <Text style={styles.text}>Restore your password: </Text>
        <FormItem
          style={styles.inputView}
          label="Email"
          labelStyle={styles.label}
          value={email}
          placeholder="Add email to recover here"
          onChangeText={email => {
            setEmail(email);
          }}
          isRequired
          asterik
        />
        <Text style={styles.text}>Security Question:</Text>
        <FormItem
          style={styles.inputView}
          label="What the name of your mother?"
          labelStyle={styles.label}
          value={answer}
          placeholder="Add your answer here"
          onChangeText={answer => {
            setAnswer(answer);
          }}
          isRequired
          asterik
        />
      </Form>
    </ScrollView>
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
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ForgotPassword;
