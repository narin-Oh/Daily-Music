import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MusicScreen from '../screens/MusicScreen';
import RecordScreen from '../screens/RecordScreen';
import InfoScreen from '../screens/InfoScreen';
import CalendarScreen from '../screens/CalendarScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // 상단 헤더 숨김
          tabBarStyle: { backgroundColor: '#e74c3c' }, // 하단 바 스타일
          tabBarActiveTintColor: 'white', // 활성화된 탭 색상
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="calendar" component={CalendarScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
