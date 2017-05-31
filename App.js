import React, { Component } from 'react'
import AppNavigator from './src/navigators/AppNavigator'
import Relay, { DefaultNetworkLayer } from 'react-relay'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:4000/graphql'))

export default class App extends Component {
  render() {
    return <AppNavigator style={{ backgroundColor: '#24292E' }} />
  }
}
