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
import { colors, parameters } from '../../global/styles'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'

export default function SignInScreen ({ navigation }) {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false)
  const textInput1 = useRef(1)
  const textInput2 = useRef(2)

  return (
    <View style={styles.container}>
      <Header title='MY ACCOUNT' navigation={navigation} />
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#e22bde' }}>
          Sign-In
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter email and password</Text>
        <Text style={styles.text1}>Registered with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder='Email'
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Focussed ? '' : 'fadeInRight'}
            duration={400}
          >
            <TouchableOpacity>
              <Image
                source={require('../../images/padlock.png')}
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </Animatable.View>

          <TextInput
            placeholder='Password'
            style={{ width: '80%' }}
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focussed(false)
            }}
            onBlur={() => {
              setTextInput2Focussed(true)
            }}
          />
          <Animatable.View
            animation={textInput2Focussed ? '' : 'fadeInLeft'}
            duration={400}
          >
            <TouchableOpacity>
              <Image
                source={require('../../images/hide.png')}
                style={{ width: 25, height: 25, marginRight: 15 }}
              />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>

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
            navigation.navigate('RootClientTabs')
          }}
        >
          <Text style={styles.buttonTitle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={styles.text1}>Forgot Password ?</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>OR</Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20
        }}
      >
        <TouchableOpacity style={styles.styleFacebook}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              justiftContent: 'center',
              marginTop: 10
            }}
          >
            Sign In With Facebook
          </Text>
          <Image
            source={require('../../images/facebook.png')}
            style={{
              width: 25,
              height: 25,
              padding: 15,
              alignSelf: 'flex-start',
              marginLeft: 25,
              marginTop: -27
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 20
        }}
      >
        <TouchableOpacity style={styles.styleGoogle}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              justiftContent: 'center',
              marginTop: 10
            }}
          >
            Sign In With Google
          </Text>
          <Image
            source={require('../../images/google-plus.png')}
            style={{
              width: 25,
              height: 25,
              padding: 15,
              alignSelf: 'flex-start',
              marginLeft: 25,
              marginTop: -27
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 25, marginLeft: 20 }}>
        <Text style={styles.text1}>New On XpressFood ?</Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonTitle}>Create An Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
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
  styleFacebook: {
    backgroundColor: '#4d4dff',
    borderRadius: 12,
    borderWidth: 0,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    height: 50
  },
  styleGoogle: {
    backgroundColor: '#ff0000',
    borderRadius: 12,
    borderWidth: 0,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    height: 50
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
    borderColor: '#e22bde'
  },
  createButtonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
    color: '#e22bde'
  }
})
