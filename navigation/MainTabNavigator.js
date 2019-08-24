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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  },
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Freelancers',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="account-search"
    />
  ),
  header: props => <CustomHeader {...props}/>,
  headerStyle: {
    backgroundColor: "transparent"
  }
}

const MyListStack = createStackNavigator(
  {
    MyList: MyListScreen,
  },
  {
    headerMode: 'none',
  },
)


MyListStack.navigationOptions = {
  tabBarLabel: 'My List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="list" />
  ),
}

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  },
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'none',
  },
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'My Company',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.Feather} focused={focused} name="home" />
  ),
}

// const ChatStack = createStackNavigator(
//   {
//     Chat: ChatScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// )

// ChatStack.navigationOptions = {
  
// }

export default createBottomTabNavigator({
  HomeStack,
  MyListStack,
  MessagesStack,
  ProfileStack,
  // ChatStack
})
