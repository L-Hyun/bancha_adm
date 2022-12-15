import React from 'react'
import styled from 'styled-components'
import ListPanelFieldName from '../atoms/main/ListPanelFieldName'
import PanelDetailButton from '../atoms/main/PanelDetailButton'
import PanelTitle from '../atoms/main/PanelTitle'
import ListPanelColName from '../molecules/ListPanelColName'
import ListPanelItem from '../molecules/ListPanelItem'

type Props = {
  title: string
  link: string
}

function LargeListPanel(props: Props) {
  return (
    <Wrapper>
      <PanelTitle title={props.title} />
      <FlexCol>
        <ListPanelColName title={"상품명"} date={"예약일"} qty={"수량"} price={"가격"} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} />
      </FlexCol>
      <PanelDetailButton link={props.link} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  padding: 12px 20px 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  width: 1250px;
  height: 602px;
`
const FlexRow = styled.div`
  display: flex;
  height: 70px;

`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export default LargeListPanel