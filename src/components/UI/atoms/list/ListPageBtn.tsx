import React from 'react'
import styled from 'styled-components'

type Props = {
  idx: string
  onClick: (e: string)=>void
  selected: boolean
}

type style = {
  selected: boolean
}

const ListPageBtn = (props: Props) => {
  return (
    <Btn onClick={()=>{props.onClick(props.idx)}} selected={props.selected}>{props.idx}</Btn>
  )
}

const Btn = styled.button<style>`
  cursor: pointer;
  font-size: 16px;
  color: ${props => (props.selected ? "black" : "grey")};
  font-weight: ${props => (props.selected ? "700" : "500")};
`

export default ListPageBtn