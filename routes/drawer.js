import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import AllTripsStack from './alltripsStack';
import HomeStack from './homeStack';
import RequestaTripStack from './requestStack';
import JoinStack from './joinStack';

const RootDrawerNavigator = createDrawerNavigator(
   {
    LogIn: {
        screen: HomeStack,
    },
    AllTrips: {
        screen: AllTripsStack,
    },
    RequestaTrip: {
        screen: RequestaTripStack,
    },
    Join: {
        screen: JoinStack,
    },
}
);

export default createAppContainer(RootDrawerNavigator);