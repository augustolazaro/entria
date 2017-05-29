import React, { Component } from 'react'
import { Text } from 'react-native'
import Card from '../components/Card'
import { ScreenView } from './_ScreenView'
import { TabNavigator } from 'react-navigation'
import RepoNavOptions from './_RepoNavOptions'

export default class ReposScreen extends Component {
  static navigationOptions = RepoNavOptions

  render() {
    return(
      <ScreenView>
        <Text>Repo Name</Text>
      </ScreenView>
    )
  }
}
