import React from 'react'
import styled from 'styled-components'

type Props = {
  val: string
}

const ListPanelItemValue = (props: Props) => {
  return (
    <Text>{props.val}</Text>
  )
}

const Text = styled.span`
  font-size: 20px;
  text-align: center;
  width: 250px;
  border-left: 1px solid #ccc;
`

export default ListPanelItemValue