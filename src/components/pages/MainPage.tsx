import React from 'react'
import styled from 'styled-components'
import RowGrid from '../UI/layouts/RowGrid'
import SmallListPanel from '../UI/organisms/main/SmallListPanel'
import PanelWithTwoNumber from '../UI/organisms/main/PanelWithTwoNumber'
import PanelWithOneNumber from '../UI/organisms/main/PanelWithOneNumber'
import LargeListPanel from '../UI/organisms/main/LargeListPanel'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <RowGrid>
      <SmallListPanel title={"예약건수"} numDay={"0"} numWeek={"10"} numMonth={"0"} link={'/'} />
      <SmallListPanel title={"취소건수"} numDay={"0"} numWeek={"10"} numMonth={"0"} link={'/'} />
      <SmallListPanel title={"방문자수"} numDay={"0"} numWeek={"10"} numMonth={"0"} link={'/'} />
      <FlexCol>
        <PanelWithTwoNumber width={"auto"} height={"50%"} title={"직사각형"} num1={"0"} num2={"0"} link={"/"} />
        <PanelWithOneNumber width={"auto"} height={"50%"} title={"파트너 문의"} num={"0"} link={'/'} />
      </FlexCol>
      <LargeListPanel title={"예약 내역"} link={'/'}/>
    </RowGrid>
  )
}

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26%;
  height: 550px;
  gap: 20px;
`

export default MainPage