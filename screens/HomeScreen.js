import React from 'react'
import { Button, SafeAreaView, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';
import MyListScreen from './MyListScreen';
import { GiftedChat } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {Icon} from '@expo/vector-icons';

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
      const yesbuttontext = 'Accept';
      
      const nobuttontext = 'Reject';
    return (
      <SafeAreaView style={styles.container}>
        <Swiper 
          ref={(swiper) => this.swiper = swiper}
          onSwipedRight={(cardIndex) => this.addToListScreen(cardIndex)}
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          // onTapCard = {() => {setID()}} // this isnt working yets
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          renderCard={Card}
          backgroundColor="#fff"
          cardHorizontalMargin={0}
          stackSize={2}
          verticalSwipe={false}
          // onTapCard = {() => this.props.navigation.navigate('Portfolio')}
        />
        <View style={styles.portfolio}>
          <Button onPress={() => this.props.navigation.navigate('Portfolio')} title='See profile'></Button>
        </View>
        <View style={styles.buttons}>
          <View>
            <TouchableOpacity onPress={() => this.emSwipeLeft()} style={styles.redButtonStyle} activeOpacity = { .5 }>
              <Text style={styles.TextStyle}> 
                Reject
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.emSwipeRight()} style={styles.greenButtonStyle} activeOpacity = { .5 }>
              <Text style={styles.TextStyle}> 
                Accept
              </Text>
            </TouchableOpacity>
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
    alignItems: 'center',
  },
  portfolio: {
    width: 350,
    justifyContent: 'center',
    flex: 3,
    flexDirection: 'row',
    height: 40,
    position: 'absolute',
    bottom: 120,
    left: 150
  },
  greenButtonStyle: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'green',
    borderRadius: 5,
    marginBottom: 2,
    padding: 35,
    bottom: 0,
},
redButtonStyle: {
  paddingTop: 12,
  paddingBottom: 12,
  backgroundColor: 'red',
  borderRadius: 5,
  marginBottom: 2,
  padding: 35,
  bottom: 0,
},

TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
}
})

export default HomeScreen
