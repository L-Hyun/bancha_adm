import React from 'react'
import styled from 'styled-components'
import ItemListItem from '../../molecules/listitem/ItemListItem'

type Props = {}

const ItemList = (props: Props) => {
  // 한 페이지 10개

  return (
    <FlexCol>
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      <ItemListItem title={"상품명"} id={"상품코드"} sales={"누적 판매수"} views={"누적 조회수"} price={"가격"} partner={"파트너"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
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

export default ItemList