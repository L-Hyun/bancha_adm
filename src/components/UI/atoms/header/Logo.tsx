import React from 'react'
import styled from 'styled-components';
import Img from "../../../../assets/logo.png";
import CustomLink from '../CustomLink';

type Props = {
}

const Logo = (props: Props) => {
  return (
    <CustomLink to={"/bancha_adm"}>
      <Wrapper>
        <img src={Img} alt={"Logo"} height={"50px"}/>
        <Span>관리자 페이지</Span>
      </Wrapper>
    </CustomLink>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  font-size: 16px;
  color: white;
  text-decoration: none;
`

export default Logo