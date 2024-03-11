import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RestaurantHeader from '../components/RestaurantHeader'

const RestaurantHomeScreen = ({ navigation, route }) => {
  const { id, restaurant } = route.params

  return (
    <View>
      <RestaurantHeader id={id} navigation={navigation} />
    </View>
  )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 18
  },
  view1: {
    width: '100%',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    color
  }
})
