import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllTrips from '../screens/AllTrips'; 
import MyTrips from '../screens/MyTrips';

const screens = {
    AllTrips: {
        screen: AllTrips
    },
    MyTrips: {
        screen: MyTrips
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);