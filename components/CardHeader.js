import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet, Alert} from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import {Button, Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Snackbar} from 'react-native-paper';
import {useState} from 'react';
import {Form, FormItem} from 'react-native-form-component';
import PopUpMessageForm from './PopUpMessageForm';
import PopUpEditTrip from './PopUpEditTrip';
import {color} from 'react-native-reanimated';

const CardHeader = ({
  trip,
  updateButton,
  toggler,
  user,
  onApproveTrip,
  onDelete,
  onSendMessage,
  onApprove,
  editCard,
}) => {
  const [toggleDescription, setToggleDescription] = useState(false);
  const [description, setDescription] = useState('');

  const toggleInfo = iconPressed => {
    setToggleDescription(true);
    setDescription(iconPressed);
  };

  const showCardInfo = () => {
    const owner = 'Trip Owner: ' + user.user_id;
    let cate = 'Categories: ';
    trip.category.filter(category => category === 'isRelax')[0] !== undefined &&
      (cate += 'Relax, ');
    trip.category.filter(category => category === 'isDynamic')[0] !==
      undefined && (cate += 'Dynamic, ');
    trip.category.filter(category => category === 'isParty')[0] !== undefined &&
      (cate += 'Party, ');
    trip.category.filter(category => category === 'isPetAllowed')[0] !==
      undefined && (cate += 'PetAllowed, ');
    trip.category.filter(category => category === 'isCarTravel')[0] !==
      undefined && (cate += 'CarTravel, ');
    trip.category.filter(category => category === 'isPlaneTravel')[0] !==
      undefined && (cate += 'PlaneTravel, ');
    trip.category.filter(category => category === 'isTrainTravel')[0] !==
      undefined && (cate += 'TrainTravel ');
    Alert.alert(cate, owner);
  };

  return (
    <LinearGradient
      colors={['white', 'steelblue']}
      start={{x: 1, y: 4}}
      end={{x: 0, y: 2}}>
      <View style={styles.iconHeader}>
        <Snackbar
          style={styles.snackbar}
          wrapperStyle={styles.snackbar}
          visible={toggleDescription}
          onDismiss={() => setToggleDescription(false)}
          duration={1000}>
          {description}
        </Snackbar>
        <Icon1
          name="infocirlceo"
          size={20}
          color="white"
          onPress={() => showCardInfo()}
          // Alert.alert("Trip's Owner: " + trip.owner)}
          onLongPress={() => toggleInfo('Trip Categories')}
          style={styles.icon}
        />

        {(user.admin || user.user_id == trip.user_id) && (
          <PopUpEditTrip
            user={user}
            trip={trip}
            toggleInfo={toggleInfo}
            editCard={editCard}
            onApprove={onApprove}
          />
        )}

        {user.admin && (
          <PopUpMessageForm
            user={user}
            trip={trip}
            toggleInfo={toggleInfo}
            onSendMessage={onSendMessage}
            onApprove={onApprove}
          />
        )}

        {(user.admin || user.user_id == trip.user_id) && (
          <Icon1
            name="message1"
            size={20}
            color="white"
            onPress={() => Alert.alert(trip.adminMessage)}
            onLongPress={() => toggleInfo('Check for admin messages')}
            style={styles.icon}
          />
        )}

        {(user.admin || user.user_id == trip.user_id) && (
          <Icon
            name="trash-o"
            size={20}
            color="white"
            onPress={() => onDelete()}
            onLongPress={() => toggleInfo('Remove trip')}
            style={styles.icon}
          />
        )}
        {user.admin && onApprove && (
          <Icon
            name="check"
            size={20}
            color="white"
            onPress={() => onApproveTrip()}
            onLongPress={() => toggleInfo('Approve Trip')}
            style={styles.icon}
          />
        )}
      </View>

      <View style={styles.textView}>
        <Text style={styles.text}>{trip.tripName}</Text>
      </View>

      <View style={styles.cardHeader}>
        <LeftCardHeader
          trip={trip}
          toggler={toggler}
          updateButton={updateButton}
        />
        {/* {onGroup &&
          <Button
            title={toggleOnJoin ? "Cancel join" : "Join Group"}
            onPress={() => setJoinGroup()}
            type="secondary"
            titleStyle={styles.button}
            containerStyle={styles.buttonContainer}
            raised
          />
        } */}
        <RightCardHeader
          trip={trip}
          toggler={toggler}
          updateButton={updateButton}
        />
      </View>
    </LinearGradient>
  );
};
CardHeader.defaultProps = {
  // toggleApproveCard: false,
  onApprove: false,
  onGroup: false,
};
const styles = StyleSheet.create({
  cardHeader: {
    // height: 85,
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    // backgroundColor: '#001f7f',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginTop: 0,
  },
  button: {
    // backgroundColor: 'green',
    fontSize: 15,
    // color:'White'
  },
  buttonContainer: {
    // backgroundColor: 'black',
    // color:'black',
    width: 91,
  },
  iconHeader: {
    // flex: 2,
    // borderRadius: 15,

    justifyContent: 'center',
    flexDirection: 'row',
    // alignItems:"center",
  },
  formButton: {
    backgroundColor: 'firebrick',
    marginLeft: 160,
    marginRight: 160,
    marginTop: -10,
    marginBottom: -10,
    // borderRadius: 20,
    color: 'black',
  },
  inputView: {
    flex: 0.3,
    // backgroundColor: '#F5F5F5',
    // borderBottomWidth: 0.5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    // fontSize: 20,
    borderRadius: 5,
  },
  label: {
    color: 'black',
    paddingLeft: 30,
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 30,
    paddingBottom: 0,
  },
  textView: {
    flex: 0.5,
    textAlign: 'center',
    marginTop: 20,
    // marginBottom: 0,
  },
  text: {
    color: 'silver',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    // letterSpacing: 2,
    top: -15,
  },
  name: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  icon: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  snackbar: {
    width: '60%',
    // textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // height: '80%',
  },
});
export default CardHeader;
