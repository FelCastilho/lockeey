import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../Pages/Home";
import Passwords from "../Pages/Passwords";

export default function Routes() {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#fff',
                headerBackground: false,
                tabBarStyle: {
                    backgroundColor: '#141414',
                }
            }}
        >

            <Tab.Screen
                name='Home'
                component={Home}

                options={{
                    tabBarIcon: ({focused, color, size }) => {
                        if(focused){
                            return <Ionicons name="home-sharp" size={size} color={color}/>
                        }else{
                            return <Ionicons name="home-outline" size={size} color={color}/>
                        }
                    }
                }}
            
            />

            <Tab.Screen
                name='Passwords'
                component={Passwords}

                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                            return <MaterialCommunityIcons name="lock-open-variant" size={size} color={color}/>
                            
                        }else{
                            return <MaterialCommunityIcons name="lock-outline" size={size} color={color}/>
                        }
                    }
                }}
            />

        </Tab.Navigator>
    )
}
