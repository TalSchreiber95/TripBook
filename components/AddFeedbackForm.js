import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, CheckBox} from 'react-native-elements';
import {Form, FormItem} from 'react-native-form-component';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const AddFeedbackForm = ({trip, user, getPost, getLivePost}) => {
  const [feedback, setFeedback] = useState('');
  const [feedbackLive, setFeedbackLive] = useState('');

  const [toggleFeedback, setToggleFeedback] = useState(false);
  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);

  const AddPostToDB = async post => {
    await fetch(`http://10.0.2.2:8080/api/post`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => console.error(error));
      getPost(trip.trip_id);

  };

  const AddLivePostToDB = async post => {
    await fetch(`http://10.0.2.2:8080/api/livepost`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => console.error(error));
      getLivePost(trip.trip_id);
    };

  const ToggleFeedback = () => {
    setToggleFeedback(!toggleFeedback);
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };
  const onAddFeedback = () => {
    //   ? trip.feedbacksLive.push(feedbackLive)
    //   : trip.feedbacks.push(feedback);
    const newPost = {
      title: !toggleFeedbackLive ? 'post' : 'livepost',
      description: !toggleFeedbackLive ? feedback : feedbackLive,
      trip_id: trip.trip_id,
      user_id: user.user_id,
    };
    if (toggleFeedbackLive) {
      AddLivePostToDB(newPost);
      // getLivePost(trip.trip_id);
    } else {
      AddPostToDB(newPost);
      // getPost(trip.trip_id);
    }
    setToggleFeedback(false);
    setFeedback('');
    setFeedbackLive('');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Feedback +"
        onPress={ToggleFeedback}
        type="secondary"
        titleStyle={styles.mainButtonText}
        containerStyle={styles.buttonContainer}
        raised
      />
      {toggleFeedback && (
        <View style={styles.popUp}>
          <BouncyCheckbox
            style={styles.checkbox}
            size={25}
            fillColor="black"
            unfillColor="white"
            iconStyle={styles.icon}
            textStyle={styles.checkboxText}
            text="Live"
            onPress={ToggleFeedbackLive}
          />
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
              labelStyle={styles.label}
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
AddFeedbackForm.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};

const styles = StyleSheet.create({
  container: {
    //   bottom: 50,
  },

  popUp: {
    // flex: 0.1,
    // marginTop: 10,
    height: 'auto',
    width: 350,
    borderRadius: 5,
    position: 'relative',
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  mainButtonText: {
    // backgroundColor: 'black',
  },

  buttonContainer: {
    // width: '200%',
    // alignSelf: 'flex-end',
  },

  inputView: {
    flex: 0.3,
    // backgroundColor: '#F5F5F5',
    borderBottomWidth: 0.5,
    // marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    borderRadius: 5,
  },
  label: {
    color: 'black',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 10,
  },
  formButton: {
    backgroundColor: 'steelblue',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 0,
    borderRadius: 20,
    color: 'black',
    // height: 40,
  },

  checkbox: {
    // flex: 1,
    alignSelf: 'center',
    // width: 10,
    // height: 30,
    fontSize: 5,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    padding: 10,
    paddingTop: 15,
  },
  checkboxText: {
    color: 'black',
    textDecorationLine: 'none',
    left: -10,
    fontWeight: 'bold',
  },
  icon: {
    borderColor: 'grey',
  },
});
export default AddFeedbackForm;
