import React, {useReducer} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import {View, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import {useState, useContext} from 'react';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {AppContext} from './Context';

const TripCard = ({
  trip,
  user,
  // deleteCard,
  // onSendMessage,
  // addTrip,
  // deletePicture,
  // deleteFeedback,
  // deleteFeedbackLive,
  onApprove,
  // editCard,
}) => {
  const {
    Trips,
    WaitingTrips,
    myTrips,
    myWaitingTrips,
    // user,
    setTrips,
    setWaitingTrips,
    setMyTrips,
    setMyWaitngTrips,
  } = useContext(AppContext);
  const [toggler, setToggler] = useState('');
  const [picture, setPicture] = useState(0);
  const [picIndex, setPicIndex] = useState(0);
  // const [pic, setPic] = useState();

  const UpdateTripToDB = async (id, trip) => {
    await fetch(`http://10.0.2.2:8080/api/trip/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // return json;
      })
      .catch(error => console.error(error));
    // fetchWaitingTrips();
  };

  const deleteTripFromDB = async id => {
    await fetch(`http://10.0.2.2:8080/api/trip/${id}`, {
      method: 'DELETE',
    }).catch(error => console.error(error));

    // fetchWaitingTrips();
  };

  const switchPictureRight = () => {
    setPicIndex((picIndex + 1) % trip.pictures.length);
    setPicture(picIndex);
  };

  const switchPictureLeft = () => {
    setPicIndex((picIndex - 1 + trip.pictures.length) % trip.pictures.length);
    setPicture(picIndex);
  };

  const updatePicture = ind => {
    setPicture(ind);
  };

  const updateButton = activeButton => {
    setToggler(activeButton);
  };
  const delPic = () => {
    switchPictureLeft();
    deletePicture(trip.id, picture, onApprove);
    Alert.alert('Picture deleted!');
  };
  const onDelPic = () => {
    return Alert.alert(
      "Deleting trip's picture card !",
      "Are you sure you want to delete this trip's picture card?",
      [
        {
          text: 'Yes',
          onPress: () => {
            delPic();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
  const onApproveTrip = () => {
    return Alert.alert(
      'Add trip card !',
      'Are you sure you want to add this trip card?',
      [
        {
          text: 'Yes',
          onPress: () => {
            addTrip(trip.trip_id);
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
            deleteCard(trip.trip_id);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };
//think its done
  const addTrip = id => {
    UpdateTripToDB(id, {isWaiting: false});
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id !== id);
    });
    setTrips([...Trips, trip]);
  };

  const deleteCard = id => {
    deleteTripFromDB(id);
    setTrips(prevCards => {
      return prevCards.filter(card => card.id !== id);
    });
  };

  const deleteWaitingCard = id => {
    deleteTripFromDB(id);
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id != id);
    });
  };

  const editCard = (updatedTrip, onApprove) => {
    const updatedWaitingTrip = {
      tripName: updatedTrip.tripName,
      category: updatedTrip.category,
      price: updatedTrip.price,
      location: updatedTrip.location,
      description: updatedTrip.description,
    };
    UpdateTripToDB(updatedTrip.trip_id, updatedWaitingTrip);
    if (!onApprove) {
      const trip = Trips.filter(t => t.id === updatedTrip.id)[0];
      trip.tripName = updatedTrip.tripName;
      // trip.category.isRelax = updatedTrip.category.isRelax;
      // trip.category.isDynamic = updatedTrip.category.isDynamic;
      // trip.category.isParty = updatedTrip.category.isParty;
      // trip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
      // trip.category.isCarTravel = updatedTrip.category.isCarTravel;
      // trip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
      // trip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
      trip.location = updatedTrip.location;
      trip.description = updatedTrip.description;
      trip.price = updatedTrip.price;
    } else {
      const waitingTrip = WaitingTrips.filter(t => t.id === updatedTrip.id)[0];;
      waitingTrip.tripName = updatedTrip.tripName;
      // waitingTrip.category.isRelax = updatedTrip.category.isRelax;
      // waitingTrip.category.isDynamic = updatedTrip.category.isDynamic;
      // waitingTrip.category.isParty = updatedTrip.category.isParty;
      // waitingTrip.category.isPetAllowed = updatedTrip.category.isPetAllowed;
      // waitingTrip.category.isCarTravel = updatedTrip.category.isCarTravel;
      // waitingTrip.category.isPlaneTravel = updatedTrip.category.isPlaneTravel;
      // waitingTrip.category.isTrainTravel = updatedTrip.category.isTrainTravel;
      waitingTrip.location = updatedTrip.location;
      waitingTrip.description = updatedTrip.description;
      waitingTrip.price = updatedTrip.price;
    }
  };

  const deletePicture = (tripId, pic, onApprove) => {
    //Add DataBase Update

    if (!onApprove) {
      const cardDeletePic = Trips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    } else {
      const cardDeletePic = WaitingTrips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    }
  };

  const onSendMessage = (trip, message, onApprove) => {
    UpdateTripToDB(id, {adminMessage: message});
    if (!onApprove) {
      const cardMessage = Trips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    } else {
      const cardMessage = WaitingTrips.filter(t => t.id === trip.id)[0];
      cardMessage.adminMessage = message;
    }
  };

  TripCard.defaultProps = {
    addTrip: () => {},
  };

  return (
    
    <View style={styles.card}>
      <CardHeader
        trip={trip}
        updateButton={updateButton}
        toggler={toggler}
        user={user}
        onApproveTrip={onApproveTrip}
        onSendMessage={onSendMessage}
        onDelete={onDelete}
        onApprove={onApprove}
        editCard={editCard}
      />
      <View style={styles.picView}>
        {trip.pictures.length > 0 ? (
          <ImageBackground
            style={styles.logo}
            source={{
              uri: trip.pictures[picture],
            }}>
            {(user.admin || user.email == trip.owner) && (
              <Icon
                name="trash-o"
                size={20}
                color="white"
                onPress={() => onDelPic()}
                // onLongPress={() => toggleInfo('Remove trip picture')}
                style={styles.icon}
              />
            )}
            <View style={styles.RLbuttonsView}>
              <Button
                title="<"
                onPress={switchPictureLeft}
                type="outline"
                titleStyle={styles.titleArrowButtons}
                buttonStyle={styles.RLbuttons}
              />
              <Button
                title=">"
                onPress={switchPictureRight}
                type="outline"
                titleStyle={styles.titleArrowButtons}
                buttonStyle={styles.RLbuttons}
              />
            </View>
          </ImageBackground>
        ) : (
          <View style={styles.noPictureView}>
            <Text style={styles.noPictureText}>
              No images uploaded. you can add some ;)
            </Text>
          </View>
        )}
      </View>
      <CardFooter
        trip={trip}
        setPicture={updatePicture}
        updateButton={updateButton}
        // deleteFeedback={deleteFeedback}
        // deleteFeedbackLive={deleteFeedbackLive}
        onApprove={onApprove}
        user={user}
        toggler={toggler}
      />
    </View>
  );
};
TripCard.defaultProps = {
  onApprove: false,
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderColor: 'grey',
    margin: 10,
    flex: 1,
    elevation: 2,
  },
  iconHeader: {
    flexDirection: 'row',
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
    flex: 1,
    justifyContent: 'center',
  },

  picView: {
    height: 400,
  },

  iconView: {
    backgroundColor: 'steelblue',
  },
  RLbuttons: {
    width: 40,
    height: 40,
    marginLeft: 130,
    marginRight: 130,
    borderRadius: 35,
    borderColor: '#24a0ed',
    borderWidth: 0.8,
    elevation: 0.5,
    backgroundColor: 'white',
    color: '#24a0ed',
  },
  icon: {
    margin: 10,
    marginLeft: 340,
    marginRight: 20,
  },
  RLbuttonsView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArrowButtons: {
    color: '#24a0ed',
  },
  noPictureView: {
    backgroundColor: 'silver',
  },
  noPictureText: {
    textAlign: 'center',
    height: '100%',
    top: 175,
    fontSize: 17,
  },
});
export default TripCard;
