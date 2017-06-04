import React, { PureComponent } from 'react'
import { Text, TouchableNativeFeedback } from 'react-native'
import styled from 'styled-components/native'

import Relay, { QueryRenderer, graphql } from 'react-relay'
import environment from '../RelayEnvironment'

class Card extends PureComponent {
  _onPress() {
    this.props.onPressItem()
  }

  render() {
    <QueryRenderer
      environment={ environment }
      query={ graphql`
        query CardQuery {
          viewer {
            id
          }
        }
      `}
      render={ ({error, props }) => {
        return(
          <TouchableNativeFeedback onPress={ this._onPress.bind(this) }>
            <CardWrapper>
              <CardHeader>
                <CardTitle>{ this.props.text }</CardTitle>
                <CardLabel>{ this.props.viewer.id }</CardLabel>
              </CardHeader>
              <CardText>Repo description.</CardText>
            </CardWrapper>
          </TouchableNativeFeedback>
        )
      } }
    />
  }
}

export default Card

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
