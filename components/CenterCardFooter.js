import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import {Form, FormItem} from 'react-native-form-component';

// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

const CenterCardFooter = ({ trip, setPicture }) => {
    const [picIndex, setPicIndex] = useState(0);
    const [pic, setPic] = useState();

    //   const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

    const [toggleFeedback, setToggleFeedback] = useState(false);
    const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);
    const [toggleCheckbox, setToggleCheckbox] = useState(false);

    const ToggleFeedback = () => {
        setToggleFeedback(!toggleFeedback);
    };
    const ToggleFeedbackLive = () => {
        setToggleFeedbackLive(!toggleFeedbackLive);
    };

    const switchFeedbackRight = () => {
        setPicIndex((picIndex + 1) % trip.pictures.length);
        setPicture(picIndex)
    };

    const switchFeedbackLeft = () => {
        setPicIndex((picIndex - 1 + trip.pictures.length) % trip.pictures.length);
        setPicture(picIndex)

    };
    const onAddPicture=()=>{ // Note: should be improved!
        trip.pictures.push(pic)
    }
    return (
        <View style={styles.container}>
            <Button
                title={'Gallery'}
                onPress={ToggleFeedback}
                type="secondary"
                titleStyle={styles.button}
                containerStyle={styles.buttonContainer}
                raised
            />
            {toggleFeedback && (
                <View style={styles.popUp}>
                    <View style={styles.RLbuttonsView}>
                        <Button
                            title="<"
                            onPress={switchFeedbackLeft}
                            type="outline"
                            titleStyle={styles.titleArrowButtons}
                            // containerStyle={styles.buttonContainer}
                            buttonStyle={styles.RLbuttons}
                        />
                        <Button
                            title=">"
                            onPress={switchFeedbackRight}
                            type="outline"
                            titleStyle={styles.titleArrowButtons}
                            //   containerStyle={styles.buttonRight}
                            buttonStyle={styles.RLbuttons}
                        />
                    </View>
                    <Form
                        onButtonPress={onAddPicture}
                        buttonStyle={styles.formButton}
                        buttonText="Add picture">
                        <FormItem
                            placeholder="Add url pic here"
                            style={styles.description}
                            label="url pic:"
                            labelStyle={styles.label}
                            multiline={true}
                            value={pic}
                            onChangeText={pic => {
                                setPic(pic);
                            }}
                            isRequired
                            asterik
                        />
                    </Form>
                </View>
            )}
        </View>
    );
};
CenterCardFooter.defaultProps = {
    title: 'TripBook',
    name: {
        firstName: '',
        lastName: '',
    },
};

const styles = StyleSheet.create({
    formButton: {
        backgroundColor: '#007AFF',
        marginLeft: 100,
        marginRight: 100,
        borderRadius: 20,
        marginBottom: 25,
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
      label: {
        color: 'black',
        paddingLeft: 30,
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 2,
        paddingBottom: 2,
      },
    popUp: {
        //   flex: 0.1,
        marginTop: 10,
        height: 'auto',
        width: 300,
        borderRadius: 5,
        position: 'relative',
        // top: 65,
        // left: 10,
        elevation: 2,
        justifyContent: 'center',
        // backgroundColor: '#000000c0',
    },
    button: {
        // backgroundColor: 'black',
    },

    titleArrowButtons: {
        color: 'white',
    },
    buttonContainer: {
        width: '120%',
        alignSelf: 'center',
    },
    RLbuttons: {
        width: 40,
        height: 40,
        // margin: 10,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 35,
        borderColor: 'white',
        borderWidth: 0.8,
    },

    RLbuttonsView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },

    text: {
        color: 'white',
        fontSize: 18,
        letterSpacing: 2,
        margin: 15,
        marginTop: -3,
        textAlign: 'center',
    },

    checkbox: {
        flex: 0.8,
        alignSelf: 'center',
        // width: 70,
        // height: 30,
        fontSize: 5,
        textAlign: 'center',
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },
});
export default CenterCardFooter;
