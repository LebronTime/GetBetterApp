import React from "react";
import { View } from "react-native";
import Home from "../components/Home";
import Plan from "../components/Plan";
export default function Workout() {
    return (
        <View style={{backgroundColor : 'lightblue', height : '100%'}}>
            
            <Home />  
            <Plan />
            

        </View>
    );
}
