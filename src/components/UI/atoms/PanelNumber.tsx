import React from 'react'
import styled from 'styled-components'

type Props = {
  num: number
}

const PanelNumber = (props: Props) => {
  return (
    <Number>{props.num}</Number>
  )
}

const Number = styled.div`
  font-size: 150px;
  font-weight: 700;
  padding-bottom: 20px;
  color: grey;
  text-align: center;
`

export default PanelNumber