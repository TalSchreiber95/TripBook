import React from 'react';
import HomePage from './HomePage';
import AddTrip from './AddTrip';
import Header from './Header';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Header}/>

      {/* <Drawer.Screen name="AddTrip">
        {props => (
          <AddTrip
            {...props}
            addWaitingTrip={null}
            user={Users[null]}
            getWaitingId={null}
          />
        )}
      </Drawer.Screen> */}
    </Drawer.Navigator>
  );
};

export default NavDrawer;
