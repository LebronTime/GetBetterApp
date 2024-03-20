import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import ExampleWorkout from '../screens/Example/ExampleWorkout';

export default function CustomModal({ visible, closePopup, selectedWorkout }) {
    return (
        
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closePopup}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '100%', height: '95%' }}>
                    <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={closePopup}>
                        <Text style={{ fontSize: 24 }}>X</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 90, marginLeft: 15}}>

                        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{selectedWorkout}</Text>
                        <View style={{ marginTop: 20}}>
                            <Text style={{ fontSize: 18}}>Notes</Text>
                            <ExampleWorkout />                          
                        </View>
                        <View style={{ flexDirection: 'row',fontSize: 40, marginTop:10, justifyContent:'space-around'}}>  
                            <View>
                                <Text>Set</Text>
                            </View>
                            <View>
                                <Text>previous</Text>
                            </View>
                            <View>
                                <Text>kg</Text>
                            </View>
                            <View>
                                <Text>reps</Text>
                            </View>
                        </View>
                        
                    </View>
                    
                    
                </View>
            </View>
        </Modal>
    );
}


