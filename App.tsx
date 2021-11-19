import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ItemsScreen } from './src/Screens/ItemsScreen';
import { NewProductScreen } from './src/Screens/NewProductScreen';

export default function App() {
  return (
    <NewProductScreen />
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
