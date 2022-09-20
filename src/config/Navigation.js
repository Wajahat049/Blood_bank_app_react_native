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

const myheaderStyle = { headerStyle: {
  backgroundColor: 'maroon',
},
headerTintColor: 'white',
headerTitleStyle: {
  fontWeight: 'bold',
},}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: 'Welcome to Blood Bank',...myheaderStyle}} name="Home" component={Home} />
        <Stack.Screen options={{title: 'Login',...myheaderStyle}} name="Login" component={Login} />
        <Stack.Screen options={{title: 'Signup',...myheaderStyle}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{title: 'Dashboard',...myheaderStyle}} name="Main" component={Main} />
        <Stack.Screen options={{title: 'Become a Donor',...myheaderStyle}} name="Become A Donor" component={BecomeADonor} />
        <Stack.Screen options={{title: 'Profile',...myheaderStyle}} name="Profile" component={Profile} />
        <Stack.Screen options={{title: 'Blood Banks',...myheaderStyle}} name="Blood Banks" component={BloodBanks} />
        <Stack.Screen options={{title: 'Search',...myheaderStyle}} name="Search" component={Search} />
        <Stack.Screen options={{title: 'BLood Request',...myheaderStyle}} name="Blood Request" component={BloodRequest} />
        <Stack.Screen options={{title: 'All Request',...myheaderStyle}} name="All Requests" component={AllRequests} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;