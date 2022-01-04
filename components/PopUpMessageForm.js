import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopUpMessageForm = ({
  user,
  trip,
  toggleInfo,
  onSendMessage,
  onApprove,
}) => {
  const [message, setMessage] = useState('');
  const [toggleAddMessage, setToggleAddMessage] = useState(false);

  const sendMessage = () => {
    onSendMessage(trip, message, onApprove);
    Alert.alert('Message sent successfully!');
    setMessage('');
    setToggleAddMessage(!toggleAddMessage);
  };

  return (
    <View>
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
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setToggleAddMessage(!toggleAddMessage);
                  setMessage('');
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSend]}
                onPress={() => {
                  if (message !== '') {
                    setToggleAddMessage(!toggleAddMessage);
                    sendMessage();
                    setMessage('');
                  }
                }}>
                <Text style={styles.textStyle}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 22,
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
  icon: {
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default PopUpMessageForm;
