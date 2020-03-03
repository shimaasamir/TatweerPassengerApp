import { createStackNavigator } from 'react-navigation-stack';
import Join from '../screens/RequestTrip/jointrip'; 
import Header from '../shared/header';
import React from 'react'; 

const screens = {   
    Join: {
        screen: Join,
        navigationOptions: ({navigation}) => {
            return {
            headerTitle: () => <Header navigation={navigation}/>,
        }
        }
    },
}

const JoinStack = createStackNavigator(screens);

export default JoinStack;