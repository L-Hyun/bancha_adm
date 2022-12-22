import React from 'react'
import styled from 'styled-components'

type Props = {
  sort: (idx: number)=>void
  text: string
  flag: boolean
  idx: number
}

//▲  ▼

const ListSortBtn = (props: Props) => {
  return (
    <Btn onClick={()=>props.sort(props.idx)}>{props.text} {props.flag ? "▼" : "▲"}</Btn>
  )
}

const Btn = styled.button`
  font-size: 16px;
  color: grey;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`

export default ListSortBtn