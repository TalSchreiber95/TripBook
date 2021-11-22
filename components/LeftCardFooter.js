import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, CheckBox} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

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
          <View style={styles.RLbuttonsView}>
          <BouncyCheckbox
            style={styles.checkbox}
            size={25}
            fillColor="black"
            unfillColor="silver"
            // iconStyle={styles.icon}
            // textStyle={styles.checkboxText}
            text="Live"
            onPress={ToggleFeedbackLive}
          />
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
          <Text style={styles.text}>
            {toggleFeedbackLive
              ? trip.feedbacksLive[feedbackLiveIndex]
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
export default LeftCardFooter;
