import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  val: string
  setter: Dispatch<SetStateAction<string>>
}

const LoginInput = (props: Props) => {
  return (
    <>
      <Label>{props.label}</Label>
      <Input placeholder={props.label} type={props.label=="이메일" ? 'text' : 'password'} value={props.val} onChange={(e)=>{props.setter(e.target.value)}} />
    </>
  )
}

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
`

const Input = styled.input`
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  padding-left: 10px;
`

export default LoginInput