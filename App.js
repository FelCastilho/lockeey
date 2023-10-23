import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';

import PasswordProvider from './src/contexts/PasswordContext';

export default function App() {

  return (

    <NavigationContainer>
      <PasswordProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes/>
      </PasswordProvider>
    </NavigationContainer>
  );
}
