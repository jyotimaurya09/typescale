import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import mobileAds from 'react-native-google-mobile-ads';
import HomeScreen from './src/screens/HomeScreen';
import GeneratedTypescale from './src/screens/GeneratedTypescale';
import Settings from './src/screens/Settings';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

const App = () => {
  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-6894027622437664~3103805329';
  return (
    
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false} }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GeneratedTypescale" component={GeneratedTypescale} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App
const styles = StyleSheet.create({})