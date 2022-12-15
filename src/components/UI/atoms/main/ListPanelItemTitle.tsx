import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const ListPanelItemTitle = (props: Props) => {
  return (
    <Text>{props.title}</Text>
  )
}

const Text = styled.span`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: 500px;
`

export default ListPanelItemTitle