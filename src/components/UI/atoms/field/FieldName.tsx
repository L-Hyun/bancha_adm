import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string;
}

const FieldName = (props: Props) => {
  return (
    <Label>{props.name}</Label>
  )
}

const Label = styled.label`
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
`

export default FieldName