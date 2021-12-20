import {View, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, CheckBox} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AddFeedbackForm from './AddFeedbackForm';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

const LeftCardFooter = ({
  trip,
  updateButton,
  toggler,
  deleteFeedback,
  deleteFeedbackLive,
  onApprove,
  user,
}) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);
  const [posts, setPosts] = useState([]);
  const [livePosts, setLivePosts] = useState([]);

  useEffect(() => {
    getPostsByTripID(trip.id)
  }, []);

  const getPostsByTripID = async trip_id => {
    // var flag = false;
    await fetch(`http://10.0.2.2:8080/api/postsByTripID/${trip_id}`)
      .then(res => {
        // res.ok && (flag = true);
        return res.json();
      })
      .then(
        json => {
          // if (flag) {
          console.log(json);
          // const newJson = json;
          setPosts(json);
          // console.log(activeUser);
        },
        // }
      )
      .catch(error => console.error(error));
    console.log(posts);
  };

  

  const ToggleFeedback = () => {
    toggler === 'feedback' ? updateButton('none') : updateButton('feedback');
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };

  const switchFeedbackRight = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex + 1) % trip.feedbacksLive.length,
        )
      : setFeedbackIndex((feedbackIndex + 1) % posts.length);
  };

  const switchFeedbackLeft = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
          (feedbackLiveIndex - 1 + trip.feedbacksLive.length) %
            trip.feedbacksLive.length,
        )
      : setFeedbackIndex(
          (feedbackIndex - 1 + posts.length) % posts.length,
        );
  };
  const delFeed = () => {
    switchFeedbackLeft();
    if (!toggleFeedbackLive) {
      deleteFeedback(trip.id, feedbackIndex, onApprove);
    } else {
      deleteFeedbackLive(trip.id, feedbackLiveIndex, onApprove);
    }
  };
  const onDelFeed = () => {
    return Alert.alert(
      "Delting trip's feedback card !",
      "Are you sure you want to delete this trip's feedback card?",
      [
        {
          text: 'Yes',
          onPress: () => {
            delFeed();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title={
          toggler === 'feedback'
            ? (!toggleFeedbackLive ? 'Regular' : 'Live') + ' Feedbacks'
            : 'Feedbacks'
        }
        onPress={ToggleFeedback}
        type="secondary"
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
        raised
      />
      {toggler === 'feedback' && (
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

          <View style={styles.RLbuttonsView}>
            <Button
              title="<"
              onPress={switchFeedbackLeft}
              type="outline"
              titleStyle={styles.titleArrowButtons}
              // containerStyle={styles.buttonContainer}
              buttonStyle={styles.RLbuttons}
            />
            <Text style={styles.text}>
              {toggleFeedbackLive && trip.feedbacksLive.length > 0
                ? trip.feedbacksLive[feedbackLiveIndex]
                : !toggleFeedbackLive && posts.length > 0
                ? posts[feedbackIndex].description
                : 'No feedbacks available'}
            </Text>

            <Button
              title=">"
              onPress={switchFeedbackRight}
              type="outline"
              titleStyle={styles.titleArrowButtons}
              //   containerStyle={styles.buttonRight}
              buttonStyle={styles.RLbuttons}
            />
          </View>
          {user.admin && (
            <Icon
              name="trash-o"
              size={20}
              color="firebrick"
              onPress={() => onDelFeed()}
              // onLongPress={() => toggleInfo('Remove trip picture')}
              style={styles.deleteFeedbackIcon}
            />
          )}
          <AddFeedbackForm trip={trip} />
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
  container: {
    // position: 'absolute',
    // height: 50,
    // bottom: 20,
    flex: 1,
    // alignItems: 'flex-start'
  },

  popUp: {
    // flex: 0.1,
    marginTop: 10,
    height: 'auto',
    width: 350,
    borderRadius: 5,
    // position: 'relative',
    // top: 65,
    // left: 10,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonTitle: {
    // backgroundColor: 'black',
    // color:'black',
  },

  titleArrowButtons: {
    // color: 'black',
  },
  buttonContainer: {
    width: 100,
    // alignSelf: 'flex-start',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    // position: 'absolute',
  },
  RLbuttons: {
    width: 40,
    height: 40,
    // margin: 10,
    // marginLeft: 20,
    // marginRight: 20,
    borderRadius: 35,
    borderColor: '#24a0ed',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'black'
  },

  RLbuttonsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 1,
    margin: 15,
    marginTop: 4,
    textAlign: 'center',
    // justifyContent: 'center',
    width: '60%',
  },

  checkbox: {
    // flex: 1,
    alignSelf: 'center',
    fontSize: 5,
    textAlign: 'center',
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
    // backgroundColor: 'silver',
  },
  deleteFeedbackIcon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default LeftCardFooter;
