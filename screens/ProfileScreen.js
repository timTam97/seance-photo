import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Icon, Text } from 'react-native-elements'
import Layout from '../constants/Layout'
import { HomeScreenPics } from '../constants/Pics'
import { randomNo } from '../utils/randomNo'


const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    onPress= {() => socialClick(name)}
    size={32}
  />
) 


class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/profilePictures/Jayden.jpg')} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          Jayden Lee
        </Text>
        <Divider style={styles.divider} />
        <Social name="globe" />
        <Text style={styles.desc}> Melbourne, Australia
        </Text>
        <Text style={styles.desc}>I am an experienced event photographer and have done gigs for many artists and concerts, notably Marshmallo and Avici. I regularly try to push myself to get the most creative and innovative shots possible. Send me a message and we can chat :)</Text>
        
        <Divider style={styles.divider} />
        <Text style={styles.desc}>Find me on Socials here</Text>
        <View style={styles.socialLinks}>
          <Social name="instagram" />
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
