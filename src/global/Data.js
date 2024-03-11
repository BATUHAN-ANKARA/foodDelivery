export const filterData = [
  { name: 'Fast food', image: require('../assets/fastfood.png'), id: '0' },
  { name: 'Burger', image: require('../assets/hamburger.png'), id: '1' },
  { name: 'Salad', image: require('../assets/salad.png'), id: '2' },
  { name: 'Hotdog', image: require('../assets/hotdog.png'), id: '3' },
  { name: 'Chinese', image: require('../assets/chinese.png'), id: '4' },
  { name: 'Mexican', image: require('../assets/taco.png'), id: '5' },
  { name: 'Seafood', image: require('../assets/seafood.png'), id: '6' }
]

export const restaurantsData = [
  {
    restaurantsName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie Street, Cape Town',
    images:
      'https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1579721476536-V0ZXZDAJ7P1H939N5FGF/header2.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png'
      },
      {
        name: 'Big mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png'
      }
    ],
    id: 0
  },
  {
    restaurantsName: 'KFC',
    farAway: '21.2',
    businessAddress: '22 Bessie Street, Cape Town',
    images:
      'https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps, Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png'
      },
      {
        name: 'Big mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png'
      }
    ],
    id: 1
  }
]

export const productData = [
  {
    name: 'Hand cut chips',
    price: 29.3,
    image:
      'https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1579721476536-V0ZXZDAJ7P1H939N5FGF/header2.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 0
  },
  {
    name: 'Big Mac',
    price: 50.8,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 1
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
    details: '',
    id: 2
  },

  {
    name: 'Hand cut chips',
    price: 29.3,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    id: 3
  },
  {
    name: 'Big Mac',
    price: 70.2,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png',
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    id: 4
  },
  {
    name: 'Chicken Burger',
    price: 70,
    image: 'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png',
    details: '',
    id: 5
  }
]
