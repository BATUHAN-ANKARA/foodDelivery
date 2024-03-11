import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import { colors } from '../global/styles'
import SearchComponent from '../components/SearchComponent'
import { filterData } from '../global/Data'

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen ({ navigation }) {
  return (
    <View style={{ marginBottom: 10, flex: 1 }}>
      <SearchComponent />
      <View style={{ marginTop: 10 }}>
        <View>
          <FlatList
            style={{}}
            data={filterData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SearchResultScreen', { item: item.name })
                }}
              >
                <View style={styles.imageView}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View>
                      <Text style={{ color: 'black' }}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </View>
  )
}

const Footer = () => {
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>
      <View style={{}}>
        <FlatList
          style={{}}
          data={filterData}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', { item: item.name })
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={item.image}>
                  <View>
                    <Text style={{ color: 'black' }}>{item.name}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More Categories</Text>
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035
  },
  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10
  },
  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12
  },
  textView: {
    height: SCREEN_WIDTH * 0.05,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey5
  }
})
