import React from 'react'
import styled from 'styled-components';

type Props = {
  name: string
  idx: Number
  onClick: (idx: Number)=>void
  padding: boolean
}

const MenuButton = (props: Props) => {
  const style={paddingLeft: "20px"}

  return (
    <Btn style={props.padding ? style : {}} onClick={()=>props.onClick(props.idx)}>{props.name}</Btn>
  )
}

const Btn = styled.div`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  
  &:hover {
    background-color: #eeeeeeee;
  }
`

export default MenuButton