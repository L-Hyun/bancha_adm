import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: ()=>void
}

const ListAddBtn = (props: Props) => {
  return (
    <Btn type={"button"} onClick={props.onClick}>추가</Btn>
  )
}

const Btn = styled.button`
  cursor: pointer;
  background-color: grey;
  color: white;
  width: 70px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  margin-right: 20px;
`

export default ListAddBtn