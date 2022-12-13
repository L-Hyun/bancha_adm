import React from 'react'
import styled from 'styled-components'
import UserStore from '../../store/UserStore'
import UserName from '../atoms/UserName'

type Props = {
}

const UserInfo = (props: Props) => {
  const user = UserStore();
  const login = () => {};
  const logout = () => {};

  return (
    <Info onClick={user.isLoggedIn ? logout : login}>
      <UserName name={user.isLoggedIn ? user.username : "로그인"} />
    </Info>
  )
}

const Info = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #69856b;
  margin-bottom: 15px;
  padding-bottom: 15px;
  cursor: pointer;

  &:hover {
    color: #69856b;
  }
`

export default UserInfo