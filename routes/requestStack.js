import { createStackNavigator } from 'react-navigation-stack';
import RequestaTrip from '../screens/RequestTrip/RequestaTrip'; 
import Header from '../shared/header';
import React from 'react'; 

const screens = {   
    RequestaTrip: {
        screen: RequestaTrip,
        navigationOptions: ({navigation}) => {
            return {
            headerTitle: () => <Header navigation={navigation}/>,
        }
        }
    },
}

const RequestaTripStack = createStackNavigator(screens);

export default RequestaTripStack;