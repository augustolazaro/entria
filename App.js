import React, { Component } from 'react'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { StackNavigator } from 'react-navigation'

const routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}

const config = {
  initialRouteName: 'Home'
}

const NavStack = StackNavigator(routes, config)

export default class App extends Component {
  render() {
    return <NavStack />
  }
}
