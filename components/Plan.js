import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomModal from './Modal';

export default function Plan() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedWorkout, setSelectedWorkout] = useState('');

    const openPopup = (workout) => {
        setSelectedWorkout(workout);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };
    const color = '#F1FADA'
    const borderRadius = 40
    const width = '50%'

    return (
        <View>
            <View>
                <Text style={{fontSize: 20}}>Recommened exercise +v+</Text>
            </View>

        
        {/* Push Workout */}
        <TouchableOpacity onPress={() => openPopup('Push')}>
            <View style={{padding: 20, flexDirection: "column", marginTop: 40 , marginLeft: 50, marginRight: 395, borderRadius: borderRadius, backgroundColor: color, height: 125, paddingTop: 45, paddingLeft: 45}}>
                <Text style={{ fontSize: 30, fontWeight:'bold' }}>Push+</Text>
            </View>
        {/* Picture */}
            <View style={{alignItems: 'flex-end', marginTop: -120, marginRight: 110}}>
                <Image style={{ width: width, height: 100, borderRadius: 20 }} source={require("../picture/Push.png")} />
            </View>
        </TouchableOpacity>
        {/* Popup for Push Workout */}
        <CustomModal visible={popupVisible} closePopup={closePopup} selectedWorkout={selectedWorkout} />

        {/* Pull Workout */}
        <TouchableOpacity onPress={() => openPopup('Pull')}>
            <View style={{padding: 20, flexDirection: "column", marginTop: 40 , marginLeft: 50, marginRight: 395, borderRadius: borderRadius, backgroundColor: color, height: 125, paddingTop: 45, paddingLeft :50}}>
                <Text style={{ fontSize: 30, fontWeight:'bold' }}>Pull+</Text>
            </View>
        {/* Picture */}
            <View style={{alignItems: 'flex-end', marginTop: -120, marginRight: 110}}>
                <Image style={{ width: width, height: 100, borderRadius: 20 }} source={require("../picture/Pull.png")} />
            </View>
        </TouchableOpacity>
        {/* Popup for Pull Workout */}
        <CustomModal visible={popupVisible} closePopup={closePopup} selectedWorkout={selectedWorkout} />


        {/* Leg Workout */}
        <TouchableOpacity onPress={() => openPopup('Leg')}>
            <View style={{padding: 20, flexDirection: "column", marginTop: 50 , marginLeft: 50, marginRight: 395, borderRadius: borderRadius, backgroundColor: color, height: 125, paddingTop: 45, paddingLeft :50}}>
                <Text style={{ fontSize: 30, fontWeight:'bold' }}>Leg+</Text>
            </View>
        {/* Picture */}
            <View style={{alignItems: 'flex-end', marginTop: -110, marginRight: 110}}>
                <Image style={{ width: width, height: 100, borderRadius: 20 }} source={require("../picture/Leg.png")} />
            </View>
        </TouchableOpacity>
        {/* Popup for Leg Workout */}
        <CustomModal visible={popupVisible} closePopup={closePopup} selectedWorkout={selectedWorkout} />


        {/* HIIT Workout */}
        <TouchableOpacity onPress={() => openPopup('HIIT')}>
            <View style={{padding: 20, flexDirection: "column", marginTop: 40 , marginLeft: 50, marginRight: 395, borderRadius: borderRadius, backgroundColor: color,height: 125, paddingTop: 45, paddingLeft :50}}>
                <Text style={{ fontSize: 30, fontWeight:'bold' }}>HIIT+</Text>
            </View>
        {/* Picture */}
            <View style={{alignItems: 'flex-end', marginTop: -110, marginRight: 110}}>
                <Image style={{ width: width, height: 100, borderRadius: 20 }} source={require("../picture/HIIT.png")} />
            </View>    
        </TouchableOpacity>
        {/* Popup for HIIT Workout */}
        <CustomModal visible={popupVisible} closePopup={closePopup} selectedWorkout={selectedWorkout} />

        </View>
        
    );
}





        

