import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Snackbar} from 'react-native-paper';
import {useState} from 'react';
import {Form, FormItem} from 'react-native-form-component';

const CardHeader = ({
  trip,
  updateButton,
  toggler,
  user,
  onAddTrip,
  onDelete,
  onEdit,
  onSendMessage,
  onApprove,
}) => {
  const [toggleDescription, setToggleDescription] = useState(false);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [toggleAddMessage, setToggleAddMessage] = useState(false);

  const toggleInfo = iconPressed => {
    setToggleDescription(true);
    setDescription(iconPressed);
  };
  const sendMessage = () => {
    onSendMessage(trip, message);
    Alert.alert('Message sent successfully!');
    setMessage('');
    setToggleAddMessage(!toggleAddMessage);
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
          onPress={() => Alert.alert("Trip's Owner: " + trip.owner)}
          onLongPress={() => toggleInfo('Trip Owner')}
          style={styles.icon}
        />
        {(user.admin || user.email == trip.owner) && (
          <Icon
            name="edit"
            size={20}
            color="white"
            onPress={() => onEdit()}
            onLongPress={() => toggleInfo('Edit card')}
            style={styles.icon}
          />
        )}
        {(user.admin || user.email == trip.owner) && (
          <Icon1
            name="message1"
            size={20}
            color="white"
            onPress={() => Alert.alert(trip.adminMessage)}
            onLongPress={() => toggleInfo('Check for admin messages')}
            style={styles.icon}
          />
        )}
        {user.admin && (
          <Icon
            name="send"
            size={20}
            color="white"
            onPress={() => setToggleAddMessage(!toggleAddMessage)}
            onLongPress={() => toggleInfo('Send admin messages')}
            style={styles.icon}
          />
        )}
        {(user.admin || user.email == trip.owner) && (
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
            onPress={() => onAddTrip()}
            style={styles.icon}
          />
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={toggleAddMessage}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setToggleAddMessage(!toggleAddMessage);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Admin Message</Text>
            <TextInput
              placeholder="Add message to owner here"
              style={styles.inputView}
              label="Message"
              labelStyle={styles.label}
              value={message}
              onChangeText={msg => {
                setMessage(msg);
              }}
              multiline={true}
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setToggleAddMessage(!toggleAddMessage);
                  setMessage('');
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSend]}
                onPress={() => {
                  setToggleAddMessage(!toggleAddMessage);
                  sendMessage();
                  setMessage('');
                }}>
                <Text style={styles.textStyle}>Send</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
  // toggleApproveCard: false,
  onApprove: false,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtons: {
    flex: 0,
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonSend: {
    backgroundColor: '#2196F3',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: 'grey',
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CardHeader;
