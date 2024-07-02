import '@expo/metro-runtime';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';
import Layout from './src/layout';
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
  },
});

const App: React.FC = () => {
  return (  
    <>
      <StatusBar hidden={false}/>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Layout/>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
};

export default App;
