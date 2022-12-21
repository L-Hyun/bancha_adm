import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string
}

const PanelNumberLabel = (props: Props) => {
  return (
    <Label>{props.label}</Label>
  )
}

const Label = styled.span`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: -10px;
`

export default PanelNumberLabel