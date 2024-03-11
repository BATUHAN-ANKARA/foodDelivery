import 'react-native-gesture-handler'
import React from 'react'

import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { colors } from './src/global/styles'
import RootNavigator from './src/navigation/RootNavigator'
import HomeScreen from './src/screens/HomeScreen'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar} />
      <RootNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
