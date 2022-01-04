import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Form, FormItem } from 'react-native-form-component';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Header from './Header';

const AddGroupTrip = ({ addWaitingGroupTrip, user, navigation }) => {
    const [tripName, setTripName] = useState('');
    const [location, setLocation] = useState('');
    const [feedback, setFeedback] = useState('');
    const [feedbackLive, setFeedbackLive] = useState('');
    const [price, setPrice] = useState(0);
    const [memberLimit, setMemberLimit] = useState(1);

    const [description, setDescription] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [picture, setPicture] = useState('');

    //categories
    const [categories, setCategories] = useState({
        isRelax: false,
        isDynamic: false,
        isParty: false,
        isPetAllowed: false,
        isCarTravel: false,
        isPlaneTravel: false,
        isTrainTravel: false,
    });

    const onAddGroupTrip = () => {
        if (
            tripName != '' &&
            location != '' &&
            description != '' &&
            price != null &&
            memberLimit != null
        ) {
            setPicture([picture]);
            setFeedback([feedback]);
            setFeedbackLive([feedbackLive]);
            let actualCategory = [];
            Object.keys(categories).forEach(key => {
                if (categories[key] === true)
                    actualCategory.push(String(key))
            })

            const newTrip = {
                user_id: user.email,
                isWaiting: true,
                adminMessage: 'No new admin messages',
                tripName: tripName,
                category: actualCategory,
                pictures: picture,
                location: location,
                description: description,
                feedbacks: feedback,
                feedbacksLive: feedbackLive,
                price: price,
            };

            addWaitingGroupTrip(newTrip);
            Alert.alert('group trip posted succesfully');

            navigation.navigate('Home');
        } else {
            Alert.alert('Fill all the required fields !');
        }
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Header title="Add Group Trip" user={user} navigation={navigation} />
                    <Text style={styles.text}>Fill the details below:</Text>
                    <Form
                        onButtonPress={onAddGroupTrip}
                        buttonStyle={styles.formButton}
                        buttonText="Post Group Trip">
                        <FormItem
                            placeholder="Add Group trip name here"
                            style={styles.inputView}
                            label="Trip Name"
                            labelStyle={styles.label}
                            value={tripName}
                            onChangeText={name => {
                                setTripName(name);
                            }}
                            isRequired
                            asterik
                        />
                        <FormItem
                            placeholder="Add location here"
                            style={styles.inputView}
                            label="Trip Location"
                            labelStyle={styles.label}
                            value={location}
                            onChangeText={location => {
                                setLocation(location);
                            }}
                            isRequired
                            asterik
                        />
                        <FormItem
                            placeholder="Add description here"
                            style={styles.inputView}
                            label="Describe the trip:"
                            labelStyle={styles.label}
                            multiline={true}
                            value={description}
                            onChangeText={description => {
                                setDescription(description);
                            }}
                            isRequired
                            asterik
                        />
                        <FormItem
                            placeholder="Add group description here"
                            style={styles.inputView}
                            label="Describe the Group trip:"
                            labelStyle={styles.label}
                            multiline={true}
                            value={groupDescription}
                            onChangeText={gDescription => {
                                setGroupDescription(gDescription);
                            }}
                            isRequired
                            asterik
                        />
                        <FormItem
                            placeholder="Add url pic here"
                            style={styles.inputView}
                            label="url pic:"
                            labelStyle={styles.label}
                            multiline={true}
                            value={picture}
                            onChangeText={pic => {
                                setPicture(pic);
                            }}
                        />
                        <Text style={styles.showTextMoney}>
                            Maximum price per member the group trip cost:
                        </Text>
                        <Slider
                            style={styles.slider}
                            step={1}
                            minimumValue={0}
                            maximumValue={10000}
                            value={price}
                            onValueChange={slideValue => setPrice(parseInt(slideValue))}
                            minimumTrackTintColor="#0074D9"
                            maximumTrackTintColor="grey"
                            thumbTintColor="#0074D9"
                        />
                        <View style={styles.inputNumberView}>
                            <TextInput
                                keyboardType="number-pad"
                                numeric
                                style={styles.inputNumber}
                                placeholder="Enter Price"
                                underlineColorAndroid="transparent"
                                onChangeText={newSliderValue => {
                                    !isNaN(parseInt(newSliderValue))
                                        ? setPrice(parseInt(newSliderValue))
                                        : setPrice(parseInt(0));
                                }}
                                value={price}
                                maxLength={6}
                            />
                            <Text style={styles.showMoney}>{price} ILS</Text>
                        </View>
                        <Text style={styles.showTextMoney}>
                            Group trip member limit(min:1,max:99):
                        </Text>
                        <Slider
                            style={styles.slider}
                            step={1}
                            minimumValue={1}
                            maximumValue={99}
                            value={memberLimit}
                            onValueChange={slideValue => setMemberLimit(parseInt(slideValue))}
                            minimumTrackTintColor="#0074D9"
                            maximumTrackTintColor="grey"
                            thumbTintColor="#0074D9"
                        />
                        <View style={styles.inputNumberView}>
                            <TextInput
                                keyboardType="number-pad"
                                numeric
                                style={styles.inputNumber}
                                placeholder="Enter member limit"
                                underlineColorAndroid="transparent"
                                onChangeText={newSliderValue => {
                                    !isNaN(parseInt(newSliderValue))
                                        ? setMemberLimit(parseInt(newSliderValue))
                                        : setMemberLimit(parseInt(0));
                                }}
                                value={memberLimit}
                                maxLength={2}
                            />
                            <Text style={styles.showMoney}>{memberLimit} ILS</Text>
                        </View>
                        <View style={styles.checkboxesView}>
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Relax"
                                onPress={() =>
                                    setCategories({
                                        isRelax: !categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Dynamic"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: !categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Party"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: !categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Pet"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: !categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Car travel"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: !categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                                setIsPlaneTravel
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Plane travel"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: !categories.isPlaneTravel,
                                        isTrainTravel: categories.isTrainTravel,
                                    })
                                }
                            />
                            <BouncyCheckbox
                                style={styles.checkbox}
                                size={25}
                                fillColor="black"
                                unfillColor="silver"
                                iconStyle={styles.icon}
                                textStyle={styles.checkboxText}
                                text="Train travel"
                                onPress={() =>
                                    setCategories({
                                        isRelax: categories.isRelax,
                                        isDynamic: categories.isDynamic,
                                        isParty: categories.isParty,
                                        isPetAllowed: categories.isPetAllowed,
                                        isCarTravel: categories.isCarTravel,
                                        isPlaneTravel: categories.isPlaneTravel,
                                        isTrainTravel: !categories.isTrainTravel,
                                    })
                                }
                            />
                        </View>
                        <FormItem
                            placeholder="Add feedback here"
                            style={styles.inputView}
                            label="Feedback:"
                            labelStyle={styles.feedback}
                            multiline={true}
                            value={feedback}
                            onChangeText={feedback => {
                                setFeedback(feedback);
                            }}
                        />
                        <FormItem
                            placeholder="Add live feedback here"
                            style={styles.inputView}
                            label="Feedback Live:"
                            labelStyle={styles.label}
                            multiline={true}
                            value={feedbackLive}
                            onChangeText={feedbackLive => {
                                setFeedbackLive(feedbackLive);
                            }}
                        />
                    </Form>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 23,
        marginLeft: 20,
        marginBottom: 20,
    },
    label: {
        color: 'black',
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 2,
        paddingBottom: 2,
    },
    inputView: {
        flex: 0.3,
        backgroundColor: '#F5F5F5',
        borderBottomWidth: 0.5,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        borderRadius: 5,
    },
    showTextMoney: {
        color: 'black',
        margin: 10,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 17,
    },
    showMoney: {
        textAlign: 'center',
        marginBottom: 20,
    },
    showTextMoney: {
        color: 'black',
        margin: 10,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 17,
    },
    showMoney: {
        flex: 3,
        alignSelf: 'center',
    },
    slider: {
        margin: 10,
        marginLeft: 25,
        marginRight: 25,
    },
    inputNumber: {
        flex: 2,
    },
    inputNumberView: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    formButton: {
        backgroundColor: 'firebrick',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 10,
        borderRadius: 20,
        color: 'black',
    },
    checkbox: {
        color: 'white',
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 10,
    },
    checkboxText: {
        fontFamily: 'JosefinSans-Regular',
        textDecorationLine: 'none',
        fontSize: 20,
    },
    icon: {
        borderColor: 'black',
    },
    feedback: {
        color: 'black',
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 20,
    },
    description: {
        flex: 0.3,
        backgroundColor: 'lightblue',
        borderWidth: 0.5,
        marginBottom: 30,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 15,
        borderRadius: 10,
    },
    checkboxesView: {
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
    },
});

export default AddGroupTrip;
