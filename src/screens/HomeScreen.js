import React, { Component } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { ScreenCenteredView } from './_ScreenView'
import styled from 'styled-components/native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: { color: 'white' }
  }

  render() {
    const { navigate } = this.props.navigation
    console.log(this.props)
    return(
      <ScreenCenteredView>
        <Button title='Profile' onPress={ () => navigate('Profile', { name: 'Augusto Lazaro' }) } />
      </ScreenCenteredView>
    )
  }
}
