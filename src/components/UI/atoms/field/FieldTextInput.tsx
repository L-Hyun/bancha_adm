import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components';

type Props = {
  value: string
  setter: Dispatch<SetStateAction<string>>
  width: string
  disabled: boolean
}

type style = {
  width: string
}

const FieldTextInput = (props: Props) => {
  return (
    <Input disabled={props.disabled} value={props.value} width={props.width} onChange={(e)=>{props.setter(e.target.value)}}/>
  )
}

const Input = styled.input<style>`
  width: ${props => props.width};
  height: 50px;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid grey;
  padding-left: 10px;
  line-height: 50px;

  &:disabled {
    background-color: #cccccc;
  }
`

export default FieldTextInput