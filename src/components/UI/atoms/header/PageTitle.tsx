import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const PageTitle = (props: Props) => {
  return (
    <Title>{props.title}</Title>
  )
}

const Title = styled.div`
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  margin-left: 20px;
`

export default PageTitle