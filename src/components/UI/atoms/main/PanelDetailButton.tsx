import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type Props = {
  link: string
}

const PanelDetailButton = (props: Props) => {
  return (
    <Link to={props.link}>
      <Btn>자세히 보기</Btn>
    </Link>
  )
}

const Btn = styled.div`
  text-align: right;
  text-decoration: underline;
  color: grey;
  font-size: 16px;

  &:hover {
    color: black;
  }
`

export default PanelDetailButton