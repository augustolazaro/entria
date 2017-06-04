import React, { Component } from 'react'
import AppNavigator from './src/navigators/AppNavigator'
import Relay, { DefaultNetworkLayer } from 'react-relay/classic'
import environment from './src/RelayEnvironment'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:4000/graphql'))

export default class App extends Component {
  render() {
    return <AppNavigator style={{ backgroundColor: '#24292E' }} />
  }
}
