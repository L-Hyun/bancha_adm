import React from 'react'
import styled from 'styled-components'
import ItemListItem from '../UI/molecules/ItemListItem'

type Props = {}

const ItemListPage = (props: Props) => {
  return (
    <Wrapper>
      <FlexCol>
        <ItemListItem title={"상품명"} id={"상품코드"} count={"누적 판매수"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
        <ItemListItem title={"상품명"} id={"상품코드"} count={"누적 판매수"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
        <ItemListItem title={"상품명"} id={"상품코드"} count={"누적 판매수"} manager={"담당자"} border={false} chkSoldOut={()=>{}} isSelling={true} />
      </FlexCol>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 100%;
`

const FlexCol = styled.section`
  margin: 20px 20px 20px;
  background-color: white;
  border-radius: 20px;;
`

export default ItemListPage