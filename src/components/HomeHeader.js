import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import {withBadge} from '@rneui/themed'
import {colors, parameters} from '../global/styles'

export default function HomeHeader () {
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../images/menu.png')}
            style={{
              width: 25,
              height: 25,
              padding: 15,
              alignSelf: 'flex-start',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          XpresFood
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../images/cart.png')}
            style={{
              width: 25,
              height: 25,
              padding: 15,
              alignSelf: 'flex-start',
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#9e1e9c',
    height: 50,
    justifyContent: 'space-between',
  },
})
