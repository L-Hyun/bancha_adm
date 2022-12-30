import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  active: boolean
  text: string
  onClick: Dispatch<SetStateAction<boolean>>
}

type style = {
  active: boolean
}

const FieldBooleanButton = (props: Props) => {
  return (
    <Btn active={props.active} >{props.text}</Btn>
  )
}

const Btn = styled.button<style>`
  cursor: pointer;
  width: 84px;
  height: 30px;
  font-size: 16px;
  color: white;
  border-radius: 6px;

  background-color: ${props=>(props.active ? "#FAC234" : "grey")};
`

export default FieldBooleanButton