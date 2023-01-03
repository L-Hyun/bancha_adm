import React from 'react'
import ListWrapper from '../../layouts/ListWrapper'
import PartnerListItem from '../../molecules/listitem/PartnerListItem'

type Props = {}

const PartnerList = (props: Props) => {
  return (
    <ListWrapper>
      <PartnerListItem border={false} id={"회원코드"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} manager={"담당자"} reviews={"후기"} purchases={"구매"} items={"상품"} status={"상태"} />
      <PartnerListItem border={true} id={"1"} email={"계정"} nickname={"닉네임"} name={"성명"} phone={"연락처"} manager={"담당자"} reviews={"후기"} purchases={"구매"} items={"상품"} status={"상태"} />
    </ListWrapper>
  )
}

export default PartnerList