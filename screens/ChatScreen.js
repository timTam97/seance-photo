import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: (navigation.state.params || {}).title || 'Chat',
    });

    state = {
        messages: [],
    };


    render() {
        return(
            <SafeAreaView>
                <GiftedChat
                    messages={this.state.messages}
                />
            </SafeAreaView>

        )
    }
}

// const styles = StyleSheet.create({

// })

export default ChatScreen;