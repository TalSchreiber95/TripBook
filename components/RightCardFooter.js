import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, CheckBox} from 'react-native-elements';
// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {Form, FormItem} from 'react-native-form-component';

const LeftCardFooter = ({trip}) => {
  const [feedback, setFeedback] = useState('');
  const [feedbackLive, setFeedbackLive] = useState('');

  const [toggleFeedback, setToggleFeedback] = useState(false);
  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);
  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  const ToggleFeedback = () => {
    setToggleFeedback(!toggleFeedback);
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };
  const onAddFeedback = () => {
    toggleFeedbackLive
      ? trip.feedbacksLive.push(feedbackLive)
      : trip.feedbacks.push(feedback);
  };

  return (
    <View style={styles.container}>
      <Button
        title={'Add Feedback'}
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
          <Form
            onButtonPress={onAddFeedback}
            buttonStyle={styles.formButton}
            buttonText="Submit">
            <FormItem
              placeholder={
                !toggleFeedbackLive
                  ? 'Add feedback here'
                  : 'Add live feedback here'
              }
              style={styles.inputView}
              label={
                !toggleFeedbackLive ? 'Regular Feedback:' : 'Live Feedback:'
              }
              labelStyle={styles.feedback}
              multiline={true}
              value={!toggleFeedbackLive ? feedback : feedbackLive}
              onChangeText={fb => {
                {
                  !toggleFeedbackLive ? setFeedback(fb) : setFeedbackLive(fb);
                }
              }}
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
    alignSelf: 'flex-end',
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
  feedback: {
    color: 'black',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 20,
  },
  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
    borderRadius: 20,
    color: 'black',
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
