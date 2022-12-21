import React from 'react'
import styled from 'styled-components'

type Props = {
  num: string
}

const SmallListPanelNumber = (props: Props) => {
  return (
    <Number>{props.num} 건</Number>
  )
}

const Number = styled.span`
  font-size: 18px;
`

export default SmallListPanelNumber