import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export default class Card extends PureComponent {
  _onPress() {
    this.props.onPressItem()
  }

  render() {
    console.log(this.props)
    return(
      <CardWrapper>
        <CardHeader>
          <CardTitle onPress={ this._onPress }>{ this.props.text }</CardTitle>
          <CardLabel>Private</CardLabel>
        </CardHeader>
        <CardText>Repo description.</CardText>
      </CardWrapper>
    )
  }
}

const CardWrapper = styled.View`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #E1E4E8;
`

const CardText = styled.Text`
  color: #586069;
`

const CardTitle = styled.Text`
  color: #2196f3;
  font-size: 20px;
  font-weight: bold;
`

const CardLabel = styled.Text`
  color: #BDBDBD;
  border-width: 1px;
  border-color: #BDBDBD;
  border-radius: 2px;
  padding: 0 5px;
  margin-left: 5px;
`

const CardHeader = styled.View`
  align-items: flex-start
  flex-direction: row;
`
