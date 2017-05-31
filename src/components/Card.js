import React, { PureComponent } from 'react'
import { Text, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'

import Relay from 'react-relay'

class Card extends PureComponent {
  _onPress() {
    this.props.onPressItem()
  }

  render() {
    return(
      <TouchableNativeFeedback onPress={ this._onPress.bind(this) }>
        <CardWrapper>
          <CardHeader>
            <CardTitle>{ this.props.text }</CardTitle>
            <CardLabel>{ this.props.root.hello }</CardLabel>
          </CardHeader>
          <CardText>Repo description.</CardText>
        </CardWrapper>
      </TouchableNativeFeedback>
    )
  }
}

export default Relay.createContainer(Card, {
  fragments: {
    root: () => Relay.QL`
      fragment on RootQueryType {
        hello
      }
    `
  }
})

const CardWrapper = styled.View`
  padding: 20px 0;
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
