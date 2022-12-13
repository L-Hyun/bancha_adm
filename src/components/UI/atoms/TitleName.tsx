import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const TitleName = (props: Props) => {
  return (
    <Title>{props.title}</Title>
  )
}

const Title = styled.div`
  font-size: 20px;
`

export default TitleName