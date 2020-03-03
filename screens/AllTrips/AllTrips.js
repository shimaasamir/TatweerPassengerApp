import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, DatePickerIOS } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Ionicons } from 'react-native-vector-icons';
import TripItem from './TripItem';

import AllTribsBox from './AllTripsBox';


export default function AllTrips({ navigation }) {


    const pressHandler = () => {
        navigation.push('RequestaTrip');
    }
    return (
        <AllTribsBox onPress={pressHandler} />

    );
}