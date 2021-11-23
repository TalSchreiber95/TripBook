import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { Form, FormItem } from 'react-native-form-component';

// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

const CenterCardFooter = ({ trip, setPicture, updateButton, gallery }) => {
  const [picIndex, setPicIndex] = useState(0);
  const [pic, setPic] = useState();

  const [toggleAddPicture, setToggleAddPicture] = useState(false);

  //   const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

  const [toggleFeedback, setToggleFeedback] = useState(gallery);
  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);
  const [toggleCheckbox, setToggleCheckbox] = useState(false);

  const ToggleFeedback = () => {
    // setToggleFeedback(!toggleFeedback);
    setToggleAddPicture(false);
    updateButton(false, false, false, !gallery);
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };

  const switchFeedbackRight = () => {
    setPicIndex((picIndex + 1) % trip.pictures.length);
    setPicture(picIndex);
  };

  const switchFeedbackLeft = () => {
    setPicIndex((picIndex - 1 + trip.pictures.length) % trip.pictures.length);
    setPicture(picIndex);
  };
  const onAddPicture = () => {
    // Note: should be improved!
    trip.pictures.push(pic);
  };

  const ToggleAddPicture = () => {
    setToggleAddPicture(!toggleAddPicture);
  };
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
      {gallery && (
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
          <Button
            title={!toggleAddPicture ? 'Add Picture +' : 'Close'}
            onPress={ToggleAddPicture}
            type="secondary"
            titleStyle={styles.titleArrowButtons}
            containerStyle={styles.addPictureButton}
          //   raised
          />
          {toggleAddPicture && (
            <Form
              onButtonPress={onAddPicture}
              buttonStyle={styles.formButton}
              buttonText="Add picture">
              <FormItem
                placeholder="Add url pic here"
                style={styles.inputView}
                label="Url pic:"
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
          )}
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
  container: {

  },
  formButton: {
    backgroundColor: 'steelblue',
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 25,
    marginTop: 0,
    borderRadius: 20,
  },
  //   formButton: {
  //     backgroundColor: 'steelblue',
  //     marginLeft: 100,
  //     marginRight: 100,
  //     marginTop: 0,
  //     borderRadius: 20,
  //     color: 'black',
  //     // height: 40,
  //   },
  inputView: {
    flex: 0.3,
    backgroundColor: 'lightblue',
    borderWidth: 0.5,
    // marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 17,
    borderRadius: 5,
    elevation: 5,
  },
  label: {
    color: 'black',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
  },
  popUp: {
    //   flex: 0.1,
    marginTop: 10,
    height: 'auto',
    width: 350,
    borderRadius: 5,
    position: 'relative',
    // top: 65,
    // left: 10,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    // backgroundColor: 'black',
  },

  addPictureButton: {
    // backgroundColor: 'black',
    color: 'white',
  },

  titleArrowButtons: {
    // color: 'black',
  },
  buttonContainer: {
    width: '120%',
    alignSelf: 'flex-end',

  },
  RLbuttons: {
    width: 40,
    height: 40,
    // margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 35,
    borderColor: 'black',
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
});
export default CenterCardFooter;
