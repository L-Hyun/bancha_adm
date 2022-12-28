import React from 'react'
import ListWrapper from '../../layouts/ListWrapper'
import RecordListItem from '../../molecules/listitem/RecordListItem'

type Props = {}

const RecordList = (props: Props) => {
  return (
    <ListWrapper>
      <RecordListItem border={false} id={"예약번호"} name={"성명"} phone={"연락처"} status={"상태"} purchaseDate={"결제일"} purchaseType={"결제 방식"} title={"상품명"} qty={"수량"} price={"결제금액"} />
      <RecordListItem border={true} id={"1"} name={"성명"} phone={"연락처"} status={"상태"} purchaseDate={"결제일"} purchaseType={"결제 방식"} title={"상품명"} qty={"수량"} price={"결제금액"} />
    </ListWrapper>
  )
}

export default RecordList