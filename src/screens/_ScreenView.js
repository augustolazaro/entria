import React, { Component } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

export const ScreenView = styled.View`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
`

export const ScreenCenteredView = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`
