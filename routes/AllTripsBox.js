import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, DatePickerIOS, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';




export default function Sandbox() {
    return (

        <ScrollView>


            <View style={styles.container}>
                <View style={styles.one}>
                    <Text style={styles.route1}>
                        <Ionicons name="md-checkmark-circle" size={14} color="#232323" />
                        Starting Point (Address Format)</Text>
                    <Text style={styles.text}>Today</Text>
                    <Text style={styles.text}>Starting Time</Text>
                    <Text style={styles.text}>Route Name</Text>
                    <Text style={styles.text}>Trip ID</Text>
                    <Text style={styles.route}>
                        <Ionicons name="md-checkmark-circle-outline" size={14} color="#232323" />
                        Finshing Point (Address Format)</Text>
                </View>
                <View style={styles.time}>
                    <View style={styles.box}>
                        <Text style={styles.num}>06</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>00</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>00</Text>
                    </View>
                    <View style={styles.btn} >
                        <Button title="Request" color='#fff' />
                    </View>
                </View>
                <View style={styles.time}>
                    <Text style={styles.min}>Hours</Text>
                    <Text style={styles.min}>Minutes</Text>
                    <Text style={styles.min}>Seconds</Text>
                </View>

                <View style={styles.one}>
                    <Text style={styles.route1}>Starting Point (Address Format)</Text>
                    <Text style={styles.text}>Today</Text>
                    <Text style={styles.text}>Starting Time</Text>
                    <Text style={styles.text}>Route Name</Text>
                    <Text style={styles.text}>Trip ID</Text>
                    <Text style={styles.route}>Finshing Point (Address Format)</Text>
                </View>
                <View style={styles.time}>
                    <View style={styles.box}>
                        <Text style={styles.num}>05</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>58</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>05</Text>
                    </View>
                    <View style={styles.btn} >
                        <Button title="Request" color='#fff' />
                    </View>
                </View>
                <View style={styles.time}>
                    <Text style={styles.min}>Hours</Text>
                    <Text style={styles.min}>Minutes</Text>
                    <Text style={styles.min}>Seconds</Text>
                </View>

                <View style={styles.one}>
                    <Text style={styles.route1}>Starting Point (Address Format)</Text>
                    <Text style={styles.text}>Today</Text>
                    <Text style={styles.text}>Starting Time</Text>
                    <Text style={styles.text}>Route Name</Text>
                    <Text style={styles.text}>Trip ID</Text>
                    <Text style={styles.route}>Finshing Point (Address Format)</Text>
                </View>
                <View style={styles.time}>
                    <View style={styles.box}>
                        <Text style={styles.num}>00</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>00</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.num}>00</Text>
                    </View>
                    <View style={styles.btn} >
                        <Button title="Request" color='#fff' />
                    </View>
                </View>
                <View style={styles.time}>
                    <Text style={styles.min}>Hours</Text>
                    <Text style={styles.min}>Minutes</Text>
                    <Text style={styles.min}>Seconds</Text>
                </View>
            </View>
        </ScrollView>

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
        width: 100,
        justifyContent: 'center',
        marginLeft: 50,

    }

})