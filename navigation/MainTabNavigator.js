import { MaterialCommunityIcons, FontAwesome, Feather } from '@expo/vector-icons'
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
import PortfolioScreen from '../screens/PortfolioScreen'

const Messages = createStackNavigator({
  MessagesScreen,
  Chat: {
    screen: ChatScreen,
  },
  Portfolio: {
    screen: PortfolioScreen,
  },
});

const MainStack = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Freelancers',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            Icon={MaterialCommunityIcons}
            focused={focused}
            name="account-search"
          />
        )
      }
    },
    MyList: {
      screen: MyListScreen,
      navigationOptions: {
        tabBarLabel: 'My List',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon Icon={FontAwesome} focused={focused} name="list" />
        ),
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {  
        tabBarLabel: 'Messages', 
        tabBarIcon: ({focused}) => 
          (<TabBarIcon Icon={FontAwesome} focused={focused} name="commenting-o" />
        ),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'My Company',
        tabBarIcon: ({ focused }) =>
          (<TabBarIcon Icon={Feather} focused={focused} name="home" />
        )
      }
    },
  });

export default MainStack;
