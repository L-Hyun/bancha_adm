import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
}

const UserName = (props: Props) => {
  return (
    <Text>{props.name}</Text>
  )
}

const Text = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  width: 160px;
`

export default UserName