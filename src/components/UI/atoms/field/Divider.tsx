import React from 'react'
import styled from 'styled-components'

type Props = {}

const Divider = (props: Props) => {
  return (
    <Div />
  )
}

const Div = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: -1px;
`

export default Divider