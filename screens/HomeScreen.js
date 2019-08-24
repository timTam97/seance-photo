import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics, MyListScreenPics } from '../constants/Pics'
import LikeDislikeButton from '../components/LikeDislikeButton'
import { BottomTabBar } from 'react-navigation';
import MyListScreen from './MyListScreen';

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
          //onSwipedRight={addToListScreen()}
          onSwipedLeft={ () => {increment(3)} }
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

function addToListScreen(number){
  var to_add = HomeScreenPics[i]
  MyListScreenPics.push(to_add)
  //console.log(MyListScreenPics)
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
