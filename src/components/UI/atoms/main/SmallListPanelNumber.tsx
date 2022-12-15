import React from 'react'
import styled from 'styled-components'

type Props = {
  num: number
}

const SmallListPanelNumber = (props: Props) => {
  return (
    <Number>{props.num} 건</Number>
  )
}

const Number = styled.span`
  font-size: 20px;
`

export default SmallListPanelNumber