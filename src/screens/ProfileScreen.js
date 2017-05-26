import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  }

  renderItem({ item, index }) {
    return <Text>{ item.key }</Text>
  }

  render() {
    const data = [{ key: 'This' }]
    return(
      <View style={ styles.container }>
        <Text>{ this.props.navigation.state.params.name }</Text>
        <FlatList data={ data } renderItem={ this.renderItem }></FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
