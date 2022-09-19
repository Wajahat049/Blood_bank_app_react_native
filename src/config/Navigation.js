import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../container/login';
import SignUp from '../container/signUp';
import Home from '../container/FrontPage';
import Main from '../container/Main';
import Profile from '../container/Profile';
import BecomeADonor from '../container/BecomeADonor';
import BloodBanks from '../container/BloodBanks';
import Search from '../container/Search';
import BloodRequest from '../container/BloodRequest';
import AllRequests from '../container/AllRequests';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Become A Donor" component={BecomeADonor} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Blood Banks" component={BloodBanks} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Blood Request" component={BloodRequest} />
        <Stack.Screen name="AllRequests" component={AllRequests} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;