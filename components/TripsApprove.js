import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

import Header from './Header';
import TripCard from './TripCard';
import GroupTripCard from './GroupTripCard';
import {useState, useEffect} from 'react';

const TripsApprove = ({
  // WaitingTrips,
  user,
  // deleteWaitingCard,
  UpdateTripToDB,
  deleteTripFromDB,
  // editCard,
  // onSendMessage,
  // addTrip,
  // deletePicture,
  // deleteFeedback,
  // deleteFeedbackLive,
  // setWaitingTrips,
}) => {
  const [WaitingTrips, setWaitingTrips] = useState([]);

  const fetchWaitingTrips = async () => {
    await fetch(`http://10.0.2.2:8080/api/tripIsWaiting`)
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        // let array = [];
        // json.forEach(trip => {
        //   array.push(
        //     ({
        //       trip_id,
        //       user_id,
        //       isWaiting,
        //       adminMessage,
        //       tripName,
        //       location,
        //       description,
        //       price,
        //     } = trip),
        //   );
        // });
        // // console.log(array);
        setWaitingTrips(json);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchWaitingTrips();
  }, []);

  const addTrip = id => {
    UpdateTripToDB(id, {isWaiting: false});
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id != id);
    });
  };
  // const addWaitingGroupTrip = waitingGroupTrip => {
  //   Alert.alert('asdsad' + String(waitingGroupTrip).toString);
  // };
  // const addWaitingTrip = waitingTrip => {
  //   setWaitingTrips([...WaitingTrips, waitingTrip]);
  //   AddTripToDB(waitingTrip);
  // };

  // const deleteCard = id => {
  //   setTrips(prevCards => {
  //     return prevCards.filter(card => card.id != id);
  //   });
  //   deleteUser;
  // };

  const deletePicture = (tripId, pic, onApprove) => {
    if (!onApprove) {
      const cardDeletePic = Trips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    } else {
      const cardDeletePic = WaitingTrips.filter(trip => trip.id === tripId)[0];
      cardDeletePic.pictures.splice(pic, 1);
    }
  };
  const deleteWaitingCard = id => {
    setWaitingTrips(prevCards => {
      return prevCards.filter(card => card.id != id);
    });
    console.log(id);
    deleteTripFromDB(id);
  };

  const editCard = (updatedTrip, onApprove) => {
    const trip = WaitingTrips.filter(t => t.id === updatedTrip.id)[0];
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
    const updatedWaitingTrip = {
      tripName: updatedTrip.tripName,
      category: updatedTrip.category,
      price: updatedTrip.price,
      location: updatedTrip.location,
      description: updatedTrip.description,
    };
    // const id = String(updatedTrip.id);
    // console.log(id);
    UpdateTripToDB(updatedTrip.trip_id, updatedWaitingTrip);
    // setWaitingTrips(WaitingTrips);
    // }
  };
  const onSendMessage = (trip, message, onApprove) => {
    // if (!onApprove) {
    const cardMessage = WaitingTrips.filter(t => t.id === trip.id)[0];
    cardMessage.adminMessage = message;
    // } else {
    //   const cardMessage = WaitingTrips.filter(t => t.id === trip.id)[0];
    //   cardMessage.adminMessage = message;
    // }
    UpdateTripToDB(trip.trip_id, {adminMessage: message});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header user={user} />
        <Text style={styles.text}>Approve trips List:</Text>
        {WaitingTrips.map(trip => (
          <TripCard
            key={trip.trip_id}
            trip={trip}
            user={user}
            deleteCard={deleteWaitingCard}
            addTrip={addTrip}
            editCard={editCard}
            onSendMessage={onSendMessage}
            deletePicture={deletePicture}
            // deleteFeedback={deleteFeedback}
            // deleteFeedbackLive={deleteFeedbackLive}
            onApprove={true}
          />
        ))}
        {/* <Text style={styles.text2}>Approve group trips List:</Text> */}
        {/* {WaitingTrips.map(trip => (
          <GroupTripCard
            key={trip.id}
            trip={trip}
            user={user}
            deleteCard={deleteGroupCard}
            editCard={editCard}
            onSendMessage={onSendMessage}
            deletePicture={deletePicture}
            deleteFeedback={deleteFeedback}
            deleteFeedbackLive={deleteFeedbackLive}
            onApprove={false}
            onGroup={true}
          />
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginEnd: 200,
    // backgroundColor: 'white'
  },
  text2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 10,
    marginEnd: 149,
    backgroundColor: 'green',
  },
  locationText: {
    margin: 10,
    marginLeft: 20,
    fontSize: 15,
    color: 'black',
  },
});

export default TripsApprove;

/*
.filter(
        trip =>
          trip.location === tripInfo.location &&
          trip.category.isRelax === tripInfo.category.isRelax &&
          trip.price >= tripInfo.price
      )
 */
