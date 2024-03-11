import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {parameters, colors} from '../global/styles'

export default function Header ({title, navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}>
        <Image
          source={require('../images/back.png')}
          style={{width: 30, height: 30, marginLeft: 10, marginTop: 10}}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: 8.5,
  },
})
