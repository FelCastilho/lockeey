import React from 'react';
import Realm from "realm";
Realm.flags.THROW_ON_GLOBAL_REALM = true;
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';


export default function App() {

  return (

    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes/>
    </NavigationContainer>
  );
  
}
