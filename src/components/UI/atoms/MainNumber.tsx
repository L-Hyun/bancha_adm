import React from 'react'
import styled from 'styled-components'

type Props = {
  num: number
}

const MainNumber = (props: Props) => {
  return (
    <Number>{props.num}</Number>
  )
}

const Number = styled.div`
  font-size: 50px;
  color: grey;
  text-align: center;
`

export default MainNumber