import React from 'react';
import HomePage from './HomePage';
import AddTrip from './AddTrip';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavDrawer from './NavDrawer';
const Stack = createNativeStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={NavDrawer}/>
      {/* <Stack.Screen name="AddTrip">
        {props => (
          <AddTrip
            {...props}
            // addWaitingTrip={addWaitingTrip}
            // user={Users[Index]}
            // getWaitingId={Trips.length + WaitingTrips.length + 1}
          />
        )}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default NavStack;
