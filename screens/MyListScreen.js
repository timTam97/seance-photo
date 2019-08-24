import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Text, Tile } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { MyListScreenPics } from '../constants/Pics'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// function componentDidUpdate(){
//   component.forceUpdate()
// }

class MyListScreen extends React.Component {
  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  state = { isShowingText: true };
  
  render() {
    //componentDidUpdate()
    console.log("hhh" + MyListScreenPics)
    return (
      <SafeAreaView>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            Your list
          </Text>
          <Text h4 h4Style={styles.h4Style}>
            Your shortlist of potential candidates
          </Text>
          <View style={styles.grid}>
            {MyListScreenPics.map(({ pic, title}, i) => (
              <Tile
                imageSrc={pic}
                activeOpacity={0.9}
                title={title}
                titleStyle={styles.title}
                featured
                key={title}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  h2Style: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
  h4Style: {
    textAlign: 'center',
    color: '#757575',
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    position: 'absolute',
    left: 10,
    bottom: 50,
    backgroundColor: 'black',
    marginBottom: -2,
    padding: 10,
  },
})

export default MyListScreen
