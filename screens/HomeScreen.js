import React from 'react'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { userDB, userLists } from '../constants/Databases'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';
import MyListScreen from './MyListScreen';
import { GiftedChat } from 'react-native-gifted-chat';

const user = 0;
class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: userDB,
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0,
      MyListScreen: [],
      verticalSwipe: false,
      cardIndex: 0,
      userUID: -1,
    }
  }
  emSwipeLeft() {
    if (!this.state.swipedAllCards) {
      this.swiper.swipeLeft();
    }
  };
  emSwipeRight() {
    if (!this.state.swipedAllCards) {
      this.swiper.swipeRight();
    }
  };
  addToListScreen(number){
    let ID = userDB[number].UID;
   if (userLists[user].listCandidates.indexOf(ID) < 0) {
      userLists[user].listCandidates.push(ID);
      console.log(userLists[user])
   }
  }
  render() {
      const yesbuttontext = 'Accept';
      
      const nobuttontext = 'Reject';
    return (
      <SafeAreaView style={styles.container}>
        <Swiper 

          ref={(swiper) => this.swiper = swiper}
          onSwipedRight={(cardIndex) => this.addToListScreen(cardIndex)}
          onTapCard = {(cardIndex) => {console.log()}} // this isnt working yets
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          renderCard={Card}
          backgroundColor="#24262A"
          cardHorizontalMargin={0}
          stackSize={2}
          verticalSwipe={false}
          onSwipedRight={addToListScreen}
          onSwipedLeft={increment}
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 60,
    position: 'absolute',
    bottom: 15,
    width: 350,
    alignItems: 'center',
    },
})

export default HomeScreen
