import React, { PureComponent } from 'react'
import { FlatList, Text, Button } from 'react-native'
import Card from '../components/Card'
import { ScreenView } from './_ScreenView'

export default class ReposScreen extends PureComponent {
  static navigationOptions = {
    title: 'Repositories',
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  _onPressItem = () => {
    const { navigate } = this.props.navigation
    navigate('Repo', { repoName: 'Repo Name 1' })
  }

  _renderItem({ item, index }) {
    let { navigate } = this.props.navigation
    return <Card text={ item.key } navigate={ navigate } />
  }

  render() {
    const data = [{ key: 'Repo Name 1' }, { key: 'Repo Name 2' }]
    const { navigate } = this.props.navigation
    return(
      <ScreenView>
        <FlatList data={ data } renderItem={ ({ item, index }) => <Card text={ item.key } onPressItem={ this._onPressItem.bind(this) } /> }></FlatList>
      </ScreenView>
    )
  }
}
