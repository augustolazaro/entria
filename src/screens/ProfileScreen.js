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

  renderItem({ item, index }) {
    return <Card text={ item.key } />
  }

  render() {
    const data = [{ key: 'First Card' }, { key: 'Second Card' }]
    return(
      <ScreenView>
        <Text>{ this.props.navigation.state.params.name }</Text>
        <FlatList data={ data } renderItem={ this.renderItem }></FlatList>
      </ScreenView>
    )
  }
}
