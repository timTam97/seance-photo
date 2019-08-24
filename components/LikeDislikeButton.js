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
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#000',
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
});


