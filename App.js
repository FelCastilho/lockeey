import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';


export default function App() {
  LogBox.ignoreAllLogs()
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes/>
    </NavigationContainer>
  );
}
