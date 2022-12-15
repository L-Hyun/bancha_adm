import React from 'react'
import styled from 'styled-components'
import Logo from '../atoms/header/Logo'
import UserInfo from '../molecules/UserInfo'

type Props = {
}

function Header({}: Props) {
  return (
    <Wrapper>
      <Logo />
      <UserInfo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`

export default Header