import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigator from "./tabNavigator";
import PostCard from "../screens/PostCard";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Post Card" component={PostCard}/>
        </Stack.Navigator>        
    )
};

export default StackNavigator;