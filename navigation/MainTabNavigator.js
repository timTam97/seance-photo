import { Icon } from 'expo'
import React, {Component} from 'react'
import {
  createBottomTabNavigator,
  createStackNavigator,
  withNavigationFocus
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MyListScreen from '../screens/MyListScreen'
import ChatScreen from '../screens/ChatScreen'

const MainStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Freelancers',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            Icon={Icon.MaterialCommunityIcons}
            focused={focused}
            name="account-search"
          />
        ),
        // header: props => <CustomHeader {...props}/>,
        //   headerStyle: {
        //   backgroundColor: "transparent"
        // }
      }
    },
    MyList: {
      screen: MyListScreen,
      navigationOptions: {
        tabBarLabel: 'My List',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="list" />
        ),
      }
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {  
        tabBarLabel: 'Messages', 
        tabBarIcon: ({focused}) => 
          (<TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
        ),
      }
    },
    Chat: {
      screen: ChatScreen,
    },    
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'My Company',
        tabBarIcon: ({ focused }) =>
          (<TabBarIcon Icon={Icon.Feather} focused={focused} name="home" />
        )
      }
    },
  });

export default createBottomTabNavigator({
  MainStack
})
