import React from 'react'
import { Image, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native'
import Layout from '../constants/Layout'
 

class PortfolioScreen extends React.Component {

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                {/* profile pic */}
                    <View style={styles.imageContainer}>
                        <Image source={StaticScreenPics[id].pic} style={styles.image} />
                    </View>

                {/* Name */}
                
                    <Text h4 style={styles.name}>
                        {StaticScreenPics[id].title}
                    </Text>

                    <Divider style={styles.divider} />

                {/* <Social name="globe" /> */}
                
                {/* Location */}
                    <Text style={styles.desc}>
                        Based in {""}
                        <Text style={{fontWeight: "bold"}}>{StaticScreenPics[id].location}</Text>
                
                    </Text>

                {/* long-ass spiel */}
                    <Text style={styles.desc}>
                        {StaticScreenPics[id].aboutExt}
                    </Text>
                
                    <Divider style={styles.divider} />
                    <Text style={styles.desc}>Find me on Socials here</Text>
                    <View style={styles.socialLinks}>
                        <Social name="instagram"/>
                        <Social name="linkedin" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 50,
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

export default PortfolioScreen;
