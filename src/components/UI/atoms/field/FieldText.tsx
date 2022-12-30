import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const FieldText = (props: Props) => {
  return (
    <Text>{props.text}</Text>
  )
}

const Text = styled.div`
  width: calc(100% - 180px);
  height: 100px;
  line-height: 100px;
  font-size: 16px;
`

export default FieldText