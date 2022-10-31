import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MenuSounds from './screens/MenuSoundsScreen/MenuSoundsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MenuSoundsScreen from './screens/MenuSoundsScreen/MenuSoundsScreen';
import AirhornScreen from './screens/MenuSoundsScreen/AirhornScreen/AirhornScreen';
import BabySneezeScreen from './screens/MenuSoundsScreen/BabySneezeScreen/BabySneezeScreen';
import BreakingScreen from './screens/MenuSoundsScreen/BreakingScreen/BreakingScreen';
import BurpScreen from './screens/MenuSoundsScreen/BurpScreen/BurpScreen';
import CarScreen from './screens/MenuSoundsScreen/CarScreen/CarScreen';
import DoorBellScreen from './screens/MenuSoundsScreen/DoorBellScreen/DoorBellScreen';
import FartSoundScreen from './screens/MenuSoundsScreen/FartSoundScreen/FartSoundScreen';
import FartSongScreen from './screens/MenuSoundsScreen/FartSongScreen/FartSongScreen';
import GunScreen from './screens/MenuSoundsScreen/GunScreen/GunScreen';
import HairClipperScreen from './screens/MenuSoundsScreen/HairClipperScreen/HairClipperScreen';
import LaughingClappingScreen from './screens/MenuSoundsScreen/LaughingClappingScreen/LaughingClappingScreen';
import ManCoughScreen from './screens/MenuSoundsScreen/ManCoughScreen/ManCoughScreen';


const Stack = createNativeStackNavigator();

export default function App({props}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MenuSounds' component={MenuSoundsScreen} />
        <Stack.Screen name="Airhorn" component={AirhornScreen} />
        <Stack.Screen name="BabySneeze" component={BabySneezeScreen} />
        <Stack.Screen name="Breaking" component={BreakingScreen} />
        <Stack.Screen name="Burp" component={BurpScreen} />
        <Stack.Screen name="Car" component={CarScreen} />
        <Stack.Screen name="DoorBell" component={DoorBellScreen} />
        <Stack.Screen name="FartSound" component={FartSoundScreen} />
        <Stack.Screen name="FartSong" component={FartSongScreen} />
        <Stack.Screen name="Gun" component={GunScreen} />
        <Stack.Screen name="HairClipper" component={HairClipperScreen} />
        <Stack.Screen name="LaughingClapping" component={LaughingClappingScreen} />
        <Stack.Screen name="ManCough" component={ManCoughScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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
