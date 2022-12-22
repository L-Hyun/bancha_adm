import React from 'react'
import ListWrapper from '../../layouts/ListWrapper'
import ItemListItem from '../../molecules/listitem/ItemListItem'

type Props = {}

const ItemList = (props: Props) => {
  // 한 페이지 10개

  return (
    <ListWrapper>
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"1"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={true} chkSoldOut={()=>{}} isSelling={true} />
    </ListWrapper>
  )
}

export default ItemList