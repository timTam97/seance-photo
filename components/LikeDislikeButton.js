import React from 'react'
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default class LikeDislikeButton extends React.Component {

    render() {
        return(
            <View style={styles.MainContainer}>
                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 }>
                    <Text style={styles.TextStyle}> {this.props.ButtonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    ButtonStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#636F62',
        borderRadius: 5,
        marginBottom: 20,
        padding: 30,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    }
});


