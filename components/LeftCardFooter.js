import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import AddFeedbackForm from './AddFeedbackForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from './Context';

// import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';

const LeftCardFooter = ({
  trip,
  updateButton,
  toggler,
  user,
}) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [feedbackLiveIndex, setFeedbackLiveIndex] = useState(0);

  const [toggleFeedbackLive, setToggleFeedbackLive] = useState(false);
  const [posts, setPosts] = useState([]);
  const [livePosts, setLivePosts] = useState([]);
  const { isGuest, isUserConnected } = useContext(AppContext);
  useEffect(() => {
    getPostsByTripID(trip.trip_id);
    getLivePostsByTripID(trip.trip_id);
  }, []);

  const getPostsByTripID = async trip_id => {
    await fetch(`http://10.0.2.2:8080/api/postsByTripID/${trip_id}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        setPosts(json);
      })
      .catch(error => console.error(error));
  };

  const getLivePostsByTripID = async trip_id => {
    await fetch(`http://10.0.2.2:8080/api/livepostsByTripID/${trip_id}`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        setLivePosts(json);
      })
      .catch(error => console.error(error));
  };

  const deletePostFromDB = async id => {
    await fetch(`http://10.0.2.2:8080/api/post/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error(error));
    getPostsByTripID(trip.trip_id);
  };

  const deleteLivePostFromDB = async id => {
    await fetch(`http://10.0.2.2:8080/api/livepost/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error(error));
    getLivePostsByTripID(trip.trip_id);
  };

  const ToggleFeedback = () => {
    toggler === 'feedback' ? updateButton('none') : updateButton('feedback');
  };
  const ToggleFeedbackLive = () => {
    setToggleFeedbackLive(!toggleFeedbackLive);
  };

  const switchFeedbackRight = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex((feedbackLiveIndex + 1) % livePosts.length)
      : setFeedbackIndex((feedbackIndex + 1) % posts.length);
  };

  const switchFeedbackLeft = () => {
    toggleFeedbackLive
      ? setFeedbackLiveIndex(
        (feedbackLiveIndex - 1 + livePosts.length) % livePosts.length)
      : setFeedbackIndex((feedbackIndex - 1 + posts.length) % posts.length);
  };
  const delFeed = () => {
    switchFeedbackLeft();
    if (!toggleFeedbackLive && posts.length > 0) {
      deletePostFromDB(posts[feedbackIndex].post_id);
    } else if (toggleFeedbackLive && livePosts.length > 0) {
      deleteLivePostFromDB(livePosts[feedbackLiveIndex].post_id);
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
              buttonStyle={styles.RLbuttons}
            />
            <Text style={styles.text}>
              {toggleFeedbackLive && livePosts.length > 0
                ? livePosts[feedbackLiveIndex].description
                : !toggleFeedbackLive && posts.length > 0
                  ? posts[feedbackIndex].description
                  : 'No feedbacks available'}
            </Text>

            <Button
              title=">"
              onPress={switchFeedbackRight}
              type="outline"
              buttonStyle={styles.RLbuttons}
            />
          </View>
          {user.admin && (
            <Icon
              name="trash-o"
              size={20}
              color="firebrick"
              onPress={() => onDelFeed()}
              style={styles.deleteFeedbackIcon}
            />
          )}
          {(!isGuest || isUserConnected) &&
            <AddFeedbackForm
              trip={trip}
              user={user}
              getPost={getPostsByTripID}
              getLivePost={getLivePostsByTripID}
            />
          }
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
    flex: 1,
  },

  popUp: {
    marginTop: 10,
    height: 'auto',
    width: 350,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: 100,
  },
  RLbuttons: {
    width: 40,
    height: 40,
    borderRadius: 35,
    borderColor: '#24a0ed',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
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
