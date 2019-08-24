import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper 
          cards={HomeScreenPics}
          renderCard={Card}
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2}
          verticalSwipe={false}
          onSwipedRight={addToListScreen}
          onSwipedLeft={increment}
        />
      </SafeAreaView>
    )
  }
}
var i = 0

function increment(){
  i = i + 1
}

function addToListScreen() {
 // var to_add = HomeScreenPics.splice(i, 1)
 var hello = {
  pic: require('../assets/images/women/women5.jpg'),
  title: 'Lucy, 27',
 }
MyListScreenPics.push(hello)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default HomeScreen
