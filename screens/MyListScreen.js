import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Text, Tile } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { userDB, userLists } from '../constants/Databases'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// function componentDidUpdate(){
//   component.forceUpdate()
// }
const user = 0;
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
    return (
      <SafeAreaView style={styles.padding}>
        <ScrollView>
          <Text h2 h2Style={styles.h2Style}>
            My List
          </Text>
          <Text h4 h4Style={styles.h4Style}>
            Your shortlist of potential candidates
          </Text>
          <View style={styles.grid}>
            {userLists[user].listCandidates.map((id) => (
              <Tile
                imageSrc={userDB[id].pic}
                activeOpacity={0.9}
                title={userDB[id].title}
                titleStyle={styles.title}
                featured
                key={userDB[id].title}
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
  padding: {
    paddingTop: 50,
  },
})

export default MyListScreen
