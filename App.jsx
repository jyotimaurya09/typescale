import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
//import mobileAds from 'react-native-google-mobile-ads';
import HomeScreen from './src/screens/HomeScreen';
import GeneratedTypescale from './src/screens/GeneratedTypescale';
import Settings from './src/screens/Settings';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SavedSuccess from './src/screens/SavedSuccess';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false} }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GeneratedTypescale" component={GeneratedTypescale} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SavedSuccess" component={SavedSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App
const styles = StyleSheet.create({})