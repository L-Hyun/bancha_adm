import React from 'react'
import styled from 'styled-components';
import Img from "../../../../assets/logo.png";
import { Link } from 'react-router-dom';

type Props = {
}

const Logo = (props: Props) => {
  return (
    <Link to={"/"} style={{textDecoration: 'none'}}>
      <Wrapper>
        <img src={Img} alt={"Logo"} height={"50px"}/>
        <Span>관리자 페이지</Span>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  font-size: 18px;
  color: grey;
  text-decoration: none;
`

export default Logo