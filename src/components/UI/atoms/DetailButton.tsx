import React from 'react'
import styled from 'styled-components'

type Props = {}

const DetailButton = (props: Props) => {
  return (
    <Btn>자세히 보기</Btn>
  )
}

const Btn = styled.div`
  text-decoration: underline;
  color: grey;
  font-size: 16px;
`

export default DetailButton