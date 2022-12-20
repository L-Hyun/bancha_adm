import React from 'react'
import styled from 'styled-components'
import MemberListItem from '../../molecules/listitem/MemberListItem'

type Props = {}

const MemberList = (props: Props) => {
  return (
    <FlexCol>
      <MemberListItem border={false} id={"회원코드"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} reviews={"후기"} buys={"구매"} totalPrice={"누적구매액"} status={"상태"} lastLogin={"최종로그인"} />
    </FlexCol>
  )
}

const FlexCol = styled.section`
  background-color: white;
  border-radius: 20px;
  height: 700px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }

  /* &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  } */
`

export default MemberList