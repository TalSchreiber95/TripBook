import React, {createContext, useState} from 'react';
import HomePage from './HomePage';
import MyTrips from './MyTrips';
import TripCard from './TripCard';
import TripsApprove from './TripsApprove';
import TripsPage from './TripsPage';

export const AppContext = createContext(null);

const Context = () => {
  const [Trips, setTrips] = useState([]);
  const [WaitingTrips, setWaitingTrips] = useState([]);
  const [myTrips, setMyTrips] = useState([]);
  const [myWaitingTrips, setMyWaitingTrips] = useState([]);
  // const [user, setUser] = useState({});

  return (
    <AppContext.Provider
      value={{
        // user,
        Trips,
        WaitingTrips,
        myTrips,
        myWaitingTrips,
        // setUser,
        setTrips,
        setWaitingTrips,
        setMyTrips,
        setMyWaitingTrips,
      }}>
      {/* <App /> */}
      <HomePage />
      <TripsPage />
      <TripsApprove />
      <MyTrips />
      <TripCard />
    </AppContext.Provider>
  );
};

export default Context;
