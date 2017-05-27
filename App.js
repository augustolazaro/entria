import React, { Component } from 'react'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { StackNavigator } from 'react-navigation'

const routes = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}

const config = {
  initialRouteName: 'Home',
  cardStyle: { backgroundColor: '#424242' }
}

const NavStack = StackNavigator(routes, config)

export default class App extends Component {
  render() {
    return <NavStack style={{ backgroundColor: '#212121' }} />
  }
}
