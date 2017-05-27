import React, { Component } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { ScreenView } from './_ScreenView'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: { color: 'white' }
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <ScreenView>
        <Text>Hello!</Text>
        <Button title='Profile' onPress={ () => navigate('Profile', { name: 'Augusto Lazaro' }) } />
      </ScreenView>
    )
  }
}
