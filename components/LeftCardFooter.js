import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';

const LeftCardFooter = ({trip, getFeedback}) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

  const [toggleFeedback, setToggleFeedback] = useState(false);
  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);

  const ToggleFeedback = () => {
    setToggleFeedback(!toggleFeedback);
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };

  const switchFeedbackRight = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex + 1) % trip.feedbacksLive.length
        ) 
      : setFeedbackIndex((feedbackIndex + 1) % trip.feedbacks.length);
  };

  const switchFeedbackLeft = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex - 1 + trip.feedbacksLive.length) %
            trip.feedbacksLive.length
        )
      : setFeedbackIndex(
          (feedbackIndex - 1 + trip.feedbacks.length) % trip.feedbacks.length
        );
  };

  return (
    <View style={styles.container}>
      <Button
        title={
          toggleFeedback
            ? (!toggleFeedbackLive ? 'Regular' : 'Live') + ' Feedbacks'
            : 'Feedbacks'
        }
        onPress={ToggleFeedback}
        type="secondary"
        titleStyle={styles.button}
        containerStyle={styles.buttonContainer}
        raised
      />
      {toggleFeedback && (
        <View style={styles.popUp}>
          <View style={styles.buttonsView}>
            <CheckBox
              title="Live"
              onPress={ToggleFeedbackLive}
              // type="secondary"
              // titleStyle={styles.button}
              // containerStyle={styles.buttonContainer}
              // raised
            />
            <Button
              title="<"
              onPress={switchFeedbackLeft}
              type="secondary"
              titleStyle={styles.button}
              containerStyle={styles.buttonLeft}
              raised
            />
            <Button
              title=">"
              onPress={switchFeedbackRight}
              type="secondary"
              titleStyle={styles.button}
              containerStyle={styles.buttonRight}
              raised
            />
          </View>
          <Text style={styles.text}>
            {toggleFeedbackLive
              ? trip.feedbacksLive[feedbackIndex]
              : trip.feedbacks[feedbackIndex]}
          </Text>
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
    // marginBottom: 20,
    height: 'auto',
    width: '500%',
    borderRadius: 5,
    position: 'relative',
    // top: 65,
    // left: 10,
    elevation: 2,
    // backgroundColor: '#000000c0',
    justifyContent: 'center',

    // position: 'absolute',
  },
  button: {
    // backgroundColor: 'black',
  },
  buttonContainer: {
    backgroundColor: 'black',
    width: 83,
  },
  buttonLeft: {
    width: 20,
  },
  buttonRight: {
    width: 20,
  },

  text: {
    // flex: 0.1,
    color: 'white',
    fontSize: 18,
    letterSpacing: 2,
    // position: 'relative',
    marginTop: -3,
    textAlign: 'center',
  },
});
export default LeftCardFooter;
