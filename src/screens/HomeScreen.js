import React, { Component } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={ styles.container }>
        <Text>Hello!</Text>
        <Button title='Profile' onPress={ () => navigate('Profile', { name: 'Augusto Lazaro' }) } />
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
