import React from 'react'
import styled from 'styled-components'

type Props = {
  sort: ()=>{}
  flag: boolean
}

//▲  ▼

const ListSortBtn = (props: Props) => {
  return (
    <Btn onClick={props.sort}>{props.flag ? "▼" : "▲"}</Btn>
  )
}

const Btn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 16px;
`

export default ListSortBtn