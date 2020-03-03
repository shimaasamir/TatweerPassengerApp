import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import TripItem from './TripItem';




export default function Sandbox(props) {

    const [trips, setTrips] = useState([
        {
            id: '1',
            startPoint: "start Point Haram",
            routeName: "Haram - October",
            finishPoint: "finish Point october",
        },
        {
            id: '2',
            startPoint: "start Point Haram22",
            routeName: "Haram - October22",
            finishPoint: "finish Point october22",
        },
        {
            id: '3',
            startPoint: "start Point Haram33",
            routeName: "Haram - October33",
            finishPoint: "finish Point october33",
        },
    ])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={trips}
                renderItem={({ item }) => (
                    <TripItem onPress={props.onPress} routeName={item.routeName} startPoint={item.startPoint} finishPoint={item.finishPoint} />
                )}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f2f2f2'
    },
    one: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: 'lato-regular',
        fontSize: 10,
        marginTop: 12,
        color: '#606060'
    },
    route: {
        fontFamily: 'lato-light',
        fontSize: 10,
        color: '#606060',
        marginLeft: 150
    },
    route1: {
        fontFamily: 'lato-light',
        fontSize: 10,
        color: '#606060',
        marginLeft: 150,
        marginTop: 20
    },
    time: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    box: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderColor: '#c9d3dd',
        margin: 8,
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 10
    },
    num: {
        textAlign: 'center',
        fontFamily: 'opensans-bold',
        fontSize: 14
    },
    min: {
        fontFamily: 'opensans-regular',
        fontSize: 12,
        color: '#798da3',
        marginTop: 2,
        marginLeft: 6

    },
    btn: {
        backgroundColor: '#e61610',
        borderRadius: 10,
        width: 120,
        justifyContent: 'center',
        marginLeft: 50,

    }

})