import React from 'react'
import styled from 'styled-components'
import LoginPanel from '../UI/organisms/LoginPanel'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Wrapper>
      <LoginPanel />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default LoginPage