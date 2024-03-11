import React from 'react'
import { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native'
import Swiper from 'react-native-swiper'

export default function SignInWelcomeScreen ({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20
        }}
      >
        <Text style={{ fontSize: 26, color: '#e22bde', fontWeight: 'bold' }}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{ fontSize: 26, color: '#e22bde', fontWeight: 'bold' }}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{ flex: 4, justifyContent: 'center' }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={require('../../images/food.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={require('../../images/food2.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={require('../../images/food3.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>

          <View style={styles.slide4}>
            <Image
              source={require('../../images/drinks.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 30
          }}
        >
          <TouchableOpacity
            style={styles.styleButton}
            onPress={() => {
              navigation.navigate('SignInScreen')
            }}
          >
            <Text style={styles.buttonTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonTitle}>Create An Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  styleButton: {
    backgroundColor: '#ff00ff',
    borderRadius: 12,
    borderWidth: 0,
    height: 50,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center'
  },

  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justiftContent: 'center',
    marginTop: 10
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#e22bde'
  },
  createButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
    color: '#e22bde'
  }
})
