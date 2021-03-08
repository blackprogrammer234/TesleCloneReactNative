  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/CarHeader';
import CarList from './components/CarList';
import CarHeader from './components/CarHeader'

export default function App() {
  return (
    <View styles={styles.container}>
      <CarHeader/>
      <CarList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
