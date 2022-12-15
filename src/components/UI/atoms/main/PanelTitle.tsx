import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const PanelTitle = (props: Props) => {
  return (
    <Title>{props.title}</Title>
  )
}

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`

export default PanelTitle