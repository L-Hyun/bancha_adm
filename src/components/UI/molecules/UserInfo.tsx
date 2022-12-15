import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import UserStore from '../../store/UserStore'
import UserName from '../atoms/header/UserName'

type Props = {
}

const UserInfo = (props: Props) => {
  let navigate = useNavigate();
  const user = UserStore();
  const login = () => {navigate("/login")};
  const logout = () => {
    user.setIsLoggedIn(false);
    user.setToken("");
    user.setUsername("");
    user.setUsernumber(-1);
  };

  return (
    <Info onClick={user.isLoggedIn ? logout : login}>
      <UserName name={user.isLoggedIn ? user.username : "로그인"} />
    </Info>
  )
}

const Info = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #69856b;
  }
`

export default UserInfo