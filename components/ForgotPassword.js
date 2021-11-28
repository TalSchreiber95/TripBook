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
import Header from './Header';

const ForgotPassword = ({ Users, navigation, ind }) => {
    const [email, setEmail] = useState('');
    const [answer, setAnswer] = useState('');

    const onRestorePass = () => {
        for (let index = 0; index < Users.length; index++) {
            if (Users[index].email === email) {
                if (Users[index].passRecoverAnswer === answer) {
                    ind(index)
                    // Note: here it's supposed to send the
                    //       password to the mail of the user!
                    Alert.alert("user password is: " + Users[index].pass);
                    navigation.navigate('Login');
                    return;
                } else {
                    Alert.alert('Wrong answer!');
                    return;
                }
            }
        }

        Alert.alert('User not exist');
    };

    return (
        <ScrollView >
            {/* <Header title="TripBook" name={""} /> */}
            {/* <Text style={styles.title}>TripBook</Text> */}
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
    // container: {
    //     flex: 1,
    // },
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
    text: {
        color: 'black',
        fontSize: 23,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10,
    },
});

export default ForgotPassword;
