import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';
import MyListScreen from './MyListScreen';
import { GiftedChat } from 'react-native-gifted-chat';

class HomeScreen extends React.Component {

  state = {
    MyListScreen: []
  }

  render() {
      const yesbuttontext = 'Yes';
      
      const nobuttontext = 'No';
      
    return (
     
      <SafeAreaView style={styles.container}>
        <Swiper 
          onSwipedRight={ () => {addToListScreen(3)} }
          onSwipedLeft={ () => {increment(3)} }
          onTapCard = {() => {setID()}} // this isnt working yets
          cards={HomeScreenPics}
          renderCard={Card}
          infinite
          backgroundColor="#24262A"
          cardHorizontalMargin={0}
          stackSize={2}
          verticalSwipe={false}
        />
        <View style={styles.buttons}>
          <View>
            <LikeDislikeButton ButtonText={nobuttontext}></LikeDislikeButton>
          </View>
          <View>
            <LikeDislikeButton ButtonText={yesbuttontext}></LikeDislikeButton>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
var i = 0

function increment(){
  i = i + 1
}

function setID(){
  console.log("testing")
}

function addToListScreen(number){
  var to_add = HomeScreenPics[i]
  MyListScreenPics.push(to_add)
  i = i + 1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 60,
    position: 'absolute',
    bottom: 15,
    width: 350,
    alignItems: 'center'
    },
})

export default HomeScreen
