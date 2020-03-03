import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import MapView from 'react-native-maps';
import Ionicons from 'react-native-vector-icons';
import RadioForm,
{
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
}
  from 'react-native-simple-radio-button';


export default function MyTrips({ navigation }) {

  const pressHandler = () => {
    // navigation.navigate('AllTrips');
    navigation.push('Join');
  }
  const cancelTripHandler = () => {
    // navigation.navigate('AllTrips');
    navigation.push('AllTrips');
  }
  const data = [
    {
      label: "Assembly Point 1",
      id: 0
    },
    {
      label: "Assembly Point 2",
      id: 1
    },
    {
      label: "Assembly Point 3",
      id: 2
    }
  ];



  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.rtext}>El Haram-Maadi</Text>
      <Text style={globalStyles.rtext}>09:00AM-10:30AM</Text>
      <Text style={globalStyles.rpoint}>Select Your Assembly Point</Text>
      <RadioForm
        style={globalStyles.radio}
        radio_props={data}
        initial={-1}
        onPress={(id) => { }}
        selectedLabelColor={''}
        diabled={false}
        labelStyle={{
          fontSize: 16,
          fontFamily: 'roboto-regular',
          color: '#212121',
          marginLeft: 10,
        }}
      />
      <View style={globalStyles.cancel}>
        <Button color="#fff" title='Cancel Trip' onPress={cancelTripHandler} />
      </View>
      <View style={globalStyles.join}>
        <Button color="#fff" title='Join' onPress={pressHandler} />
      </View>
    </View>

  )


}