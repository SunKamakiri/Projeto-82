import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed.js";
import CreatePost from "../screens/CreatePost.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === "Feed"){
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    }
                    else if(route.name === "CreatePost") {
                        iconName = focused
                        ? 'add-circle'
                        : 'add-circle-outline';
                    }
                    return <Ionicons name = {iconName} color = {color} size = {size} />;
                },

            })}
            tabBarOptions = {{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name = 'Feed' component = {Feed}/>
            <Tab.Screen name = 'Criar Post' component = {CreatePost}/>
        </Tab.Navigator>
    )
    
}

export default BottomTabNavigator;