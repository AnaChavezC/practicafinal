import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import CarritoProvider from './Context/CarritoContext';

export default function App() {
  return (
    <CarritoProvider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </CarritoProvider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
