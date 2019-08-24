import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';

class HomeScreen extends React.Component {

  render() {
      const yesbuttontext = 'Yes';
      const nobuttontext = 'No';
      
    return (
      

      <SafeAreaView style={styles.container}>
        <Swiper 
          onSwipedRight={addToListScreen()}
          onSwipedLeft={increment()}
          cards={HomeScreenPics}
          renderCard={Card}
          infinite
          backgroundColor="white"
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

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

function increment(){
  i = i + 1
}

function addToListScreen(){
  var to_add = HomeScreenPics.splice(i, 1)
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
