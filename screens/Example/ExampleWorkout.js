import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Dimensions } from "react-native";

export default function ExampleWorkout(props) {
    
    const [onlineExercise, setOnlineExercise] = useState([]);
    const loadOnlineExercise = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/LebronTime/GetBetterApp/main/exercises');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
          setOnlineExercise(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  
    useEffect(() => {
        loadOnlineExercise();
    }, []);
        

    return (
        <View style={props.style}>
             
            <FlatList
                horizontal={true}
          
                data={onlineExercise}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.force);
                        return (
                            <View style={{ marginRight : 10 }}>
                                <Text style={{ marginRight : 10 ,fontSize : 20 ,fontWeight:'bold'}}>{ item.name }</Text>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.name}
            />
            
        </View>
    );
}

