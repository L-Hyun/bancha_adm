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
  font-size: 20px;
  text-align: center;
  margin-bottom: -20px;
`

export default PanelNumberLabel