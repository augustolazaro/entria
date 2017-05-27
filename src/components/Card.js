import React, { Component } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export default class Card extends Component {
  render() {
    return(
      <CardWrapper>
        <CardText>{ this.props.text }</CardText>
      </CardWrapper>
    )
  }
}

const CardWrapper = styled.View`
  background-color: #1e88e5;
  padding: 10px 20px;
  margin-bottom: 20px;
`

const CardText = styled.Text`
  color: white;
`
