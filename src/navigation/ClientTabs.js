import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import MyOrderScreen from '../screens/MyOrderScreen'
import { ClientStack } from './ClientStack'

const ClientTabs = createBottomTabNavigator()

export default function RootClientTabs () {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons
      }}
    >
      <ClientTabs.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' type='material' color={color} size={size} />
          )
        }}
      />
      <ClientTabs.Screen
        name='SearchScreens'
        component={ClientStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name='search' type='material' color={color} size={size} />
          )
        }}
      />
      <ClientTabs.Screen
        name='MyAccountScreen'
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' type='material' color={color} size={size} />
          )
        }}
      />
      <ClientTabs.Screen
        name='MyOrderScreen'
        component={MyOrderScreen}
        options={{
          tabBarLabel: 'My Order',
          tabBarIcon: ({ color, size }) => (
            <Icon name='view-list' type='material' color={color} size={size} />
          )
        }}
      />
    </ClientTabs.Navigator>
  )
}
