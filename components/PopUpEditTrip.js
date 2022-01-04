import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditTrip from './EditTrip';

const PopUpEditTrip = ({user, trip, toggleInfo, editCard, onApprove}) => {
  const [toggleEditCard, setToggleEditCard] = useState(false);

  return (
    <View>
        <Icon
          name="edit"
          size={20}
          color="white"
          onPress={() => setToggleEditCard(!toggleEditCard)}
          onLongPress={() => toggleInfo('Edit card')}
          style={styles.icon}
        />
      <Modal animationType="slide" transparent={true} visible={toggleEditCard}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <EditTrip
              trip={trip}
              user={user}
              editCard={editCard}
              onApprove={onApprove}
              setToggleEditCard={setToggleEditCard}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setToggleEditCard(!toggleEditCard);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
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
export default PopUpEditTrip;
