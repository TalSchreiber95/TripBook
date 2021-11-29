import React, { useReducer } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import { useState } from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import LinearGradient from 'react-native-linear-gradient';

const TripCard = ({
  trip,
  name,
  deleteCard,
  editCard,
  cardOwnerMessage,
  toggleApproveCard,
  addTrip
}) => {
  const [pic, setPicture] = useState(0);
  const [toggler, setToggler] = useState('');
  const [picIndex, setPicIndex] = useState(0);
  // const [pic, setPic] = useState();

  const switchPictureRight = () => {
    setPicIndex((picIndex + 1) % trip.pictures.length);
    setPicture(picIndex);
  };

  const switchPictureLeft = () => {
    setPicIndex((picIndex - 1 + trip.pictures.length) % trip.pictures.length);
    setPicture(picIndex);
  };

  const onAddTrip = () => {
    return Alert.alert(
      'Add trip card !',
      'Are you sure you want to add this trip card?',
      [
        {
          text: 'Yes',
          onPress: () => {
            // Alert.alert(
            //   'Approve trip supposed to be only in approve trip page',
            // );
            addTrip(trip);
            // remove waiting trip after add

          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const onDelete = () => {
    return Alert.alert(
      'Deleting trip card !',
      'Are you sure you want to remove this trip card?',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteCard(trip.id);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const onEdit = () => {
    return Alert.alert(
      'Editing trip card !',
      'Are you sure you want to edit this trip card?',
      [
        {
          text: 'Yes',
          onPress: () => {
            Alert.alert(
              'card edit supposed to be here im not sure in which way yet',
            );
            // Alert.alert(editCard(id));
            // editCard(trip.id);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const onSendMessage = () => {
    return Alert.alert(
      'add message trip card !',
      'Are you sure you want to add trip card message?',
      [
        {
          text: 'Yes',
          onPress: () => {
            Alert.alert(
              'Alert input text supposed to be here and after it should be updated!',
            );
            //cardOwenerMessage is a function that update the tripMesage
            //  cardOwnerMessage(trip.id);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const updatePicture = ind => {
    setPicture(ind);
  };

  const updateButton = activeButton => {
    setToggler(activeButton);
  };

  return (
    <View style={styles.card}>
      <LinearGradient
        // style={styles.header}
        colors={['silver', 'steelblue']}
        start={{ x: 1.6, y: 0 }}
        end={{ x: 0, y: 0 }}>
        <View style={styles.iconHeader}>
          <Icon1
            name="infocirlceo"
            size={20}
            color='gold'
            onPress={() => Alert.alert("Trip's Owner: " + trip.owner)}
            style={styles.iconLeft}
          />
          {(name.admin || name.email == trip.owner) && (
            <Icon
              name="edit"
              size={20}
              color="blue"
              onPress={() => onEdit()}
              style={styles.icon}
            />
          )}
          {(name.admin || name.email == trip.owner) && (
            <Icon1
              name="message1"
              size={20}
              color="green"
              onPress={() => Alert.alert(trip.adminMessage)}
              style={styles.icon}
            />
          )}
          {name.admin && (
            <Icon
              name="send"
              size={20}
              color="black"
              onPress={() => onSendMessage()}
              style={styles.icon}
            />
          )}
          {(name.admin || name.email == trip.owner) && (
            <Icon
              name="trash-o"
              size={20}
              color="firebrick"
              onPress={() => onDelete()}
              style={styles.icon}
            />
          )}
          {name.admin && toggleApproveCard && (
            <Icon
              name="check"
              size={20}
              color="green"
              onPress={() => onAddTrip()}
              style={styles.icon}
            />
          )}
        </View>
      </LinearGradient>
      <CardHeader trip={trip} updateButton={updateButton} toggler={toggler} />
      <View style={styles.picView}>
        <ImageBackground
          style={styles.logo}
          source={{
            uri: trip.pictures[pic],
          }}>
          <View style={styles.RLbuttonsView}>
            <Button
              title="<"
              onPress={switchPictureLeft}
              type="outline"
              titleStyle={styles.titleArrowButtons}
              // containerStyle={styles.buttonContainer}
              buttonStyle={styles.RLbuttons}
            />
            <Button
              title=">"
              onPress={switchPictureRight}
              type="outline"
              titleStyle={styles.titleArrowButtons}
              //   containerStyle={styles.buttonRight}
              buttonStyle={styles.RLbuttons}
            />
          </View>
        </ImageBackground>

        {/* There is problem with the image component - hiding the weather and info popups
        for now i changed the opacity so we can see it
        need to find solution - i tried a lot of css modifications without succeed */}
      </View>
      <CardFooter
        trip={trip}
        setPicture={updatePicture}
        updateButton={updateButton}
        toggler={toggler}
      />
    </View>
  );
};
TripCard.defaultProps = {
  toggleApproveCard: false,
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    flex: 1,
    elevation: 2,
  },
  iconHeader: {
    // flex: 2,
    // borderRadius: 15,

    // justifyContent: 'flex-end',
    flexDirection: 'row',
    // alignItems:"center",
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    letterSpacing: 5,
  },
  text: {
    color: 'gold',
    fontSize: 15,
    letterSpacing: 2,
    paddingTop: 5,
  },
  logo: {
    width: '100%',
    // height:'auto',
    // opacity: 0.5,
    flex: 1,
    // resizeMode: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',

    // borderWidth: 1,
    // borderColor: 'transparent'
    // flex: 1,
    // position: 'relative',
    // top: 0,
    // left: 0,
    // backgroundColor: 'indigo',
  },

  picView: {
    height: 400,
    // opacity: 0.5,
  },
  icon: {
    alignSelf: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
  },
  iconLeft: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginRight: 5,
  },
  iconView: {
    backgroundColor: 'steelblue',
  },
  RLbuttons: {
    width: 40,
    height: 40,
    // margin: 100,
    marginLeft: 130,
    marginRight: 130,
    borderRadius: 35,
    borderColor: '#24a0ed',
    borderWidth: 0.8,
    elevation: 0.5,
    backgroundColor: 'white',
    color: '#24a0ed',
    // alignItems: 'center',
    // alignSelf: 'center',
  },

  RLbuttonsView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 10,
    alignItems: 'center',
    // alignSelf: 'center',
  },
  titleArrowButtons: {
    // backgroundColor: 'black',
    color: '#24a0ed',
  },
});
export default TripCard;
