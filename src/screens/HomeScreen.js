import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  Dimensions
} from 'react-native'
import { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { parameters, colors } from '../global/styles'
import { TouchableOpacity } from 'react-native'
import { filterData, restaurantsData } from '../global/Data'
import FoodCard from '../components/FoodCard'
import CountDown from 'react-native-countdown-component'
import { Icon } from 'react-native-elements'
import { color } from '@rneui/base'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen ({ navigation }) {
  const [delivery, setDelivery] = useState(true)
  const [indexCheck, setIndexCheck] = useState('0')
  return (
    <View style={styles.container}>
      <HomeHeader />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: colors.cardbackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true)
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false)
                navigation.navigate('RestaurantMapScreen')
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            justifyContent: 'space-evenly'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.grey5,
              borderRadius: 15,
              paddingVertical: 3,
              justifyContent: 'space-between',
              paddingHorizontal: 20
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10
              }}
            >
              <Image
                source={require('../images/map.png')}
                style={{
                  width: 25,
                  height: 25,
                  padding: 15,
                  alignSelf: 'flex-start'
                }}
              />
              <Text style={{ marginLeft: 5 }}>22 Bessie Street</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                backgroundColor: colors.cardbackground,
                borderRadius: 15,
                paddingHorizontal: 5,
                marginRight: 20
              }}
            >
              <Image
                source={require('../images/clock.png')}
                style={{
                  width: 25,
                  height: 25,
                  padding: 12,
                  alignSelf: 'flex-start'
                }}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../images/tune.png')}
              style={{
                width: 25,
                height: 25,
                padding: 12,
                alignSelf: 'flex-start',
                justifyContent: 'space-between'
              }}
            />
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id)
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15
            }}
          >
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                marginTop: -10,
                marginRight: 5
              }}
            >
              Options Changing In
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: '#54B435' }}
              digitTxtStyle={{ color: colors.cardbackground }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'Min', s: 'Sec' }}
            />
          </View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Promotions Available</Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  restaurantName={item.restaurantsName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Restaurants In Your Area</Text>
        </View>

        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {restaurantsData.map(item => (
            <View key={item.id} style={{ paddingBottom: 20 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantsName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen')
            }}
          >
            <Icon
              name='place'
              type='material'
              size={32}
              color={colors.buttons}
            />
            <Text style={{ color: colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16
  },
  headerText: {
    color: colors.grey2,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center'
  }
})
