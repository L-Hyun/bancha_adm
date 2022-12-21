import React from 'react'
import ListWrapper from '../../layouts/ListWrapper'
import MemberListItem from '../../molecules/listitem/MemberListItem'

type Props = {}

const MemberList = (props: Props) => {
  const get = () => {};

  return (
    <ListWrapper>
      <MemberListItem border={false} id={"회원코드"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} reviews={"후기"} purchases={"구매"} totalPrice={"누적구매액"} status={"상태"} lastLogin={"최종로그인"} />
    </ListWrapper>
  )
}

export default MemberList