import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, CheckBox} from 'react-native-elements';
// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {Form, FormItem} from 'react-native-form-component';


const LeftCardFooter = ({trip, getFeedback}) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

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
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex + 1) % trip.feedbacksLive.length,
        )
      : setFeedbackIndex((feedbackIndex + 1) % trip.feedbacks.length);
  };

  const switchFeedbackLeft = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex - 1 + trip.feedbacksLive.length) %
            trip.feedbacksLive.length,
        )
      : setFeedbackIndex(
          (feedbackIndex - 1 + trip.feedbacks.length) % trip.feedbacks.length,
        );
  };

  return (
    <View style={styles.container}>
      <Button
        title={
          toggleFeedback
            ? (!toggleFeedbackLive ? 'Add Regular' : 'Add Live') + ' Feedback'
            : 'Add Feedback'
        }
        onPress={ToggleFeedback}
        type="secondary"
        titleStyle={styles.button}
        containerStyle={styles.buttonContainer}
        raised
      />
      {toggleFeedback && (
        <View style={styles.popUp}>
          <View style={styles.RLbuttonsView}>
            <CheckBox
              title="Live"
              checked={toggleCheckbox}
              iconType="material"
              checkedIcon="close"
              uncheckedIcon="add"
              onPress={ToggleFeedbackLive}
              style={styles.checkbox}
              containerStyle={styles.checkbox}
            />
          </View>
          <Form>
            <FormItem
              placeholder="Enter Your Feedback Here"
              style={styles.inputView}
              label="Feedback:"
              labelStyle={styles.label}
              isRequired
            //   value={email}
            //   onChangeText={email => {
            //     setEmail(email);
            //   }}
              asterik
            />
          </Form>
        </View>
      )}
    </View>
  );
};
LeftCardFooter.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};

const styles = StyleSheet.create({
  container: {},

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
  },
  //   RLbuttons: {
  //     width: 40,
  //     height: 40,
  //     // margin: 10,
  //     marginLeft: 20,
  //     marginRight: 20,
  //     borderRadius: 35,
  //     borderColor: 'white',
  //     borderWidth: 0.8,
  //   },

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
    borderColor: 'transparent',
  },
});
export default LeftCardFooter;
