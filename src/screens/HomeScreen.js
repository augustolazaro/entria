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
    console.log(this.props)
    return(
      <ScreenView>
        <Button title='Profile' onPress={ () => navigate('Profile', { name: 'Augusto Lazaro' }) } />
        <Button title='Repositories' onPress={ () => navigate('Repositories') } />
        <Button title='Repo' onPress={ () => navigate('Repo', { repoName: 'Repo Name 1' }) } />
      </ScreenView>
    )
  }
}
