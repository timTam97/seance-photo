import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';
import MyListScreen from './MyListScreen';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'react-native';

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: HomeScreenPics,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      MyListScreen: [],
      infinite: true,
      verticalSwipe: false,
      cardIndex: 0
    }
  }
  emSwipeLeft() {
    this.swiper.swipeLeft()
  };
  emSwipeRight() {
    this.swiper.swipeRight()
  };
  addToListScreen(number){
  var to_add = HomeScreenPics[number]
  MyListScreenPics.push(to_add)
  }
  render() {
      const yesbuttontext = 'Yes';
      
      const nobuttontext = 'No';
    return (
      <SafeAreaView style={styles.container}>
        <Swiper 
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwipedRight={(cardIndex) => this.addToListScreen(cardIndex)}
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          // onTapCard = {() => {setID()}} // this isnt working yets
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          renderCard={Card}
          backgroundColor="#24262A"
          cardHorizontalMargin={0}
          stackSize={2}
          verticalSwipe={false}
        />
        <View style={styles.buttons}>
          <View>
            <Button onPress={() => this.emSwipeLeft()} title={nobuttontext}></Button>
          </View>
          <View>
            <Button onPress={() => this.emSwipeRight()} title={yesbuttontext}></Button>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
var i = 0

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
