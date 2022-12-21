import React from 'react'
import styled from 'styled-components'

type Props = {
  num: string
}

const PanelNumber = (props: Props) => {
  return (
    <Number>{props.num}</Number>
  )
}

const Number = styled.div`
  font-size: 80px;
  font-weight: 500;
  color: grey;
  text-align: center;
`

export default PanelNumber