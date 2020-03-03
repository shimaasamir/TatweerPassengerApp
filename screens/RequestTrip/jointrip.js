import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


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
        navigation.push('AllTrips');
    }
    const data = [
        {
            label: "Assembly Point 2",
            id: 0
        },

    ];



    return (
        <View style={styles.container}>
            <Text style={styles.jtext}>El Haram-Maadi</Text>
            <Text style={styles.jtext}>09:00AM-10:30AM</Text>
            <Text style={styles.jpoint}>27 (Boarding Pass)</Text>
            <Text style={styles.jtime}>05:59:00</Text>
            <Text style={styles.call}><AntDesign name='phone' color='black' size={20} /> Call</Text>
            <Text style={styles.dir}><Entypo name='direction' color='black' size={20} /> Diriction to Station</Text>
            <Text style={styles.assemb}>Your Assembly Point         9:30AM</Text>
            <RadioForm
                style={styles.radio}
                radio_props={data}
                initial={0}
                onPress={(id) => { }}
                selectedLabelColor={''}
                diabled={false}
                labelStyle={{
                    fontSize: 16,
                    fontFamily: 'roboto-regular',
                    color: '#212121',
                    marginLeft: 5,
                }}
            />
            <Text style={styles.vehic}><Ionicons name='md-bus' color='black' size={25} /> Vehicle License Number</Text>
            <Text style={styles.driv}><FontAwesome name='user-circle' color='black' size={25} /> Driver Name</Text>
            <View style={styles.cancel}>
                <Button color="#fff" title='Cancel Trip' onPress={pressHandler} />
            </View>

        </View>

    )


}


const styles = StyleSheet.create({

    jtext: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        color: '#606060',
        textAlign: 'center',
        marginTop: 10
    },
    jpoint: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        color: '#606060',
        marginTop: 30,
        marginLeft: 15
    },
    jtime: {
        fontFamily: 'roboto-regular',
        fontSize: 30,
        color: 'black',
        marginLeft: 210,
        marginTop: -30
    },
    radio: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#606060',
        marginTop: 15,
        marginLeft: 10

    },
    cancel: {
        width: 110,
        height: 39,
        backgroundColor: '#de282e',
        borderRadius: 3,
        fontFamily: 'roboto-bold',
        fontSize: 20,
        marginTop: 55,
        marginLeft: 240
    },
    call: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginLeft: 15
    },
    dir: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginTop: -20,
        marginLeft: 180
    },
    assemb: {
        fontFamily: 'roboto-bold',
        fontSize: 16,
        color: '#212121',
        marginTop: 15,
        marginLeft: 15
    },
    vehic: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 15
    },
    driv: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 15
    }
})