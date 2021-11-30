import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet, Alert} from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CardHeader = ({
  trip,
  updateButton,
  toggler,
  user,
  onAddTrip,
  onDelete,
  onEdit,
  onSendMessage,
  toggleApproveCard,
}) => {
  return (
    <LinearGradient
      colors={['silver', 'steelblue']}
      start={{x: 1, y: 3.5}}
      end={{x: 0, y: 0.5}}>
      <View style={styles.iconHeader}>
        <Icon1
          name="infocirlceo"
          size={20}
          color="white"
          onPress={() => Alert.alert("Trip's Owner: " + trip.owner)}
          onLongPress={() => Alert.alert('info', {cancelable: false})}
          style={styles.icon}
        />
        {(user.admin || user.email == trip.owner) && (
          <Icon
            name="edit"
            size={20}
            color="white"
            onPress={() => onEdit()}
            style={styles.icon}
          />
        )}
        {(user.admin || user.email == trip.owner) && (
          <Icon1
            name="message1"
            size={20}
            color="white"
            onPress={() => Alert.alert(trip.adminMessage)}
            style={styles.icon}
          />
        )}
        {user.admin && (
          <Icon
            name="send"
            size={20}
            color="white"
            onPress={() => onSendMessage()}
            style={styles.icon}
          />
        )}
        {(user.admin || user.email == trip.owner) && (
          <Icon
            name="trash-o"
            size={20}
            color="white"
            onPress={() => onDelete()}
            style={styles.icon}
          />
        )}
        {user.admin && toggleApproveCard && (
          <Icon
            name="check"
            size={20}
            color="white"
            onPress={() => onAddTrip()}
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
  toggleApproveCard: false,
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
  iconHeader: {
    // flex: 2,
    // borderRadius: 15,

    justifyContent: 'center',
    flexDirection: 'row',
    // alignItems:"center",
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
});
export default CardHeader;
