import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {View, Text, StyleSheet} from 'react-native';
import LeftCardHeader from './LeftCardHeader';
import RightCardHeader from './RightCardHeader';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const CardHeader = ({trip, updateButton, toggler}) => {
  return (
    <LinearGradient
      colors={['silver', 'steelblue']}
      start={{x: 1, y: 3.5}}
      end={{x: 0, y: 0.5}}>
      <View
        style={styles.cardHeader}
        // linearGradientProps={{
        //   colors: ['silver', 'steelblue'],
        //   start: {x: 1, y: 3.5},
        //   end: {x: 0, y: 0.5},
        // }}
      >
        <LeftCardHeader
          trip={trip}
          toggler={toggler}
          updateButton={updateButton}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>{trip.tripName}</Text>
        </View>

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
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
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
    marginTop: 15,
    marginBottom: 15,
  },
  textView: {
    flex: 0.5,
    textAlign: 'center'

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
    alignSelf: 'flex-end',
  },
});
export default CardHeader;
