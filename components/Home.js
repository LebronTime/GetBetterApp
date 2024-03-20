import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
export default function Home() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10, alignItems : "center", marginTop : 50 }}>
                <View style={{ paddingLeft: 50, flexDirection: "column", alignItems : "center" }}>
                    <Text style={{ fontSize: 50 }}>Start Your Planner</Text>
                        {/* <View style={{ paddingLeft: 5, flexDirection: "column", alignItems : "center", marginTop : 20 ,marginLeft : -50}}>
                            <Text style={{ fontSize: 30 }}>Workout exercise</Text>
                        </View> */}
                </View> 
            </View>

            <View style={{ paddingLeft: 10, flexDirection: "column", alignItems : "center", marginTop : 20 ,marginLeft : -50}}>
                <Text style={{ fontSize: 30 }}>Workout exercise</Text>
            </View>

            <TouchableOpacity>
                <View style={{ paddingRight: 5, flexDirection: "column", alignItems : "center", marginTop : 20 ,marginLeft : -90,borderRadius : 55,backgroundColor:"yellow", padding: 20}}>
                    <Text style={{ fontSize: 20 }}>create your perfect Workout !! +</Text>
                </View>
            </TouchableOpacity>
                
        </View>    
        
    );
}

