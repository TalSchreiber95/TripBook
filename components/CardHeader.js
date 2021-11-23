import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { View, Text, StyleSheet } from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CardHeader = ({ trip, updateButton, weather, info }) => {
  return (
    <Header
      containerStyle={styles.containerStyle}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['silver', 'steelblue'],
        start: { x: 1, y: 3.5 },
        end: { x: 0, y: 0.5 },
      }}
      leftComponent={
        <View style={styles.cardHeader}>
          <LeftCardHeader trip={trip} updateButton={updateButton}
            weather={weather} />
        </View>
      }
      centerComponent={
        <View>
          <Text style={styles.text}>{trip.tripName}</Text>
        </View>
      }
      rightComponent={
        <View>

          <RightCardHeader trip={trip}
            updateButton={updateButton}
            info={info} />

        </View>
      }
    />
  );
};
CardHeader.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};
const styles = StyleSheet.create({
  cardHeader: {
    // backgroundColor: '#001f7f',
    // marginBottom: 10,
    height: 90,
  },
  containerStyle: {
    height: 85,
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
  },
  text: {
    color: 'lightgrey',
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
    alignSelf: 'flex-end'
  }
});
export default CardHeader;
