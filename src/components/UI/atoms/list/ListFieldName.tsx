import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
  width: string
}

const ListFieldName = (props: Props) => {
  return (
    <Text style={{width: props.width}}>{props.text}</Text>
  )
}

const Text = styled.div`
  font-size: 20px;
  color: grey;
`

export default ListFieldName