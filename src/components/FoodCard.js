import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {parameters, colors} from '../global/styles'

export default function FoodCard ({
  OnPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  businessAddress,
  farAway,
  averageReview,
  images,
  screenWidth,
  numberOfReview,
}) {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image
          style={{...styles.image, width: screenWidth}}
          source={{uri: images}}
        />
        <View>
          <View>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.distance}>
              <Image
                source={require('../images/placeholder.png')}
                style={{marginTop: 3, width: 25, height: 25}}
              />
              <Text style={styles.Min}>{farAway} Min</Text>
            </View>

            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReview}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderWidth: 0,
  },
  Min: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey1,
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
  },
  review: {
    position: 'absolute',
    top: 0,
    right: 8,
    backgroundColor: colors.grey4,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numberOfReview: {
    color: 'white',
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
})
