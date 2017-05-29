import React, { PureComponent } from 'react'
import { FlatList, Text, Button, TouchableNativeFeedback } from 'react-native'
import Card from '../components/Card'
import { ScreenView } from './_ScreenView'
import styled from 'styled-components/native'

export default class ReposScreen extends PureComponent {
  static navigationOptions = {
    title: 'Repositories',
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }

  _onPressItem() {
    const { navigate } = this.props.navigation
    return navigate('Repo', { repoName: 'Repo Name 1' })
  }

  _renderItem({ item, index }) {
    return <Card text={ item.key } onPressItem={ this._onPressItem.bind(this) } />
  }

  render() {
    const data = [{ key: 'Repo Name 1' }, { key: 'Repo Name 2' }]
    return(
      <ScreenView>
        <FlatList data={ data } renderItem={ this._renderItem.bind(this) } ItemSeparatorComponent={ ListItemSeparator } />
      </ScreenView>
    )
  }
}

const ListItemSeparator = styled.View`
  border-bottom-width: 1px;
  border-color: #E1E4E8;
`
