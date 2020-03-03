import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllTrips from '../screens/AllTrips/AllTrips'; 
import MyTrips from '../screens/MyTrips';
import LogIn from '../screens/LogIn';
import RequestaTrip from '../screens/RequestTrip/RequestaTrip';
import Header from '../shared/header';
import React from 'react'; 

const screens = {
    LogIn: {
        screen: LogIn,
        navigationOptions: ({navigation}) => {
            return {
            headerTitle: () => <Header navigation={navigation}/>,
        }
        }
    },
    
    AllTrips: {
        screen: AllTrips
    },
    RequestaTrip: {
        screen: RequestaTrip
    },
    MyTrips: {
        screen: MyTrips
    },
   
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);