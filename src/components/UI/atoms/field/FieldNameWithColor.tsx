import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
}

const FieldNameWithColor = (props: Props) => {
  return (
    <Div>{props.name}</Div>
  )
}

const Div = styled.div`
  width: 130px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 18px;
  background-color: #cccccc;
  margin-right: 30px;
`

export default FieldNameWithColor