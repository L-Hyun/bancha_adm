import React from 'react'
import styled from 'styled-components'

type Props = {
  sort: ()=>{}
  text: string
  flag: boolean
}

//▲  ▼

const ListSortBtn = (props: Props) => {
  return (
    <Btn onClick={props.sort}>{props.text} {props.flag ? "▼" : "▲"}</Btn>
  )
}

const Btn = styled.button`
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`

export default ListSortBtn