import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../Pages/Home";
import Passwords from "../Pages/Passwords";

import { MaterialIcons, AntDesign  } from '@expo/vector-icons';

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
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialIcons name="lock-outline" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Passwords'
                component={Passwords}

                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="filetext1" size={size} color={color} />
                    }
                }}
   
            />


        </Tab.Navigator>
    )
}
