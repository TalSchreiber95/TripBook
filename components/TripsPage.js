import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';
import Header from './Header';
  
const TripsPage = (name,tripInfo) => {
    return (
        <View>
            {/* Note: For unknown reason name doesn't show in here */}
          <Header title="TripBook" name={name}/>
            {/* Note: Supposed to recognize tripInfo.location */}
            <Text>location is= {tripInfo.location} </Text>
        </View>
    )
}
export default TripsPage
