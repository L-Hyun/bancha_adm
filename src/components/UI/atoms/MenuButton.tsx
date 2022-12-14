import React from 'react'
import styled from 'styled-components';

type Props = {
  name: string;
  idx: Number;
  onClick: (idx: Number)=>void;
}

const MenuButton = (props: Props) => {
  return (
    <Btn onClick={()=>props.onClick(props.idx)}>{props.name}</Btn>
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
    color: red;
  }
`

export default MenuButton