import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/Home/HomeScreen';
import FavoriteScreen from '../Screen/Favorite/FavoriteScreen';
import ProfileScreen from '../Screen/Profile/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
    }}>
        <Tab.Screen name='home' 
          component={HomeScreen}
          options={{
            tabBarLabel:'Search',
            tabBarIcon:({color,size})=>(
              <AntDesign name="search1" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name='favorite' 
          component={FavoriteScreen}
          options={{
            tabBarLabel:'Favorite',
            tabBarIcon:({color,size})=>(
              <MaterialIcons name="favorite-border" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen name='profile' 
          component={ProfileScreen}
          options={{
            tabBarLabel:'Account',
            tabBarIcon:({color,size})=>(
              <FontAwesome name="user-o" size={size} color={color} />
            )
          }}
        />
    </Tab.Navigator>
  )
}