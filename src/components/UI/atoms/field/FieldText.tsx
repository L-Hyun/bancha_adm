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
  height: 70px;
  line-height: 70px;
  font-size: 18px;
`

export default FieldText