import React from 'react'
import styled from 'styled-components'

type Props = {
  nickname: string
}

const TableTitle = (props: Props) => {
  return (
    <Title>{props.nickname}</Title>
  )
}

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 20px 10px;
`

export default TableTitle