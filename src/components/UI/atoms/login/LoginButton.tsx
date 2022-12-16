import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: ()=>void
}

const LoginButton = (props: Props) => {
  return (
    <Btn
      type={"button"}
      onClick={props.onClick}
    >로그인</Btn>
  )
}

const Btn = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: #48A061;
  color: white;
  text-align: center;
  border-radius: 10px;
  line-height: 44px;
  font-size: 20px;
  margin-top: 20px;
`

export default LoginButton