import React, { Component } from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { ScreenView } from './_ScreenView'
import { TabNavigator } from 'react-navigation'

export default class ReposScreen extends Component {
  static navigationOptions = {
    title: 'Repo',
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  render() {
    return(
      <ScreenView>
        <Text>Repo Name</Text>
      </ScreenView>
    )
  }
}
