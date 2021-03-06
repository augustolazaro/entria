import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Card from '../components/Card'
import { ScreenView } from './_ScreenView'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  render() {
    return(
      <ScreenView>
        <Text>{ this.props.navigation.state.params.name }</Text>
      </ScreenView>
    )
  }
}
