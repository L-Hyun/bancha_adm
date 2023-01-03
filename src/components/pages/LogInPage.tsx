import React from 'react'
import styled from 'styled-components'
import LoginPanel from '../UI/organisms/common/LoginPanel'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Wrapper>
      <LoginPanel />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 90%;
  height: 700px;
  margin-top: 50px;
  margin-left: calc(10% + 40px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default LoginPage