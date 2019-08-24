import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'
import firebase from 'firebase'
import '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA5w6lXs39fEF-BLdCLIhX7NbEjErqHBF8",
    authDomain: "hire-test-db2.firebaseapp.com",
    databaseURL: "https://hire-test-db2.firebaseio.com",
    projectId: "hire-test-db2",
    storageBucket: "hire-test-db2.appspot.com",
    messagingSenderId: "292284181385",
    appId: "1:292284181385:web:66e20ba47c708388"
};


const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
) 

class ProfileScreen extends React.Component {
  state = {
    user: undefined
  }
  componentDidMount () {
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();
    let userRef = db.collection('users').doc('1');
    userRef.get().then(doc => {
    if (!doc.exists) {
      this.setState({user: {name:" NOT WORKING"}})
    } else {
      this.setState({user :doc.data()})
    }

    })
  .catch(err => {
    console.log('Error getting document', err);
  });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={"https://i.imgur.com/ADmb3H1.jpg"} style={styles.image} />
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          I love to travel. I have a cat named pickles, if he likes you, I
          probably will too.
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>Find me on Social here</Text>
        <View style={styles.socialLinks}>
          <Social name="snapchat" />
          <Social name="linkedin" />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfileScreen
