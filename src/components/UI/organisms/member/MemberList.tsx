import React, { useState } from 'react'
import ListWrapper from '../../layouts/ListWrapper'
import MemberListItem from '../../molecules/listitem/MemberListItem'
import ListPage from '../../molecules/search/ListPage'

type Props = {}

const MemberList = (props: Props) => {
  const [pageNum, setPageNum] = useState(1)
  const [selected, setSelected] = useState(1)

  const select = (e: string) => {
    setSelected(Number(e));
  }
  const get = () => {};

  return (
    <>
      <ListWrapper>
        <MemberListItem border={false} id={"회원코드"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} reviews={"후기"} purchases={"구매"} totalPrice={"누적구매액"} status={"상태"} lastLogin={"최종로그인"} />
        <MemberListItem border={true} id={"1"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} reviews={"후기"} purchases={"구매"} totalPrice={"누적구매액"} status={"상태"} lastLogin={"최종로그인"} />
      </ListWrapper>
      <ListPage selected={selected} setSelected={select} idx={pageNum}/>
    </>
  )
}

export default MemberList