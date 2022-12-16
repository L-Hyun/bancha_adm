import React, { useState } from 'react'
import styled from 'styled-components'
import LoginButton from '../atoms/login/LoginButton'
import LoginInput from '../atoms/login/LoginInput'

type Props = {}

const LoginPanel = (props: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    console.log(email, password)
  }

  return (
    <Wrapper onKeyDown={(e)=>{ if (e.key == "Enter") login(); }} >
      <LoginInput label={"이메일"} val={email} setter={setEmail} />
      <LoginInput label={"비밀번호"} val={password} setter={setPassword} />
      <LoginButton onClick={login} />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
`

export default LoginPanel