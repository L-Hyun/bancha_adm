import React from 'react'
import styled from 'styled-components';
import MenuStore from '../../../store/MenuStore';

type Props = {
  name: string
  idx: string
  onClick: (idx: string)=>void
  padding: boolean
}

type styleProps = {
  padding: boolean
  selected: boolean
}

const MenuButton = (props: Props) => {
  const { selected } = MenuStore();

  return (
    <Btn onClick={()=>props.onClick(props.idx)} padding={props.padding} selected={props.idx == selected} >
      {props.name}
    </Btn>
  )
}

const Btn = styled.div<styleProps>`
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  padding-left: ${props => (props.padding ? '20px' : '0px')};
  background-color: ${props => (props.selected ? "#eeeeeeee" : "transparent")};

  &:hover {
    background-color: #eeeeeeee;
  }
`

export default MenuButton