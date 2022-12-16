import React from 'react'
import styled from 'styled-components'
import PanelDetailButton from '../atoms/panel/PanelDetailButton'
import PanelTitle from '../atoms/panel/PanelTitle'
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
        <ListPanelItem title={"상품명"} date={"예약일"} qty={"수량"} price={"가격"} border={false} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
        <ListPanelItem title={"제목"} date={"2022-12-15"} qty={"1"} price={"20,000원"} border={true} />
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
  width: 70%;
  height: 602px;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`

export default LargeListPanel