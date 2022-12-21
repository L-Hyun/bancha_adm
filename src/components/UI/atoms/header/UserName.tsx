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
  font-size: 18px;
  font-weight: 900;
  width: 160px;
  color: white;
`

export default UserName